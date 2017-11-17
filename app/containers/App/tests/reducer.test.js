import DataReducer from '../reducer';
import { successfulCall } from '../actions';

describe('DataReducer', () => {
  it('returns the initial state', () => {
    expect(DataReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the action', () => {
    expect(DataReducer({}, successfulCall())).toMatchSnapshot();
  });
});
