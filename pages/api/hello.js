import{ connectToDatabase } from '../../utils/database';

export default async function handler (req, res) {
  const {db} = await connectToDatabase();

  let doc = await db.collection('plans').find({}).toArray();
  res.json(doc);
}
