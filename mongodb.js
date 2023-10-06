const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'


// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'music_player_db';

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('songs');
    return collection;
}
module.exports = dbConnect;