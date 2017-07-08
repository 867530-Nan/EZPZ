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
        <Menu.Menu position='right'>
          <Link to='/profile'>
            <Button inverted color='red'>Profile</Button>
          </Link>
          <Link to='/itinerary'>
             <Button inverted color='red'>Itinerary</Button>
          </Link>
          <Link to='/activities'>
             <Button inverted color='red'>Activities</Button>
          </Link>
          <Button
            onClick={() => dispatch(handleLogout(history))}
            inverted color='red'
          >Logout
          </Button>  
        </Menu.Menu>
      );
    } else {
      return(
        <Menu.Menu position='right'>
          <Link to='/register'>
            <Button inverted color='red'>Register</Button>
          </Link>
          <Link to='/login'>
            <Button inverted color='red'>Login</Button>
          </Link>
        </Menu.Menu>
      );
    }
  }
            
            

  render() {
    return (
      <div className='mainNavbar'>
        <Menu pointing secondary>
          <Link to='/'>
            <Button inverted color='red'>Home</Button>
          </Link>
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
