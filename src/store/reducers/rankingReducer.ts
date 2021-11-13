import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { ComicRankItem } from '@/types/mock';

export interface IRootState {
  count: number; // 아이템 전체 카운트
  hasNext: boolean; // 다음 page 존재 여부
  comicRankList: ComicRankItem[]; // 아이템 리스트
}

const initialState = {
  count: 0,
  comicRankList: [],
  hasNext: true,
};

export const actionTypes = {
  SET_RANKING_LIST: 'rankingReducer/SET_RANKING_LIST',
};

const rootReducer = (state = initialState, action: AnyAction) => {
  console.log(action.type);
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.SET_RANKING_LIST:
      const { count, comicRankList } = action.payload;

      return {
        ...state,
        count: state.count + (count || 0),
        comicRankList: [...state.comicRankList, ...(comicRankList || [])],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
