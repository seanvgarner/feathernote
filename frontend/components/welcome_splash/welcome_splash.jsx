import React from 'react';
import { Link } from 'react-router';


// redesign this presentational component to fit welcome spash page/ logget out view
const WelcomeSplash = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
    <nav className="welcome-nav">
      <h3>Hi, { currentUser.email }</h3>
      <button onClick={ logout }>Logout</button>
    </nav>
    );
  } else {
    return (
      <nav className="sign-in-nav">
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </nav>
    );
  }
};

export default WelcomeSplash;
