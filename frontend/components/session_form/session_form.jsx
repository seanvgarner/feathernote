import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInAsGuest = this.signInAsGuest.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  redirect() {
    if (this.props.loggedIn) {
      this.props.router.push("/home");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  signInAsGuest(e) {
    e.preventDefault();
    const user = { email: "guest", password: "password" };
    this.props.processForm(user).then(() => this.redirect());
  }

  navLink () {
    if (this.props.formType === 'signin') {
      return (
        <div className="nav-links">
          <Link to="/signup">Sign Up</Link> or sign in as <a href="#" onClick={ this.signInAsGuest }>Guest</a>
        </div>
      );
    } else {
      return (
        <div className="nav-links">
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  }

  renderErrors() {
    return (
      <ul>
          {this.props.errors.map((error, index) => {
            return <li key={`error-${index}`}>{ error }</li>;
          })}
      </ul>
    );
  }


  render() {
    const { formType } = this.props;
    const formTitle = (formType === "signin") ? "Sign In" : "Sign Up";

    return (
      <div className="signin-form-container group">
        <div className="logo-header group">
          <div className="logo-wrap">
            <img src={ window.featherLogo }></img>
          </div>
          <h2>{ formTitle }</h2>
        </div>
        <form className="signin-box" onSubmit={ this.handleSubmit }>
          { this.renderErrors() }
          <div className="signin-form">
            <label>Email:
              <input type="text"
                  value={ this.state.email }
                  onChange={ this.update("email")}
                  className="signin-input"/>
            </label>
            <br/>
            <label>Password:
              <input type="password"
                  value={ this.state.password }
                  onChange={ this.update("password")}
                  className="signin-input"/>
            </label>
            <input type="submit" className="signin-submit-btn" value="Submit"/>
          </div>
          { this.navLink() }
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
