import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectData = (state) => state.get('test');

const makeSelectData = () => createSelector(
  selectData,
  (globalState) => globalState
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  makeSelectLocation,
  makeSelectData,
};
