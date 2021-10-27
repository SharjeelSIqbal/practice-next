// const { connectToDatabase } = require('../../utils/database');
// const ObjectId = require('mongodb').ObjectId;

// export default async function handler(req, res) {
//   let { db } = await connectToDatabase();
//   res.json()


// }
import nextConnect from "next-connect";
import middleware from "../../utils/database";


const handler = nextConnect();
handler.use(middleware);


export default handler.get(async (req, res) => {
  let doc = await req.db.collection('events')
  console.log(doc);
  res.json(doc);
})
