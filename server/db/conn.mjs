import { MongoClient } from "mongodb";

const mongo_user = process.env.MONGO_USER;
const mongo_pass = process.env.MONGO_PASS;
const mongo_port = process.env.MONGO_PORT;
const mongo_host = process.env.MONGO_HOST;
const connectionString = `mongodb://${mongo_user}:${mongo_pass}@${mongo_host}:${mongo_port}/`;
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
