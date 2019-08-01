import React from 'react';

import Card from './components/Card';
import data from './data/cards'


function App() {
  const Cards = data.map(datum => <Card datum={datum}>{datum.text}</Card>);

  return <div className="App">{Cards}</div>;
}

export default App;
