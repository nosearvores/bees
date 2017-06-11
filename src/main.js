/**
 * main.js
 *
 * Bootstrap application.
 */
//
// Include general styles
// This styles will be extracted by "Extract Text Plugin"
import 'styles/index.styl';
// Web App Manifest (Progressive Apps)
import './web-app.manifest.json';
// Icon font
import 'assets/fonts/bees-icons.font.json';
// --------- Keep on top

//
// vendor
import React from 'react';
import {AppContainer} from 'react-hot-loader';
import {render} from 'react-dom';

//
// local
import {createHistory, createStore} from 'lib';
import {isCordova, debugMode, isBrowser} from 'app/constants';
import {App} from 'app';
import {combinedReducers} from 'app/redux/reducer';
import {rootSagas} from 'app/redux/sagas';

const history = createHistory('/bees/', isBrowser);
const store = createStore({
  reducers: combinedReducers,
  rootSagas,
  settings: {isBrowser, debugMode}
});

//
// Main
const main = Component => () => {
  // boot
  render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );

  // cordova device ready
  if (isCordova) {
    // StatusBar Cordova plugin
    if (cordova.platformId === 'android' && StatusBar) {
      StatusBar.backgroundColorByHexString('#004F6B');
    }

    // In App Browser Cordova plugin
    if (cordova.InAppBrowser) {
      window.open = cordova.InAppBrowser.open;
    }
  }
};

//
// Ready
if (isCordova) {
  document.addEventListener('deviceready', main(App), false);
} else {
  document.addEventListener('DOMContentLoaded', main(App), false);
}

//
// hot reload
if (debugMode && module.hot) {
  module.hot.accept('app', () => {
    main(App)();
  });

  module.hot.accept('app/redux/reducer', () => {
    store.replaceReducer(require('app/redux/reducer').combinedReducers);
  });

  module.hot.accept('app/redux/sagas', () => {
    store.dispatch({type: 'main/set_sagas', payload: rootSagas()});
  });
}
