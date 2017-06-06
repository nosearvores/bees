// vendor
import {put, take} from 'redux-saga/effects';

// local
import {DASHBOARD_INCREMENT} from './actions';

function * watchFirstThreeIncrements () {
  for (let i = 0; i < 3; i++) {
    yield take(DASHBOARD_INCREMENT);
  }
  yield put({type: 'SHOW_CONGRATULATION'});
}

// sagas
export const dashboardSagas = () => [watchFirstThreeIncrements()];
