// vendor
import {createAction} from 'redux-actions';

// action types
export const MAIN_SET_TITLE = 'main/set_title';
export const MAIN_MENU_PUSH = 'main/menu_push';

// actions
export const mainSetTitle = createAction(MAIN_SET_TITLE);
export const mainMenuPush = createAction(MAIN_MENU_PUSH);
