import React from 'react';

import Header from '../components/Header';
import PizzaItselfComponent from '../components/PizzaItselfComponent';

function PizzaItself() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <PizzaItselfComponent />
      </div>
    </div>
  );
}

export default PizzaItself;
