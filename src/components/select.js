import React from 'react';
import { getActions } from '../App';

class Select extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.items = getActions();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onSelectItem(event.currentTarget.value);
  }

  render() {
    return (
        <select onChange={this.handleChange} value={this.state.value} className="form-control" id="enterCode">
          <option>Выбрать действие</option>

            { this.items.map((item, index) => (
              <option key={`list-item-${index}`} value={index}>{ item['name'] }</option>
            ))}

        </select>
      );
  }
};

export default Select;