// vendor
import {fromJS} from 'immutable';

// local
import {MAIN_SET_TITLE, MAIN_MENU_PUSH} from './actions';

const initialState = fromJS({
  title: '',
  menu: {}
});

// reducer
export const mainReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case MAIN_SET_TITLE:
      return state.set('title', payload);
    case MAIN_MENU_PUSH:
      const id = payload.title + '-' + payload.path;
      return state.setIn(['menu', id], fromJS(payload));
    default:
      return state;
  }
};
