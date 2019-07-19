import { getState, getActionTypes } from './App';

export const drawChart = () => {

  let state = getState();
  let actionTypes = getActionTypes();
  let array = [];
  array = []
  for (var key in actionTypes){
    array.push([actionTypes[key][0], state[key], actionTypes[key][2], state[key]])
  }

  array.unshift([
      'Element',
      'Density',
      { role: 'style' },
      {
        sourceColumn: 0,
        role: 'annotation',
        type: 'string',
        calc: 'stringify',
      },
    ])

  return {
    data: array
  }
}

