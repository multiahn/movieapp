import React from 'react';
import PropTypes from 'prop-types';

function Potato({ name, id }) {
  return <h1>I like {name} {id} </h1>;
}

Potato.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

const testArray = [
  {
    name: "kimchi",
    id: 1
  }, {
    name: "ramen",
    id: 2
  }, {
    name: "kimbap",
    id: 3
  }
];

function renderFood(dish) {
  return <Potato key={dish.id} name={dish.name} id={dish.id} />;
}

function App() {
  return (
    <div>
      {testArray.map(renderFood)}
    </div>
  );
}

export default App;
