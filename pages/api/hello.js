import nextConnect from "next-connect";
import middleware from "../../utils/database";


const handler = nextConnect();
handler.use(middleware);


export default handler.get(async (req, res) => {
  let doc = await req.db.collection('events')
  console.log(doc);
  res.json(doc);
})
