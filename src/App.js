import React from 'react';

function Potato({ name, id }) {
  return <h1>I like {name} {id} </h1>;
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
