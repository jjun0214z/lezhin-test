import { combineReducers } from 'redux';
import ranking from './rankingReducer';

const rootReducer = combineReducers({
  ranking,
});

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
