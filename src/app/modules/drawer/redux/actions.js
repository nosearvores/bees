// vendor
import {createAction} from 'redux-actions';

// action types
export const DRAWER_REGISTER = 'drawer/register';
export const DRAWER_UNREGISTER = 'drawer/unregister';
export const DRAWER_TOGGLE = 'drawer/toggle';
export const DRAWER_OPEN = 'drawer/open';
export const DRAWER_CLOSE = 'drawer/close';
export const DRAWER_DOCK = 'drawer/dock';
export const DRAWER_UNDOCK = 'drawer/undock';

// actions
export const drawerRegister = createAction(DRAWER_REGISTER);
export const drawerUnregister = createAction(DRAWER_UNREGISTER);
export const drawerToggle = createAction(DRAWER_TOGGLE);
export const drawerOpen = createAction(DRAWER_OPEN);
export const drawerClose = createAction(DRAWER_CLOSE);
export const drawerDock = createAction(DRAWER_DOCK);
export const drawerUndock = createAction(DRAWER_UNDOCK);
