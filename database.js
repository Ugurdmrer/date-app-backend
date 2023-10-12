const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const db_user = process.env.PGUSER
const db_password = process.env.PGPASSWORD
const db_host = process.env.PGHOST
const db_database = process.env.PGDATABASE
const db_port = process.env.PGPORT

console.log(db_user)


const client = new pg.Client({
   host: db_host,
   port: db_port,
   database: db_database,
   user: db_user,
   password: db_password,
 })


try {
   client.connect()
} catch (err) {
   console.error(err + "Error connecting to Postgres database");
}

module.exports = client;