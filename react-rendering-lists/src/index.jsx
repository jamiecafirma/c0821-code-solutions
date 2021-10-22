import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function RenderList(props) {
  const entries = props.list;
  const listItems = entries.map(pokemon =>
    <li key={pokemon.number.toString()}>
      {pokemon.name}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const element = <RenderList list={pokedex} />;

ReactDOM.render(
  element,
  document.querySelector('#root')
);
