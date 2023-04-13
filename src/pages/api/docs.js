import dbConnect from '../../utils/dbConnect';
import Docs from '../../models/docs';

export default async function handler(req, res) {

  await dbConnect();

  if (req.method === 'GET') {

    try {
      const docs = await Docs.find({});
      res.status(200).json({ docs });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

  } else if (req.method === 'POST') {
    
    const { name, text } = req.body;

    try {

      const newDoc = await Docs.create({ name, text });
      res.status(201).json({ user: newDoc });

    } catch (error) {

      res.status(400).json({ error: error.message });

    }

  } else {

    res.status(405).json({ message: 'Method not allowed' });

  }
}
