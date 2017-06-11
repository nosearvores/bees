import React from 'react';
import {func, string} from 'prop-types';
import MuiAppBar from 'material-ui/AppBar';

export const AppBar = ({title, openMenu}) => (
  <MuiAppBar
    iconClassNameRight='muidocs-icon-navigation-expand-more'
    title={title}
    onLeftIconButtonTouchTap={openMenu}
  />
);

AppBar.propTypes = {
  title: string,
  openMenu: func
};
