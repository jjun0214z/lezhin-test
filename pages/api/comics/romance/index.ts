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
>().get((req, res) => {
  const {
    query: { page },
  } = req;

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
    res.statusCode = 200;
    res.json({
      data: {
        hasNext,
        count,
        comicRankList: data,
      },
    });
  } else {
    res.json({
      error: '페이지가 없습니다.',
    });
  }
});
export default handler;
