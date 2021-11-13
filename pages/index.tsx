import { API_COMICS } from '@/assets/api';
import { ReducerType } from '@/store/reducers';
import { AC_RANKING } from '@/store/reducers/types';
import { axFetch } from '@/utils/axios';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RankingList() {
  const { rankingList } = useSelector((state: ReducerType) => state.ranking);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch({
    //   type: AC_RANKING.SET_RANKING_LIST,
    //   payload: [],
    // });
    // axFetch(API_COMICS.COMIC_RANKING_LIST, { page: 1 });
  }, []);
  return <div>1</div>;
}

export default RankingList;
