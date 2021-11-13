import API from '@/assets/api/comics';
import { ReducerType } from '@/store/reducers';
import { axFetch } from '@/utils/axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { AC_RANKING } from '@/store/reducers/types';
import styled from 'styled-components';
import ListTemplate from '@/components/ListTemplate';

export default function RankingList() {
  const [page, setPage] = useState(1);
  const { count, hasNext, comicRankList } = useSelector(
    (state: ReducerType) => state.ranking
  );
  const dispatch = useDispatch();

  const fetchData = async function () {
    const res = await axFetch(API.COMIC_RANKING_LIST, { page });
    if (res && res.status === 200) {
      const {
        data: { data },
      } = res;

      dispatch({
        type: AC_RANKING.SET_RANKING_LIST,
        payload: data,
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Wrapper>
      <ListTemplate title={'로맨스 장르 랭킹'} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5px;
`;
