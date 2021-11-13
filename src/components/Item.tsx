import { ComicRankItem } from '@/types/mock';
import styled from 'styled-components';

interface IProps {
  itemInfo: ComicRankItem;
}

export default function Item({ itemInfo }: IProps) {
  const {
    id,
    alias,
    title,
    artists,
    schedule,
    genres,
    freedEpisodeSize,
    contentsState,
    currentRank,
    previousRank,
    updatedAt,
    print,
    thumbnailSrc,
  } = itemInfo;

  const week = [
    { en: 'MON', ko: '월' },
    { en: 'TUE', ko: '화' },
    { en: 'WED', ko: '수' },
    { en: 'THU', ko: '목' },
    { en: 'FRI', ko: '금' },
    { en: 'SAT', ko: '토' },
    { en: 'SUN', ko: '일' },
  ];

  const visibleArtists = artists.filter((artist) => {
    if (
      artist.role === 'writer' ||
      artist.role === 'painter' ||
      artist.role === 'scripter'
    ) {
      return true;
    }
  });

  const isRanking = (function (): {
    color?: string;
    label: string;
  } {
    if (currentRank > previousRank) {
      return {
        color: 'red',
        label: '랭킹 상승',
      };
    } else if (currentRank < previousRank) {
      return { color: 'blue', label: '하락' };
    }
    return { label: '변동없음' };
  })();

  const isSchedule = (function (): string {
    if (contentsState === 'scheduled') {
      const { periods } = schedule;
      return `매주 ${(
        periods.map((period) => {
          const target = week.find((w) => w.en === period);
          return target ? target.ko : '';
        }) || []
      ).join(', ')} 연재`;
    }
    return '완결';
  })();

  return (
    <ItemBox>
      <img src={thumbnailSrc} alt={title} />
      <div className="info">
        <em className="title">{title}</em>
        <InfoList>
          {visibleArtists.length > 0 && (
            <li>
              {visibleArtists.map((artist, i) => {
                return (
                  <span key={artist.id}>
                    {i !== 0 && ','} <em>{artist.name}</em>
                  </span>
                );
              })}
            </li>
          )}
          <li className="ranking">
            <Ranking color={isRanking.color}>{isRanking.label}</Ranking>
          </li>
          <li>무료회차: {freedEpisodeSize}</li>
          <li>완결/연재: {isSchedule}</li>
        </InfoList>
      </div>
    </ItemBox>
  );
}

const ItemBox = styled.div`
  display: flex;
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
  .info {
    padding: 0 10px;
    .title {
      font-style: inherit;
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

const InfoList = styled.ul`
  margin-top: 5px;
  li {
    & + li {
      margin-top: 5px;
    }
  }
`;

const Ranking = styled.span`
  color: ${(props) => props.color || '#000'};
`;
