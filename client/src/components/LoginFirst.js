import React, { Component } from 'react';
import { Header, Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import '../styles/loginfirst.css';
import StepRegisterLogin from './step_register_login'

class LoginFirst extends Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;

    return(
      <div>
     	 	<div className="register-login">
         <StepRegisterLogin className="steps"/>
          <div className="family-photo">
            <Header as='h1' textAlign='left' className="login-font">EZPZ Family Portal</Header>
            <Form className="form" onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <input
                  autoFocus
                  required
                  id='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
                  className="login-input"
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  required
                  id='password'
                  value={password}
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                  className="login-input"
                />
              </Form.Field>
              <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
              </Segment>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(LoginFirst);
