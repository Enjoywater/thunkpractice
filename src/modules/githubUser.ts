import axios from 'axios';
import { Dispatch } from 'react';
import { GIT_API } from '../config';
import * as T from '../@types';
import * as C from '../constants';

const initialState: T.GithubUserStateType = {
  data: null,
  loading: false,
  error: null,
};

export const githubUserAction = (user: string) => async (
  dispatch: Dispatch<T.GithubActionType>,
) => {
  dispatch({
    type: C.GITHUB_REQUEST,
  });

  try {
    const res = await axios.get<T.GithubUserRes>(`${GIT_API}${user}`);

    dispatch({
      type: C.GITHUB_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: C.GITHUB_FAILURE,
      payload: err,
    });
    console.log(err);
  }
};

const githubUserReducers = (
  state = initialState,
  action: T.GithubActionType,
) => {
  switch (action.type) {
    case C.GITHUB_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case C.GITHUB_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case C.GITHUB_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default githubUserReducers;
