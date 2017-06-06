// vendor
import {Component} from 'react';
import {element} from 'prop-types';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// Offline Webpack Plugin for ServiceWorker/AppCache
export class OfflinePlugin extends Component {
  static propTypes = {
    children: element.isRequired
  };

  componentWillMount () {
    OfflinePluginRuntime.install();
  }

  render () {
    return this.props.children;
  }
}
