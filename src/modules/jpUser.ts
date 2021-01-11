import axios from 'axios';
import { JP_API } from '../config';
import * as T from '../@types';
import * as C from '../constants';
import { Dispatch } from 'react';

const initialState: T.JpStateType = {
  data: null,
  loading: false,
  error: null,
};

export const JpUserAction = () => async (dispatch: Dispatch<T.JpAction>) => {
  dispatch({
    type: C.JP_REQUEST,
  });

  try {
    const res = await axios.get<T.JpUserRes[]>(`${JP_API}`);
    console.log(res.data);
    dispatch({
      type: C.JP_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: C.JP_FAILURE,
      payload: error,
    });
  }
};

const JpUserReducer = (state = initialState, action: T.JpAction) => {
  switch (action.type) {
    case C.JP_REQUEST:
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };

    case C.JP_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case C.JP_FAILURE:
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

export default JpUserReducer;
