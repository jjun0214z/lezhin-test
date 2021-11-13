// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

import {
  ComicRankApiSuccessResponse,
  ComicRankApiFailResponse,
  ComicRankItem,
} from '@/types/mock';

const handler = nc<
  NextApiRequest,
  NextApiResponse<ComicRankApiSuccessResponse | ComicRankApiFailResponse>
>({
  onError: (err, req, res, next) => {
    res.status(500).send({ error: 'API 호출에 실패했습니다.' });
  },
  onNoMatch: (req, res, next) => {
    res.status(404).send({ error: '페이지가 없습니다' });
  },
}).get((req, res) => {
  const {
    query: { page },
  } = req;
  console.log(Number(page));
  if (Number(page) < 5) {
    const mock = require(`@/mock/page_${page}.json`) || null;
    const {
      hasNext,
      count,
      data,
    }: {
      hasNext: boolean;
      count: number;
      data: ComicRankItem[];
    } = mock as { hasNext: boolean; count: number; data: ComicRankItem[] };
    // res.statusCode = 200;
    res.json({
      data: {
        hasNext,
        count,
        comicRankList: data,
      },
    });
  } else {
    res.status(404).send({ error: 'API 호출에 실패했습니다.' });
  }
});
export default handler;
