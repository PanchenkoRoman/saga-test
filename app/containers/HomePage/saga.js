import { put, call, takeLatest  } from 'redux-saga/effects';
import * as types from '../App/constants';
import { getData } from '../../utils/api';
import { successfulCall } from '../App/actions';

export function* testSaga() {
  try {
    const data = yield call(getData);
    yield put(successfulCall(data));
  } catch (error) {
    yield put({ type: 'ERROR', error });
  }
}

// Root saga manages watcher lifecycle

export default function* watchGetData() {
  yield takeLatest(types.GET_DATA, testSaga);
}
