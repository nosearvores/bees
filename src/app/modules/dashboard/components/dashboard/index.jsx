// vendor
import React, {Component} from 'react';
import {number, func} from 'prop-types';

export class Dashboard extends Component {
  static propTypes = {
    dashboard: number,
    onIncrement: func,
    onDecrement: func
  };

  render () {
    const props = this.props;

    return (
      <div>
        Dashboard: {props.dashboard}

        <div>
          <button onClick={() => props.onIncrement(2)}>
            + 1
          </button>
          <button onClick={() => props.onDecrement(1)}>
            - 1
          </button>
        </div>
      </div>
    );
  }
}
