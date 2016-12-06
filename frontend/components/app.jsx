import React from 'react';
import WelcomeSplashContainer from './welcome_splash/welcome_splash_container';

const App = ({ children }) => (
  <div>
    <h1>FEATHERNOTE</h1>
    <WelcomeSplashContainer />
    { children }
  </div>
);

export default App;
