const { Client } = require('pg')
const axios = require("axios")

const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: "5432",
    database: "unidb"
})

async function migrateData() {
    try {
        await client.connect()
        console.log("connected successfully.")

        const responseData = await client.query("select * from respondent_answers order by id asc limit 10")
        // let securityCount = 0;
        // responseData.rows.forEach(row => {
        //     securityCount += row.answers.length
        // })
        // console.log(securityCount)

        const newDbDataCount = await axios.get("http://localhost:1337/responses/count")
        console.log(newDbDataCount.data)
        let bigBadEntryRefId = 0;
        let stableEntryRefId = 0;

        const jwtToken = await axios.post("http://localhost:1337/auth/local", {
            identifier: "ronaldo",
            password: "prdxn389"
        })
        console.log(jwtToken.data.jwt, "loged in.")

        if (newDbDataCount.data > 0) {
            const newDbData = await axios.get("http://localhost:1337/responses?_limit=-1")

            newDbData.data.forEach(data => {
                if (data.referenceid > bigBadEntryRefId) {
                    bigBadEntryRefId = data.referenceid
                    stableEntryRefId = data.referenceid - 1;
                }
            })
            console.log(`bad entry id no is ${bigBadEntryRefId}`)

            const badEntryIds = []
            newDbData.data.forEach(entry => {
            if (entry.referenceid === bigBadEntryRefId) {
                badEntryIds.push(entry.id);
            }
            })
            console.log("bad entrys are :", badEntryIds, badEntryIds.length)
        

            for (let d = 0; d < badEntryIds.length; d++) {
                const deleteResult = await axios.delete(`http://localhost:1337/responses/${badEntryIds[d]}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwtToken.data.jwt}`
                    }
                })
                console.log(`${deleteResult.data.id} bad entry deleted successfully.`)
            }
        }

        authAxios = axios.create({
            baseURL: "http://localhost:1337/",
            headers: {
                Authorization: `Bearer ${jwtToken.data.jwt}`
            }
        })

        for (let j = 0; j < responseData.rows.length; j++) {
            for (let i = 0; i < responseData.rows[j].answers.length; i++) {

                if (bigBadEntryRefId > stableEntryRefId) {
                    j = stableEntryRefId;
                }

                // if (i === 5) {
                //     j++;
                //     i = 0;
                // }
                
                // if (j > 2) {
                //     throw new Error('this is custom err')
                // }

                const result = await authAxios.post('responses', {
                    survey: responseData.rows[j].survey,
                    respondent: responseData.rows[j].respondent,
                    mongoid: responseData.rows[j].answers[i].mongoId,
                    questionbank: responseData.rows[j].answers[i].questionBank,
                    responsetext: responseData.rows[j].answers[i].responseText,
                    responsevalue: responseData.rows[j].answers[i].responseValue,
                    referenceid: responseData.rows[j].id
                })

                console.log(result.data.referenceid, "migrated successfully.")
            }
            stableEntryRefId++;
        }

    }
    catch (err) {
        console.log('somthing went wrong!', err)
    }
    finally {
        await client.end()
        console.log("client disconnected successfully.")
    }
}

migrateData()