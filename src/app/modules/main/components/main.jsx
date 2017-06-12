// vendor
import React, {PureComponent} from 'react';
import {string, func, object, element, oneOfType, arrayOf} from 'prop-types';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import {AppBar, Logo} from 'app/components';
import {DrawerDefault} from 'app/modules/drawer';

export class Main extends PureComponent {
  static propTypes = {
    history: object.isRequired,
    children: oneOfType([element, arrayOf(element)]),
    title: string,
    menu: arrayOf(object),
    openMenu: func,
    closeMenu: func
  };

  renderMenuItems = (item, index) => {
    return (
      <MenuItem
        key={index}
        primaryText={item.title}
        onTouchTap={this.tapMenuItem(item.path)}
      />
    );
  };

  tapMenuItem (path) {
    return () => {
      this.props.history.push(path);
      this.props.closeMenu('menu');
    };
  }

  render () {
    const {children, title, menu, openMenu} = this.props;

    return (
      <Paper zDepth={1} rounded={false} style={{flex: '1 1 100%'}}>
        <AppBar title={title} openMenu={() => openMenu('menu')} />

        <DrawerDefault id='menu' width={250}>
          <Logo size={200} />
          <Menu>
            {menu.map(this.renderMenuItems)}
          </Menu>
        </DrawerDefault>

        <div>
          {children}
        </div>
      </Paper>
    );
  }
}
