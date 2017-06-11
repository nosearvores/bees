import React from 'react';
import {element, bool} from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// local
import {muiThemeDark, muiThemeLight} from './mui-theme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export const Theme = ({children, dark = false}) => {
  let muiTheme;
  if (dark) {
    muiTheme = muiThemeDark;
  } else {
    muiTheme = muiThemeLight;
  }

  return (
    <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
      {children}
    </MuiThemeProvider>
  );
};

Theme.propTypes = {
  children: element.isRequired,
  dark: bool,
  light: bool
};
