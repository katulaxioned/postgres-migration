const { Client } = require('pg')

const client = new Client({
    user: "postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "test"
})

// client.connect()
// .then(() => { console.log("Connected successfuly") })
// .then(() => client.query("select * from users"))
// .then(() => client.query("insert into users values ($1, $2, $3)", [6, 'lionel', 'messi']))
// .then(() => client.query("select * from users where firstname = $1", ['tony']))
// .then(results => { console.table(results.rows) })
// .catch(e => { console.log(e) })
// .finally(() => { client.end() })

// execute()

// async function execute() {
//     try {
//         await client.connect()
//         console.log("connected successfully.")
//         const results = await client.query("select * from users")
//         console.table(results.rows)
//     }
//     catch (err) {
//         console.log(`somthing bad happend ${err}`)
//     }
//     finally {
//         await client.end()
//         console.log("client disconnected successfully.")
//     }
// }

// async function execute() {
//     try {
//         await client.connect()
//         await client.query("BEGIN")
//         await client.query("insert into users values ($1, $2, $3)", [7, "peter", "parker"])
//         const { rows } = await client.query("select * from users")
//         console.table(rows)
//         await client.query("COMMIT")
//     }
//     catch (err) {
//         console.log(`somthing bad happend ${err}`)
//         await client.query("ROLLBACK")
//     }
//     finally {
//         await client.end()
//         console.log("cleaned.")
//     }
// }


async function addData() {
    try {
        await client.connect()
        console.log("connected successfully.")
        const results = await client.query("insert into responses values ($1, $2)", [7, '{ "arryObjects": [  {    "mongoId": "607435156b44c53e5d0544a4",    "questionBank": "450",    "responseText": "Compliance (Julian Adams)",    "responseValue": 8  },  {    "mongoId": "607435156b44c53e5d0544a5",    "questionBank": "451",    "responseText": "England",    "responseValue": 1  },  {    "mongoId": "607435156b44c53e5d0544a6",    "questionBank": "189",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544a7",    "questionBank": "190",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544a8",    "questionBank": "191",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544a9",    "questionBank": "192",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544aa",    "questionBank": "193",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544ab",    "questionBank": "194",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544ac",    "questionBank": "195",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544ad",    "questionBank": "196",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544ae",    "questionBank": "197",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544af",    "questionBank": "198",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544b0",    "questionBank": "199",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544b1",    "questionBank": "200",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544b2",    "questionBank": "201",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544b3",    "questionBank": "202",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544b4",    "questionBank": "203",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544b5",    "questionBank": "204",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544b6",    "questionBank": "205",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544b7",    "questionBank": "206",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544b8",    "questionBank": "207",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544b9",    "questionBank": "208",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544ba",    "questionBank": "209",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544bb",    "questionBank": "210",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544bc",    "questionBank": "211",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544bd",    "questionBank": "212",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544be",    "questionBank": "213",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544bf",    "questionBank": "214",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544c0",    "questionBank": "215",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544c1",    "questionBank": "216",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544c2",    "questionBank": "217",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544c3",    "questionBank": "218",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544c4",    "questionBank": "219",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544c5",    "questionBank": "220",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544c6",    "questionBank": "221",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544c7",    "questionBank": "222",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544c8",    "questionBank": "223",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544c9",    "questionBank": "224",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544ca",    "questionBank": "225",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544cb",    "questionBank": "226",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544cc",    "questionBank": "227",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544cd",    "questionBank": "228",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544ce",    "questionBank": "229",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544cf",    "questionBank": "230",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544d0",    "questionBank": "231",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544d1",    "questionBank": "232",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544d2",    "questionBank": "233",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544d3",    "questionBank": "234",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544d4",    "questionBank": "235",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544d5",    "questionBank": "236",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544d6",    "questionBank": "237",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544d7",    "questionBank": "238",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544d8",    "questionBank": "239",    "responseText": "Disagree",    "responseValue": 2  },  {    "mongoId": "607435156b44c53e5d0544d9",    "questionBank": "240",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544da",    "questionBank": "241",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544db",    "questionBank": "242",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544dc",    "questionBank": "243",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544dd",    "questionBank": "244",    "responseText": "Strongly Agree",    "responseValue": 6  },  {    "mongoId": "607435156b44c53e5d0544de",    "questionBank": "245",    "responseText": "Agree",    "responseValue": 5  },  {    "mongoId": "607435156b44c53e5d0544df",    "questionBank": "246",    "responseText": "Strongly Disagree",    "responseValue": 1  },  {    "mongoId": "607435156b44c53e5d0544e0",    "questionBank": "247",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544e1",    "questionBank": "248",    "responseText": "Somewhat Disagree",    "responseValue": 3  },  {    "mongoId": "607435156b44c53e5d0544e2",    "questionBank": "249",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544e3",    "questionBank": "250",    "responseText": "Somewhat Agree",    "responseValue": 4  },  {    "mongoId": "607435156b44c53e5d0544e4",    "questionBank": "251",    "responseText": "Disagree",    "responseValue": 2  }]}'])
        console.log(results)
    }
    catch (err) {
        console.log(`somthing bad happend ${err}`)
    }
    finally {
        await client.end()
        console.log("client disconnected successfully.")
    }
}

// async function deleteTableData() {
//     try {
//         await client.connect()
//         console.log("connected successfully.")
//         const results = await client.query("delete from responses")
//         console.log(results)
//     }
//     catch (err) {
//         console.log(`somthing bad happend ${err}`)
//     }
//     finally {
//         await client.end()
//         console.log("client disconnected successfully.")
//     }
// }

addData()