import React from 'react';
import { Link } from 'react-router';


// redesign this presentational component to fit welcome spash page/ logget out view
const WelcomeSplash = ({ children }) => {
    return (
      <div className="content-container group">
        <header className="welcome-header group">
          <div className="logo-container group">
            <div className="img-logo-wrapper">
              <img src={ window.featherLogo }></img>
            </div>
            <h1>FEATHERNOTE</h1>
          </div>
          <nav className="sign-in-navbar">
              <Link to='/signin'>Sign In</Link>
          </nav>
        </header>
        { children ||
          <div content="jumbotron-container">
            <Link to='/signup' className="sign-up-btn">Sign Up</Link>
          </div>}
        <footer></footer>
      </div>

    );
};

export default WelcomeSplash;
