// vendor
import {createAction} from 'redux-actions';

// action types
export const DASHBOARD_INCREMENT = 'dashboard/increment';
export const DASHBOARD_DECREMENT = 'dashboard/decrement';

// actions
export const dashboardIncrement = createAction(DASHBOARD_INCREMENT);
export const dashboardDecrement = createAction(DASHBOARD_DECREMENT);
