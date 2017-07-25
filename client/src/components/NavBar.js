import React, { Component } from 'react'
import { Menu, Icon, Button, Item, Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import '../styles/navbar.css'
import Logo from '../photodump/addykinglogo.png'

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;


    if(user.id) {
      return(
        <div className="nav-logged-in">
        <div>
          <Menu.Menu stackable >  
              <Link to='/profile'>
                  <Button className='profile-nav-button' inverted color='orange' animated='fade' compact>
                  <Button.Content visible>
                    Profile
                    </Button.Content>
                  <Button.Content hidden>
                    <Icon inverted color='white' name='hand outline right' size='medium' />
                  </Button.Content>
                </Button>
              </Link>
              <Link to='/itinerary'>
                <Button className='itinerary-nav-button' inverted color='violet' animated='fade' compact>
                  <Button.Content visible>
                    Itinerary
                    </Button.Content>
                  <Button.Content hidden>
                      <Icon inverted color='white' name='map outline' size='medium' />
                  </Button.Content>
                </Button>
              </Link>
              <Link to='/activities'>
                <Button className='activities-nav-button' inverted color='blue' animated='fade' compact>
                  <Button.Content visible>
                    Activities
                    </Button.Content>
                  <Button.Content hidden>
                      <Icon inverted color='white' name='up arrow' size='medium' />
                  </Button.Content>
                </Button>
              </Link>
              <Link to='/contact'>
                <Button className='contact-nav-button' inverted color='red' animated='fade' compact>
                  <Button.Content visible>
                    Contact
                    </Button.Content>
                  <Button.Content hidden>
                    <Icon inverted color='white' name='talk outline' size='medium' />
                  </Button.Content>
                </Button>
              </Link>
            <Button className='logout-nav-button' inverted color='green' animated='fade' compact
              onClick={() => dispatch(handleLogout(history))} >
            <Button.Content visible>
              Log Out
            </Button.Content>
            <Button.Content hidden>
              <Icon inverted color='white' name='right arrow' size='medium' />
            </Button.Content>
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
                <Button className='about-us-nav-button' inverted color='orange' animated='fade' compact>
                  <Button.Content visible>
                    About
                    </Button.Content>
                  <Button.Content hidden>
                    <Icon inverted color='white' name='group' size='medium' />
                  </Button.Content>
                </Button>
            </Link>
            <Link to='/contact'>
                <Button className='contact-nav-button' inverted color="violet" animated='fade' compact>
                  <Button.Content visible>
                    Contact
                    </Button.Content>
                  <Button.Content hidden>
                    <Icon inverted color='white' name='talk outline' size='medium' />
                  </Button.Content>
                </Button>
            </Link>
          </Menu.Menu>
        </div>
        <img className="logo" src={ Logo }></img>
        <div>
          <Menu.Menu>
            <Link to='/register'>
                <Button className='register-nav-button' inverted color='blue' animated='fade' compact>
                  <Button.Content visible>
                    Register
                    </Button.Content>
                  <Button.Content hidden>
                    <Icon inverted color='white' name='drivers license' size='medium' />
                  </Button.Content>
                </Button>
            </Link>
            <Link to='/login'>
                <Button className='login-nav-button' inverted color='green' animated='fade' compact>
                  <Button.Content visible>
                    Login
                    </Button.Content>
                  <Button.Content hidden>
                    <Icon inverted color='white' name='pointing up' size='medium' />
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


