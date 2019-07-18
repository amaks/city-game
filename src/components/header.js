import React from 'react';
import { getBudget } from '../App';

const Heading = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <header className="App-header">
            <h1>
            Бюджет: { getBudget() } EUR
            </h1>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Heading;
