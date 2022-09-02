import type { NextApiRequest, NextApiResponse } from 'next';
import { mockArticles } from '../mockData';

type ResponseData = { id: string; title: string; subTitle?: string }[];

export default function articleList(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { keyword = '' } = req.query;

  const resultData = keyword
    ? mockArticles.filter(({ title, subTitle }) =>
        [title, subTitle].some((val) => val.includes(keyword as string))
      )
    : mockArticles;

  setTimeout(() => {
    res.status(200).json(resultData);
  }, 800);
}
