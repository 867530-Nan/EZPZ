import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import '../styles/home.css';

class Home extends Component {
  state = { visible: false, email: '', password: '' }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

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
    const { visible, email, password } = this.state
    return (
      <div>
        <Button className='loginButton' onClick={this.toggleVisibility}>Login!</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='slide out'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='Login'>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>Email</label>
                <input
                  autoFocus
                  required
                  id='email'
                  value={email}
                  placeholder='Email'
                  onChange={this.handleChange}
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
                />
              </Form.Field>
              <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
              </Segment>
            </Form>
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default connect()(Home);
