import React, { Component } from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import '../styles/navbar.css'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if(user.id) {
      return(
        <div className="nav-logged-in">
        <div>
          <Menu.Menu stackable >
            <Link to='/profile'>
              <Button className="profile-nav-button" animated='fade'>
                <Button.Content visible>
                  Profile
                </Button.Content>
                <Button.Content hidden>
                  Create
                </Button.Content>
              </Button>
            </Link>
            <Link to='/itinerary'>
                <Button className="itinerary-nav-button" animated='fade'>
                  <Button.Content visible>
                    Itinerary
                </Button.Content>
                  <Button.Content hidden>
                    View
                </Button.Content>
                </Button>
            </Link>
            <Link to='/activities'>
                <Button className="activities-nav-button" animated='fade'>
                  <Button.Content visible>
                    Activities
                </Button.Content>
                  <Button.Content hidden>
                    Browse
                </Button.Content>
                </Button>
            </Link>
            <Link to='/contact'>
                <Button className="contact-nav-button" animated='fade'>
                  <Button.Content visible>
                    Contact
                </Button.Content>
                  <Button.Content hidden>
                    Us
                </Button.Content>
                </Button>
            </Link>
            <Button
              onClick={() => dispatch(handleLogout(history))}
               className="logout-nav-button"
            >Logout
            </Button>
          </Menu.Menu>
        </div>
        </div>
      );
    } else {
      return(
        <div className="nav-logged-out">
        <div>
          <Menu.Menu>
            <Link to='/aboutus'>
                <Button className="about-us-nav-button" animated='fade'>
                  <Button.Content visible>
                    About
                </Button.Content>
                  <Button.Content hidden>
                    Us
                </Button.Content>
                </Button>
            </Link>
            <Link to='/contact'>
                <Button className="contact-nav-button" animated='fade'>
                  <Button.Content visible>
                    Contact
                </Button.Content>
                  <Button.Content hidden>
                    Us
                </Button.Content>
                </Button>
            </Link>
          </Menu.Menu>
        </div>
        <div>
          <Menu.Menu>
            <Link to='/register'>
                <Button className="register-nav-button" animated='fade'>
                  <Button.Content visible>
                    Register
                </Button.Content>
                  <Button.Content hidden>
                    Now
                </Button.Content>
                </Button>
            </Link>
            <Link to='/login'>
                <Button className="login-nav-button" animated='fade'>
                  <Button.Content visible>
                    Login
                </Button.Content>
                  <Button.Content hidden>
                    Us
                </Button.Content>
                </Button>
            </Link>
          </Menu.Menu>
        </div>
        </div>
      );
    }
  }



  render() {
    return (
      <div className='mainNavbar'>
        <Menu pointing secondary>

          { this.rightNavs() }
        </Menu>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
