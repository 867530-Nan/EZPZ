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
          <Menu.Menu>
            <Link to='/profile'>
              <Button  className="profile-nav-button">Profile</Button>
            </Link>
            <Link to='/itinerary'>
               <Button  className="itinerary-nav-button">Itinerary</Button>
            </Link>
            <Link to='/activities'>
               <Button  className="activities-nav-button">Activities</Button>
            </Link>
            <Link to='/children'>
               <Button  className="activities-nav-button">Children</Button>
            </Link>
            <Link to='/contact'>
               <Button  className="contact-nav-button">Contact</Button>
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
                <Button  className="about-us-nav-button">About Us</Button>
            </Link>
          </Menu.Menu>
        </div>
        <div>
          <Menu.Menu>
            <Link to='/register'>
              <Button  className="register-nav-button">Register</Button>
            </Link>
            <Link to='/login'>
              <Button className="login-nav-button">Login</Button>
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
