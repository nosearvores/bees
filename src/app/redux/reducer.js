// Vendor
import {combineReducers} from 'redux'

// Local
import {dashboardReducer} from 'app/modules/dashboard/redux/reducer'

export const combinedReducers = combineReducers({
  dashboard: dashboardReducer
})
