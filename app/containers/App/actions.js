import * as types from './constants';

export const getDataFormApi = () => ({
  type: types.GET_DATA,
});

export const successfulCall = (data) => ({
  type: types.SUCCESSFUL_REQUEST,
  data,
});
