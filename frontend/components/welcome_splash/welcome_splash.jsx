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
              <Link to='/signin' className="sign-in-link">Sign In</Link>
          </nav>
        </header>
        { children ||
          <div className="jumbotron-container">
            <Link to='/signup' className="sign-up-btn">Sign Up</Link>
            <div className="catch-phrase">
              <h2>See everything...</h2>
              <h3>That is right infront of you</h3>
            </div>
          </div>}
        <footer></footer>
      </div>

    );
};

export default WelcomeSplash;
