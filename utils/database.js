import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const {DB_URI, DB_NAME, DB_PORT} = process.env;


const client = new MongoClient(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function database(req, res, next) {
  await client.connect();
  req.dbClient = client;
  req.db = client.db('CalenderApp');
  return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;
