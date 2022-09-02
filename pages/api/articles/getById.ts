import type { NextApiRequest, NextApiResponse } from 'next';
import { mockArticles } from '../mockData';

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  console.log(req.query);
  res.status(200).json(mockArticles.find((item) => item.id === id));
}
