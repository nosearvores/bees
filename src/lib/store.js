// vendor
import {Map} from 'immutable';
import {createStore as _createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {fork, take, cancel} from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

let store;

export const createStore = ({
  reducers,
  rootSagas,
  preloadedState = Map(),
  settings = {},
  middlewares = [],
  enhancers = []
}) => {
  // saga middleware
  middlewares.unshift(sagaMiddleware);

  //
  // Dev Tools
  if (
    settings.isBrowser &&
    settings.debugMode &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    enhancers.unshift(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  //
  // Store
  store = _createStore(
    reducers,
    preloadedState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  );

  //
  // Set initial sagas
  sagaMiddleware.run(createDynamicSaga('main/set_sagas', rootSagas()));

  return store;
};

export const getStore = () => {
  return store;
};

// Dynamic Saga
function createDynamicSaga (changeActionType, startingSagas) {
  function * _start (sagas) {
    try {
      yield sagas;
    } catch (e) {
      console.error('error', e);
    }
  }
  return function * dynamicSaga () {
    let action;
    let rootTask = yield fork(_start, startingSagas);
    while ((action = yield take(changeActionType))) {
      yield cancel(rootTask);
      rootTask = yield fork(_start, action.payload);
    }
  };
}
