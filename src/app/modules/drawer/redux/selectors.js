// import { createSelector } from 'reselect'

const initial = state => {
  const drawer = state.get('drawer');
  return drawer ? drawer.toJS() : drawer;
};

export const drawerSelector = {
  initial
};
