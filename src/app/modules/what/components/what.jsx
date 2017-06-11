// vendor
import React, {PureComponent} from 'react';

export class What extends PureComponent {
  static title = 'Definição';
  static path = '/bees/definicao';

  render () {
    return (
      <div>
        <p style={{padding: '1em'}}>
          Segundo artigo na
          {' '}
          <a href='https://pt.wikipedia.org/wiki/Abelha'>Wikipédia</a>
          :
        </p>
        <blockquote cite='https://pt.wikipedia.org/wiki/Abelha'>
          Abelhas são insetos voadores, conhecidos pelo seu papel na polinização.
          Pertencem à ordem Hymenoptera, da superfamília Apoidea, subgrupo
          Anthophila, e são aparentados das vespas e formigas.
        </blockquote>

        <blockquote cite='https://pt.wikipedia.org/wiki/Abelha'>
          O representante mais conhecido é a Apis mellifera, oriunda do Velho
          Mundo, criada em larga escala para a produção de mel, cera, própolis,
          geleia real e veneno (Apitoxina). As espécies de abelhas nativas das
          Américas (Novo Mundo) não possuem ferrão.
          A maioria destas pertence à tribo Meliponini.
        </blockquote>
      </div>
    );
  }
}