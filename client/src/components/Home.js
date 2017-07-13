import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form, Divider, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogin, handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
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

  leftNavs = () => {
    const { visible, email, password } = this.state
    const { user, history } = this.props;
    if(user.id) {
      return(
        <div>
          <Menu.Item name='links'>
          <div>
            <Link to='/profile'>
              <Button  className="profile-nav-button">Profile</Button>
            </Link>
          </div>
          <Divider />
          <div>
            <Link to='/itinerary'>
               <Button  className="itinerary-nav-button">Itinerary</Button>
            </Link>
          </div>
          <Divider />
          <div>
            <Link to='/activities'>
               <Button  className="activities-nav-button">Activities</Button>
            </Link>
          </div>
          </Menu.Item>
          <Divider />
          <Link to='/aboutus'>
              <Button  className="about-us-nav-button">About Us</Button>
          </Link>
          <Divider />
        </div>
      );
    } else {
      return (
        <div>
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
            <Button
              color='violet'
              type='submit'
              className='sidebarLogin'
            >Login
            </Button>
            </Segment>
            </Form>
          </Menu.Item>
          <Divider />
        </div>
      );
    }
  }

  render() {
    const { visible, email, password } = this.state
    return (
      <div className='homePage'>
        <Container>
          <Header as='h1' textAlign='center' className='homeHeader'>EZPZ</Header>
          <Divider />
          <div className='loginButton'>
          <Icon name='bars' size='big' onClick={this.toggleVisibility} />
          </div>
        </Container>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
          as={Menu}
          animation='scale down'
          width='thin'
          visible={visible}
          icon='labeled'
          vertical
          className='sidebarnav'
          >
          { this.leftNavs() }
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <div className='homePage'>
              
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(Home));
