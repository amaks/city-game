import React from 'react';
import { getChosenActions, getBudget } from '../App';

class ChosenAction extends React.Component {

  constructor(props) {
    super(props);
    this.items = getChosenActions();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    event.preventDefault()
    this.props.onItemDelete(event.target.getAttribute('data-item'));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <ol> <i>Начальный бюджет: 1000 EUR</i></ol>
            <ol>
             { this.items.map((item, index) => (
              <li key={`list-item-${index}`}>{ item['name'] } - {item['price']} EUR
                &nbsp;
                <a href='' data-item={index} onClick={this.handleDelete}>x</a>
              </li>
              ))}
            </ol>
            <ol><i> Осталось: { getBudget() } EUR </i></ol>
          </div>
        </div>
      </div>
    )
  }
}

export default ChosenAction;
