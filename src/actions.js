import { getState, getActionTypes } from './App';

export const drawChart = () => {

  let state = getState();
  let actionTypes = getActionTypes();
  let array = [];
  array = [['', '',]]
  for (var key in actionTypes){
    array.push([actionTypes[key][0], state[key]])
  }

  return {
    data: array
  }
}

export const onSelectChange = e => {
  console.log("onSelectChange");
  console.log(e.currentTarget.value);
  return {}
}