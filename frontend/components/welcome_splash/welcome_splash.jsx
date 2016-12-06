import React from 'react';
import { Link } from 'react-router';


// redesign this presentational component to fit welcome spash page/ logget out view
const WelcomeSplash = ({ children }) => {
    return (
      <div className="content-container">
        <nav className="sign-in-navbar">
          <h1>FEATHERNOTE</h1>
            <Link to='/login'>Log In</Link>
        </nav>
        { children ||
          <div content="jumbotron-container">
            <Link to='/signup' className="sign-up-btn">Sign Up</Link>
          </div>}
        <footer></footer>
      </div>

    );
};

export default WelcomeSplash;
