// vendor
import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom';
import {object} from 'prop-types';

// local
import {OfflinePlugin, Theme} from 'app/components';
import {MainDefault, mainSetTitle, mainMenuPush} from 'app/modules/main';
import {Home} from 'app/modules/home';
import {What} from 'app/modules/what';

export class App extends PureComponent {
  static propTypes = {
    store: object
  };

  componentWillMount () {
    this.props.store.dispatch(mainSetTitle('Bees'));
  }

  renderRoute (Component) {
    const title = Component.title;
    const path = Component.path;
    this.props.store.dispatch(mainMenuPush({title, path}));
    return <Route path={path} component={Component} />;
  }

  render () {
    const {store} = this.props;

    return (
      <OfflinePlugin>
        <Theme dark={true}>
          <Provider store={store}>
            <Router basename='/'>
              <MainDefault>
                {this.renderRoute(Home)}
                {this.renderRoute(What)}
              </MainDefault>
            </Router>
          </Provider>
        </Theme>
      </OfflinePlugin>
    );
  }
}
