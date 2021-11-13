import styled from 'styled-components';
import FilterList from '@/components/FilterList';

interface IProps {
  title: string;
}

export default function ListTemplate({ title }: IProps) {
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
    </>
  );
}

const Title = styled.h1`
  font-size: 20px;
  color: #000;
`;
