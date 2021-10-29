import { connectToDatabase } from '../../utils/database';

export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  if(req.method === 'POST'){
    const plan = JSON.parse(req.body)
    const newPlan = await db.collection('plans').insertOne(plan)
    res.json(newPlan)
  } else if (req.method === 'GET') {
    const plans = await db.collection('plans').find({userId:  {$eq: 1}})
    res.json(plans)
  }
}
