import React, { Component } from 'react';
import { Header, Form, Button, Segment, Container, Divider, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import '../styles/registration.css';
import StepRegisterParent from './step_register_parent';

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '',
            name: '', nickname: '', zipcode: '', state: '', id: 0
          }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { password, passwordConfirmation, name,
            nickname, zipcode } = this.state;

    if(password === passwordConfirmation) {
      dispatch({ type: 'REGISTER', user: this.state })
      history.push('/children')
    }

      //dispatch(registerUser(this.state, history));
    else
      alert('Passwords do NOT match!');
  }

  handleChange = (e) => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = e.target;
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, passwordConfirmation, name,
            nickname, zipcode } = this.state;

    return(

        <div >
          <StepRegisterParent className="register-parent"/>
          <Segment basic className='regBackground'>
            <Header className='create-profile' color="orange" as='h1' icon textAlign='center'>
              <Icon name='address card' />
              Create Parent Profile Below
            </Header>
            <Divider />
          <Container>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field required>
              <label>Name</label>
              <input
                id='name'
                placeholder='Name'
                required
                value={name}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Nickname (optional)</label>
              <input
                id='nickname'
                placeholder='Nickname (optional)'
                value={nickname}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Zipcode</label>
              <input
                id='zipcode'
                placeholder='Zipcode'
                required
                value={zipcode}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Email</label>
              <input
                id='email'
                placeholder='Email'
                required
                value={email}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input
                id='password'
                placeholder='Password'
                type='password'
                required
                value={password}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field required>
              <label>Password Confirmation</label>
              <input
                id='passwordConfirmation'
                placeholder='Password Confirmation'
                type='password'
                required
                value={passwordConfirmation}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Segment basic textAlign='center'>
                <Button
                  inverted
                  color='orange'
                  size='huge'
                  type='submit'
                  className='registrationButton'
                > Submit
                </Button>
            </Segment>
          </Form>
          </Container>
        </Segment>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return { email, password, passwordConfirmation, name,
//           nickname, zipcode }
// }

export default connect()(Register);
