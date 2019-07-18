import React from 'react';
import Select from './select';

class InputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(selected) {
    this.props.onItemChange(selected);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <form>
              <br/>
              <div className="form-group">
                <Select onSelectItem={this.handleClick} />
              </div>
            </form>
          </div>
          <div className="col-sm"></div>
        </div>
      </div>
    );
  }
};

export default InputForm;