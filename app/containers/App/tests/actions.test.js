import { successfulCall, getDataFormApi } from '../actions';

it('should return the correct constant', () => {
  expect(successfulCall()).toEqual({
    type: 'SUCCESSFUL_REQUEST',
  });
  expect(getDataFormApi()).toEqual({
    type: 'GET_DATA',
  });
});
