import githubUserReducers from './githubUser';
import JpUserReducer from './jpUser';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ githubUserReducers, JpUserReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
