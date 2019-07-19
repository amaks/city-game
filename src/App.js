import React from 'react';
import Heading from './components/header';
import InputForm from './components/input_form';
import GoogleChart from './components/chart';
import ChosenAction from './components/chosen_action';
import './App.css';

let budget = 1000;
let state = { a: 0, b: 0, c: 0  };
let actionTypes = { a: ['Жилье', 2], b: ['Транспорт', 1], c: ['Благоустройство', 3] };
let typesAction = [{ name: 'Жилье', code: 'a', actions: [0]}, {name: 'Транспорт', code: 'b', actions: [1]}, {name: 'Благоустройство', code: 'c', actions: [2]}];
let actionsTypes = { 0: 'a', 1: 'b', 2: 'c' };
let chosenActions = []
let actions = [{ name: '16 этажный дом в сов р-не', price: 100, value: 1}, { name: 'Малоэтажный в сов', price: 50, value: 2 }, { name: 'Утеплить Хрущевки', price: 200, value: 3 }]

export const getState = () => state;
export const getBudget = () => budget;
export const getActions = () => actions;
export const getActionTypes = () => actionTypes;
export const getTypesAction = () => typesAction;
export const getChosenActions = () => chosenActions;
export const getActionTypeName = (action_id) => {
  let actionType = actionsTypes[action_id]
  return actionTypes[actionType][0]
}

export const updateState = newState => {
  let newStateKey = actionsTypes[newState]
  let oldValue = state[newStateKey]
  state[newStateKey] = Number(oldValue) + Number(newState);
};

export const addChosenActions = action => {
  deductFromBudget(actions[action]['price'])
  chosenActions.push(actions[action]);
};

export const removeChosenAction = action => {
  addToBudget(actions[action]['price'])
  // remove action from chosenActions
  var index = chosenActions.indexOf(actions[action]);
  if (index !== -1) chosenActions.splice(index, 1);
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

  changeItem(item) {

    let newStateKey = actionsTypes[item]
    let oldValue = state[newStateKey]
    let newValue = actions[item]['value']

    state[newStateKey] = Number(oldValue) + Number(newValue);

    this.setState({data: state});

    addChosenActions(item)
  }

  deleteItem(item) {

    let newStateKey = actionsTypes[item]
    let oldValue = state[newStateKey]
    let newValue = actions[item]['value']
    state[newStateKey] = Number(oldValue) - Number(newValue);

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
