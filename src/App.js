import React from 'react';
import './style.css';
import SignUp from './Components/SignUp.js';
// import  Register from "./Components/Register.js";

export default function App() {
  const [SignIn, setSignIn] = React.useState(false);
  function handleClick() {
    setSignIn(true);
  }
  return (
    <div  className="seconddiv">
      {SignIn&& <div>
        <h1 className="heading">Sign In</h1>
        <input className="firstName" placeholder="FirstName" />
        <br />
        <input className="lastName" placeholder="Lastname" />
        <br />
      </div>}

     <div>
     <input className="Email" placeholder="Email" />
      <br />
      <input className="password" placeholder="Password" />
      <br />
      <p className="text" onClick={handleClick}>Don't Have Account ? Sign In</p>
      </div> 

    </div>
  );
}
