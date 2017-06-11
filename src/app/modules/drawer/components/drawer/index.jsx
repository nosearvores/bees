import React, {PureComponent} from 'react';
import {
  object,
  string,
  element,
  number,
  func,
  oneOfType,
  arrayOf
} from 'prop-types';
import MuiDrawer from 'material-ui/Drawer';
import {uniqueId} from 'lodash';

export class Drawer extends PureComponent {
  static propTypes = {
    id: string,
    children: oneOfType([element, arrayOf(element)]),
    width: number,
    registered: object,
    onRegister: func.isRequired,
    onUnregister: func.isRequired,
    onToggle: func.isRequired,
    onOpen: func.isRequired,
    onClose: func.isRequired,
    onDock: func.isRequired,
    onUndock: func.isRequired
  };

  constructor (props) {
    super(props);
    this.id = props.id || uniqueId('drawer-');
  }

  componentWillMount () {
    this.props.onRegister(this.id);
  }

  componentWillUnmount () {
    this.props.onUnregister(this.id);
  }

  render () {
    const {children, width = 200, registered = {}, onToggle} = this.props;
    const {opened = false, docked = false} = registered[this.id] || {};

    return (
      <MuiDrawer
        width={width}
        docked={docked}
        open={opened}
        onRequestChange={open => onToggle(this.id, open)}
      >
        {children}
      </MuiDrawer>
    );
  }
}
