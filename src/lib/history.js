// history.js
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export const createHistory = (basename = '/', isBrowser = true) => {
  return isBrowser
    ? createBrowserHistory({
      basename
    })
    : createMemoryHistory({
      initialEntries: [basename]
    });
};
