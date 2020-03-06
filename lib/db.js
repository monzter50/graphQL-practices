const {MongoClient,ObjectID} = require('mongodb')
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME
} = process.env

const mongoURL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`
let connection;
async function connectDB(){
  console.log('entre')
  if(connection) return connection
  let  client;
  try {
    client= await MongoClient.connect(mongoURL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connection = client.db(DB_NAME)
    console.log('me conecte perro',connection)
  } catch (error) {
    console.error('Could not connect to bd',mongoURL, error)
    process.exit(1)
  }
  return connection
}

module.exports = connectDB