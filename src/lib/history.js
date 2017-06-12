// history.js
import createBrowserHistory from 'history/createBrowserHistory';
import createHashHistory from 'history/createHashHistory';
import createMemoryHistory from 'history/createMemoryHistory';

export const createHistory = (
  basename = '/',
  isBrowser = true,
  isOld = false
) => {
  return isBrowser
    ? isOld
        ? createHashHistory({
          basename,
          hashType: 'slash'
        })
        : createBrowserHistory({
          basename
        })
    : createMemoryHistory({
      initialEntries: [basename]
    });
};
