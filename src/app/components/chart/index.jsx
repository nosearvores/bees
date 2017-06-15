// vendor
import React, {PureComponent} from 'react';
import {Chart as GChart} from 'react-google-charts';

export class Chart extends PureComponent {
  render () {
    const options = {
      nodeClass: 'node'
    };
    const data = [
      ['Animalia', '', 'Reino'],
      ['Arthropoda', 'Animalia', 'Filo'],
      ['Insecta', 'Arthropoda', 'Classe'],
      ['Hymenoptera', 'Insecta', 'Ordem'],
      ['Apocrita', 'Hymenoptera', 'Subordem'],
      ['Aculeata', 'Apocrita', 'Infraordem'],
      ['Apoidea', 'Aculeata', 'Superfamília'],
      ['Anthophila', 'Apoidea', 'Subgrupo'],
      ['Spheciformes', 'Apoidea', 'Subgrupo'],
      ['Apidae', 'Anthophila', 'Família']
    ];

    return (
      <div>
        <GChart
          chartType='OrgChart'
          data={data}
          options={options}
          graph_id='orgChart'
          width='100%'
          height='auto'
          legend_toggle
        />
      </div>
    );
  }
}
