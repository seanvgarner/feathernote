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

  navLink () {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Sign In</Link>;
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
    return (
      <div className="login-form-container">
        <form className="login-box" onSubmit={ this.handleSubmit }>
          <h2>{ formType }</h2>
          { this.renderErrors() }
          <div className="login-form">
            <label>Email:
              <input type="text"
                  value={ this.state.email }
                  onChange={ this.update("email")}
                  className="login-input"/>
            </label>
            <br/>
            <label>Password:
              <input type="password"
                  value={ this.state.password }
                  onChange={ this.update("password")}
                  className="login-input"/>
            </label>
            <input type="submit" className="login-submit-btn" value="Submit"/>
          </div>
          { this.navLink() }
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
