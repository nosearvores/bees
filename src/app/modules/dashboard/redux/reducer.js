// local
import {DASHBOARD_INCREMENT, DASHBOARD_DECREMENT} from './actions';

// reducer
export const dashboardReducer = (state = 0, {type, payload}) => {
  switch (type) {
    case DASHBOARD_INCREMENT:
      return state + payload;
    case DASHBOARD_DECREMENT:
      return state - payload;
    default:
      return state;
  }
};
