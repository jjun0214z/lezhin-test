import { API_COMICS } from '@/assets/api';
import { axFetch } from '@/utils/axios';
import axios from 'axios';
import { useEffect } from 'react';

function RankingList() {
  useEffect(() => {
    axFetch(API_COMICS.COMIC_RANKING_LIST, { page: 1 });
  }, []);
  return <div>1</div>;
}

export default RankingList;
