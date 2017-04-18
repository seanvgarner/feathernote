import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import AppContainer from './app_container';
import WelcomeSplash from './welcome_splash/welcome_splash';
import SessionFormContainer from './session_form/session_form_container';



const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ WelcomeSplash } onEnter={ _redirectIfLoggedIn }>
          <Route path="/signin" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn}/>
        </Route>
        <Route path="/home" component={ AppContainer } onEnter={ _ensureLoggedIn } />
      </Router>
    </Provider>
  );
};

export default Root;
