import React from 'react';
import { drawChart } from '../actions';

const ChosenAction = () => {
  let items = drawChart();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <ol>
           { items['data'].map((item, index) => (
            <li key={`list-item-${index}`}>{ item }</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ChosenAction;
