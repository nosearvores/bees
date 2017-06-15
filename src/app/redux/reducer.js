// Vendor
import {combineReducers} from 'redux-immutable';

// Local
import {mainReducer} from 'app/modules/main/redux/reducer';
import {drawerReducer} from 'app/modules/drawer/redux/reducer';

export const combinedReducers = combineReducers({
  main: mainReducer,
  drawer: drawerReducer
});
