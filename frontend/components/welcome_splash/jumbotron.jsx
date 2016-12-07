import React from 'react';
import { Link } from 'react-router';

const Jumbotron = () => {
  return (
    <div className="jumbotron-container">
      <Link to='/signup' className="sign-up-btn">Sign Up</Link>
      <div className="catch-phrase">
        <h2>See everything...</h2>
        <h3>Right infront of you</h3>
      </div>
    </div>
  );
};

export default Jumbotron;
