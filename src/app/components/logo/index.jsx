// vendor
import React, {PureComponent} from 'react';
import {number, object} from 'prop-types';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Paper from 'material-ui/Paper';

@muiThemeable()
export class Logo extends PureComponent {
  static propTypes = {
    muiTheme: object,
    size: number
  };

  render () {
    const {size, muiTheme} = this.props;
    const {primary1Color, alternateTextColor} = muiTheme.palette;

    return (
      <Paper
        zDepth={1}
        rounded={false}
        style={{
          backgroundColor: primary1Color,
          color: alternateTextColor,
          textAlign: 'center',
          height: `${size}px`
        }}
      >
        <div
          className='bee-icon bee-icon-bee'
          style={{display: 'inline-block', fontSize: `${size}px`}}
        />
      </Paper>
    );
  }
}
