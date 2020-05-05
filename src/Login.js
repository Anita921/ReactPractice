import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login">
      <label for="uname"><b>Username: </b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/><br/><br/>

    <label for="psw"><b>Password: </b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/><br/><br/>

    <button type="submit">Login</button>
    </div>
  );
}


