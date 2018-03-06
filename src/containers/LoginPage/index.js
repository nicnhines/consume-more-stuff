import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../actions/authenticationActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ``,
      password: ``
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className='login_page_container'>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    }
  }
};

const ConnectedLoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);

export default ConnectedLoginPage;