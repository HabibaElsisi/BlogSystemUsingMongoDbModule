import { MongoClient } from "mongodb";

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);


const dbName = 'BlogSystem';
  await client.connect().then(()=>{
    console.log('Connected successfully to server');
  }).catch((err)=>{
    console.log("database connected failed",err);
  })
  export const db = client.db(dbName);
  

