import React from 'react';
import { getChosenActions, getBudget, getActions, getActionTypeName } from '../App';

class ChosenAction extends React.Component {

  constructor(props) {
    super(props);
    this.items = getChosenActions();
    this.actions = getActions();
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
          <div className="col-sm"></div>
          <div className="col-sm-5">
            <ol className='list-group-flush align_left'>
              <li className='list-group-item'>
                <strong>Начальный бюджет: 1000 EUR</strong>
              </li>
             { this.items.map((item, index) => (
              <li className='list-group-item' key={`list-item-${index}`}>{index + 1}.
                &nbsp;
                &nbsp;
                { item['name'] }: {item['price']} EUR
                &nbsp;
                <a href='' data-item={this.actions.indexOf(item)} onClick={this.handleDelete}>x</a>
                <br/>
                <small><i>{getActionTypeName(this.actions.indexOf(item))} - 1</i></small>
              </li>
              ))}
              <li className='list-group-item'>Осталось: { getBudget() } EUR</li>
            </ol>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    )
  }
}

export default ChosenAction;
