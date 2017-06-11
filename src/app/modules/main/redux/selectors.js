import {createSelector} from 'reselect';

const initial = state => state.get('main');

const getTitle = createSelector(initial, main => main.get('title'));
const getMenu = createSelector(initial, main =>
  main.get('menu').toList().toJS()
);

export const mainSelector = {
  initial,
  getTitle,
  getMenu
};
