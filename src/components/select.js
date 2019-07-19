import React from 'react';
import { getActions, getTypesAction } from '../App';

class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.actions = getActions();
    this.action_types = getTypesAction();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelectItem(event.currentTarget.value);
  }

  render() {
    return (
        <select onChange={this.handleChange} value={this.state.value} className="form-control" id="enterCode">
          <option>Выбрать действие</option>

          { this.action_types.map((item, index) => (
          <optgroup key={`list-item-${index}`} label={item['name']}>
            { item['actions'].map((item, index) => (

              <option key={`list-item-${index}`} value={this.actions.indexOf(this.actions[item])}>{ this.actions[item]['name'] } - {this.actions[item]['price']} EUR </option>
            ))}
          </optgroup>
          ))}

        </select>
      );
  }
};

export default Select;