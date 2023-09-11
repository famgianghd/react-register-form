import React, { useState } from 'react'

export const RadioCheckbox = (props) => {
  const [select, setSelect] = useState(props.role);
  const handleChange = (e) => {
      console.log(e);
      const option = e.target.name;
      select === option ? setSelect("") : setSelect(option);
  };
      
  return (
    <div className='form-group'>
      <div className='my-1'>Input Object</div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="Student"
          checked={select === "Student"}
          onChange={handleChange}
        />
        <label className="form-check-label">Student</label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="Teacher"
          checked={select === "Teacher"}
          onChange={handleChange}
        />
        <label className="form-check-label">Teacher</label>
      </div>
    </div>
  );
}
