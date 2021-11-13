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
  const [isLoading, setIsLoading] = useState(true);
  const { hasNext } = useSelector((state: ReducerType) => state.ranking);
  const dispatch = useDispatch();

  const fetchData = async function () {
    setIsLoading(true);
    await axFetch(API.COMIC_RANKING_LIST, { page })
      .then(function (res) {
        const {
          data: { data },
        } = res;
        setIsLoading(false);
        dispatch({
          type: AC_RANKING.SET_RANKING_LIST,
          payload: data,
        });
      })
      .catch(function (e) {
        const {
          response: {
            data: { error },
          },
        } = e;
        setIsLoading(false);
        alert(error);
      });
  };

  let timer!: any;

  const debounce = function (time: number, callback: () => void) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      callback();
    }, time);
  };

  const scollEvent = function (): void {
    debounce(100, function () {
      const scrollY = Number(window.scrollY || window.pageYOffset || 0);
      const scrollHeight = Number(document.body.scrollHeight);
      if (scrollHeight <= scrollY + window.innerHeight && hasNext && page < 5) {
        setPage(page + 1);
      }
    });
  };

  useEffect(() => {
    fetchData();
    window.addEventListener('scroll', scollEvent);
    return function () {
      // clean
      window.removeEventListener('scroll', scollEvent);
    };
  }, [page]);

  return (
    <Wrapper>
      <ListTemplate title={'로맨스 장르 랭킹'} isLoading={isLoading} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5px;
`;
