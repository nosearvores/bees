// vendor
import {all} from 'redux-saga/effects';

// local
import {dashboardSagas} from 'app/modules/dashboard/redux/sagas';

export function * rootSagas () {
  yield all([...dashboardSagas()]);
}
