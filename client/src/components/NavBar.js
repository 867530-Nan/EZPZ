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
                <Button inverted color='orange' className='profile-nav-button'>Profile</Button>
            </Link>
            <Link to='/itinerary'>
                <Button inverted color='violet' className='itinerary-nav-button'>Itinerary</Button>
            </Link>
            <Link to='/activities'>
                <Button inverted color='blue' className='activities-nav-button'>Activities</Button>
            </Link>
            <Link to='/contact'>
                <Button inverted color='red' className='contact-nav-button'>Contact</Button>
            </Link>
            <Button inverted color='green' className='logout-nav-button'
              onClick={() => dispatch(handleLogout(history))}
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
                <Button inverted color='orange' className='aboutus-nav-button'>About</Button>
            </Link>
            <Link to='/contact'>
                <Button inverted color='red' className='contact-nav-bar'>Contact</Button>
            </Link>
          </Menu.Menu>
        </div>
        <div>
          <Menu.Menu>
            <Link to='/register'>
                <Button inverted color='blue' className='register-nav-button'>Register</Button>
            </Link>
            <Link to='/login'>
                <Button inverted color='green' className='login-nav-button'>Login</Button>
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
