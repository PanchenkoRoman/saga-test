import * as types from './constants';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SUCCESSFUL_REQUEST:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
}
