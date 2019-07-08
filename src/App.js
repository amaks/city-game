import React from 'react';
import Heading from './components/header';
import InputForm from './components/input_form';
import GoogleChart from './components/chart';
import ChosenAction from './components/chosen_action';
import './App.css';


let state = { a: 2, b: 1, c: 3  };
let actionTypes = { a: ['жилье', 2], b: ['транспорт', 1], c: ['Благоустройство', 3] };
let actions = {a: [1, 2, 3], b: [], c: []};

export const getState = () => state;
export const getActionTypes = () => actionTypes;

function App() {
  return (
    <div className="App">
      <Heading />
      <InputForm />
      <GoogleChart />
      <ChosenAction />
    </div>
  );
}

export default App;
