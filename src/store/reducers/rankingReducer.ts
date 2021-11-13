import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { ComicRankItem } from '@/types/mock';

export interface IRootState {
  rankingList: ComicRankItem[];
}

const initialState = {
  rankingList: [],
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
      const { rankingList } = action.payload;
      return {
        ...state,
        rankingList,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
