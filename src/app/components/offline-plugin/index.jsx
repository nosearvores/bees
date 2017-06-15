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
    OfflinePluginRuntime.install({
      onUpdating: () => {
        console.log('SW Event:', 'onUpdating');
      },
      onUpdateReady: () => {
        console.log('SW Event:', 'onUpdateReady');
        // Tells to new SW to take control immediately
        OfflinePluginRuntime.applyUpdate();
      },
      onUpdated: () => {
        console.log('SW Event:', 'onUpdated');
        // Reload the webpage to load into the new version
        window.location.reload();
      },

      onUpdateFailed: () => {
        console.log('SW Event:', 'onUpdateFailed');
      }
    });
  }

  render () {
    return this.props.children;
  }
}
