import React from 'react';
import { onSelectChange } from '../actions';

const Select = () => {

  return (
      <select onChange={onSelectChange} className="form-control" id="enterCode">
        <option></option>
        <option value="1">16 этажный дом в сов р-не</option>
        <option value="2">малоэтажный  в сов</option>
        <option value="3">утеплить Хрущевки</option>
      </select>
    );
};

export default Select;