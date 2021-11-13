import { axFetch } from '@/utils/axios';
import axios from 'axios';
import { useEffect } from 'react';

function RankingList() {
  useEffect(() => {
    axFetch({ url: '/comics/romance', method: 'get' }, { page: 1 });
  }, []);
  return <div>1</div>;
}

export default RankingList;
