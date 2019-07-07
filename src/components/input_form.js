import React from 'react';
import Select from './select';

const InputForm = () => {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm">
          <form>
            <div className="form-group">
              <label>Внести код</label>
              <Select />
            </div>
            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
};

export default InputForm;