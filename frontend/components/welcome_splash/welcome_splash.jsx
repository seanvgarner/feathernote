import React from 'react';
import { Link } from 'react-router';
import Jumbotron from './jumbotron';


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
              <Link to='/signin' className="sign-in-link">Sign In</Link>
          </nav>
        </header>
        { children || <Jumbotron /> }
        <footer></footer>
      </div>
    );
};

export default WelcomeSplash;
