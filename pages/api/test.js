import { connectToDatabase } from "../../utils/database";

export default async function handler (req, res ) {
  const {db} = await connectToDatabase()
  const plans = await db.collection('plans').find({}).toArray()
  res.json(plans)
}
