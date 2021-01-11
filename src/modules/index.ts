import githubUserReducers from './githubUser';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ githubUserReducers });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
