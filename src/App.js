import React from 'react';
import Heading from './components/header';
import InputForm from './components/input_form';
import GoogleChart from './components/chart';
import ChosenAction from './components/chosen_action';
import './App.css';

let budget = 1000;
let state = { a: 2, b: 1, c: 3  };
let actionTypes = { a: ['жилье', 2], b: ['транспорт', 1], c: ['Благоустройство', 3] };
let typesAction = { a: [1, 2, 3], b: [], c: [] };
let actionsTypes = { 1: 'a', 2: 'b', 3: 'c' };
let chosenActions = []
let actions = [{ name: '16 этажный дом в сов р-не', price: 100}, { name: 'Малоэтажный в сов', price: 50 }, { name: 'Утеплить Хрущевки', price: 200 }]

export const getState = () => state;
export const getBudget = () => budget;
export const getActions = () => actions;
export const getActionTypes = () => actionTypes;
export const getChosenActions = () => chosenActions;

export const updateState = newState => {
  let newStateKey = actionsTypes[newState]
  let oldValue = state[newStateKey]
  state[newStateKey] = Number(oldValue) + Number(newState);
};

export const addChosenActions = newAction => {
  deductFromBudget(actions[newAction]['price'])
  chosenActions.push(actions[newAction]);
};

export const removeChosenAction = action => {
  addToBudget(actions[action]['price'])
  // remove action from chosenActions
  console.log(chosenActions);

  var index = chosenActions.indexOf(actions[action]);
  if (index !== -1) chosenActions.splice(index, 1);

  console.log(chosenActions);
};

export const deductFromBudget = price => {
  budget -= price;
};

export const addToBudget = price => {
  budget += price;
};


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { data: state };

    this.changeItem = this.changeItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changeItem(newState) {
    let newStateKey = actionsTypes[newState]
    let oldValue = state[newStateKey]
    state[newStateKey] = Number(oldValue) + Number(newState);

    this.setState({data: state});

    addChosenActions(newState)
  }

  deleteItem(item) {

    let newStateKey = actionsTypes[item]
    let oldValue = state[newStateKey]
    state[newStateKey] = Number(oldValue) - Number(item);

    this.setState({data: state});

    removeChosenAction(item)
  }

  render() {
    return (
      <div className="App">
        <Heading />
        <InputForm onItemChange={this.changeItem} />
        <GoogleChart />
        <ChosenAction onItemDelete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
