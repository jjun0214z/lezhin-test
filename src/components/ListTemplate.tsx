import styled from 'styled-components';
import FilterList from '@/components/FilterList';
import Item from '@/components/Item';
import { useSelector } from 'react-redux';
import { ReducerType } from '@/store/reducers';
import { ComicRankItem } from '@/types/mock';
import { IRootState as rankingState } from '@/store/reducers/rankingReducer';

interface IProps {
  title: string;
}

export default function ListTemplate({ title }: IProps) {
  const { comicRankList }: rankingState = useSelector(
    (state: ReducerType) => state.ranking
  );

  const sortOptions = [
    {
      label: '연재 중',
      value: '01',
    },
    {
      label: '완결',
      value: '02',
    },
    {
      label: '무료회차 3개 이상',
      value: '03',
    },
  ];

  return (
    <>
      <Title>{title}</Title>
      <FilterList />
      <WebToonList>
        {comicRankList.map((item) => {
          return <Item key={item.id} itemInfo={item} />;
        })}
      </WebToonList>
    </>
  );
}

const Title = styled.h1`
  font-size: 20px;
  color: #000;
`;
const WebToonList = styled.div``;
