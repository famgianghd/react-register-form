import React, { useState } from 'react'

export const InputItem = (props) => {
  const [inputText, setInputText] = useState(props.value);
  const handleChange = (e) => {
    const {name, value} = e.target;
    props.handleChange(name, value);
    setInputText(value);
  };
  return (
    <div className="form-group mb-2 row">
      <label className="col-sm-3 col-form-label font-weight-bold">
        {props.label}
      </label>
      <div className="col-sm-9">
        <input
          className="form-control"
          name={props.name}
          placeholder={props.placeholder}
          type={props.type}
          value={inputText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
