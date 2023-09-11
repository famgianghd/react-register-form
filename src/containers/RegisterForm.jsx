import React, { useState } from 'react'
import { InputItem } from '../components/InputItem'
import { RadioCheckbox } from '../components/RadioCheckbox';

export const RegisterForm = () => {
  const initUser = {
    fullname: "",
    username: "",
    password: "",
    email: "",
    phoneNumber: "",
    role: "Student",
  };
  const [user, setUser] = useState(initUser);
  const handleChange = (name, value) => {
    //console.log({...user, [name]: value});
    setUser({...user, [name]: value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <form className="card row d-flex justify-content-center">
      <div className="card-header">
        <h2 className="text-center">Register Form</h2>
      </div>
      <div className="card-body">
        <InputItem
          label="Full name"
          name="fullName"
          placeholder="Your name..."
          type="text"
          value={user.fullName}
          handleChange={handleChange}
        />
        <InputItem
          label="Username"
          name="username"
          placeholder="Your username..."
          type="text"
          value={user.username}
          handleChange={handleChange}
        />
        <InputItem
          label="Password"
          name="password"
          placeholder="Your password..."
          type="password"
          value={user.password}
          handleChange={handleChange}
        />
        <InputItem
          label="Email"
          name="email"
          placeholder="Your email..."
          type="email"
          value={user.email}
          handleChange={handleChange}
        />
        <InputItem
          label="Phone number"
          name="phoneNumber"
          placeholder="Your phone number..."
          type="number"
          value={user.phoneNumber}
          handleChange={handleChange}
        />
        <RadioCheckbox
          role = {user.role}
        />
        <div className="text-center">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
