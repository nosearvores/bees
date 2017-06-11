// vendor
import React from 'react';
import {element, oneOfType, arrayOf} from 'prop-types';
import Paper from 'material-ui/Paper';

export const Main = ({children}) => (
  <Paper zDepth={1} rounded={false} style={{flex: '1 1 100%'}}>
    {children}
  </Paper>
);

Main.propTypes = {
  children: oneOfType([element, arrayOf(element)])
};
