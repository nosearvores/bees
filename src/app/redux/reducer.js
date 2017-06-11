// Vendor
import {combineReducers} from 'redux-immutable';

// Local
// import {dashboardReducer} from 'app/modules/home/redux/reducer';
import {mainReducer} from 'app/modules/main/redux/reducer';
import {drawerReducer} from 'app/modules/drawer/redux/reducer';

export const combinedReducers = combineReducers({
  // dashboard: dashboardReducer,
  main: mainReducer,
  drawer: drawerReducer
});
