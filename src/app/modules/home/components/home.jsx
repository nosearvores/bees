// vendor
import React, {PureComponent} from 'react';

export class Home extends PureComponent {
  static title = 'Home';
  static path = '/bees/';

  render () {
    return (
      <p style={{padding: '1em'}}>
        Banco de dados de informações sobre abelhas.
      </p>
    );
  }
}
