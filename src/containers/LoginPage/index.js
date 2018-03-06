import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { login } from '../../actions/authenticationActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ``,
      password: ``,
      usernameError: ``,
      passwordError: ``,
      redirectToReferrer: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password, () => {
      this.setState({ redirectToReferrer: true });
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: `/` } };

    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />
    }

    return (
      <div className='login_page_container'>
        <div className='login_form_container'>
          <form className='login_form' onSubmit={this.handleSubmit}>
            <h6>Login</h6>
            <input
              type='text'
              placeholder='USERNAME'
              name='username'
              value={this.state.username}
              onChange={this.handleChange} />
            <input
              type='password'
              placeholder='PASSWORD'
              name='password'
              value={this.state.password}
              onChange={this.handleChange} />
            <input
              type='submit'
              value='LOGIN' />
          </form>
          <div className='login_form_links_container'>
            <p>register</p>
            <p>forgot password</p>
          </div>
          {this.props.validationError &&
            <div className='validation_error_container'>
              <p>the username and or password you entered was not valid. please try again.</p>
            </div>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    validationError: state.authentication.error
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password, callback) => {
      dispatch(login(username, password, callback));
    }
  }
};

const ConnectedLoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export default ConnectedLoginPage;