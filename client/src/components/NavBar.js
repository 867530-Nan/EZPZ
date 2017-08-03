import React, { Component } from 'react'
import { Menu, Icon, Button, Segment, Grid, Sidebar } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleLogout } from '../actions/auth';
import { withRouter } from 'react-router-dom';
import '../styles/navbar.css'
import Logo from '../photodump/addykinglogo.png'

class NavBar extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  rightNavs = () => {
    const { user, dispatch, history } = this.props;
    const { visible } = this.state;

    if(user.id) {
      return(
        <Grid textAlign='center'>
          <Grid.Row column='2'>
            <Grid.Column only='mobile tablet' textAlign='left' width={6}>
              <Button onClick={this.toggleVisibility} icon='content' />
                <Sidebar
                  as={Menu}
                  animation='overlay'
                  width='thin'
                  visible={visible}
                  icon='labeled' vertical
                >
                  <Link to='/profile'>
                      <Button
                        className='profile-nav-button'
                        inverted
                        color='orange'
                        animated='fade'
                        compact
                        onClick={this.toggleVisibility}
                      >
                      <Button.Content visible>
                        Profile
                        </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted name='user circle' />
                      </Button.Content>
                    </Button>
                  </Link>
                  <Link to='/contact'>
                    <Button
                      className='contact-nav-button'
                      inverted color='violet'
                      animated='fade'
                      compact
                      onClick={this.toggleVisibility}
                    >
                      <Button.Content visible>
                        Contact
                        </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted name='talk outline' />
                      </Button.Content>
                    </Button>
                  </Link>
                  <Link to='/activities'>
                    <Button
                      className='activities-nav-button'
                      inverted
                      color='blue'
                      animated='fade'
                      compact
                      onClick={this.toggleVisibility}
                    >
                      <Button.Content visible>
                        Activities
                        </Button.Content>
                      <Button.Content hidden>
                          <Icon inverted name='flag checkered' />
                      </Button.Content>
                    </Button>
                  </Link>
                  <Link to='/itinerary'>
                    <Button
                      className='itinerary-nav-button'
                      inverted
                      color='red'
                      animated='fade'
                      compact
                      onClick={this.toggleVisibility}
                    >
                      <Button.Content visible>
                        Itinerary
                        </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted className='theme isle' />
                      </Button.Content>
                    </Button>
                    </Link>
                  <Link to='/aboutus'>
                      <Button
                        className='about-us-nav-button'
                        inverted
                        color='pink'
                        animated='fade'
                        compact
                        onClick={this.toggleVisibility}
                      >
                        <Button.Content visible>
                          About
                          </Button.Content>
                        <Button.Content hidden>
                          <Icon inverted name='hand spock' />
                        </Button.Content>
                      </Button>
                  </Link>
                  <Button
                    className='logout-nav-button'
                    inverted
                    color='green'
                    animated='fade'
                    compact
                    onClick={() => dispatch(handleLogout(history))} >
                      <Button.Content visible>
                        Log Out
                      </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted name='ambulance' />
                      </Button.Content>
                  </Button>
                  <div className="offClick" onClick={this.toggleVisibility}>Close<br />Navigation</div>
                </Sidebar>
            </Grid.Column>
            <Grid.Column className="nav-logged-in" only='mobile tablet' textAlign='left' width={3}>
              <a href="/home"><img className="logo" src={Logo} alt="E Z P Z Logo"></img></a>
            </Grid.Column>
          </Grid.Row>


          <Grid.Row columns={3} only='computer'>
            <Grid.Column className="nav-logged-in" width={3} textAlign='left'>
                <a href="/home"><img className="logo" src={Logo} alt="E Z P Z Logo"></img></a>
            </Grid.Column>
              <Grid.Column width={9}>
                <Link to='/profile'>
                    <Button className='profile-nav-button' inverted color='orange' animated='fade' compact>
                    <Button.Content visible>
                      Profile
                      </Button.Content>
                    <Button.Content hidden>
                      <Icon inverted name='user circle' />
                    </Button.Content>
                  </Button>
                </Link>
                <Link to='/contact'>
                  <Button className='contact-nav-button' inverted color='violet' animated='fade' compact>
                    <Button.Content visible>
                      Contact
                      </Button.Content>
                    <Button.Content hidden>
                      <Icon inverted name='talk outline' />
                    </Button.Content>
                  </Button>
                </Link>
                <Link to='/activities'>
                  <Button className='activities-nav-button' inverted color='blue' animated='fade' compact>
                    <Button.Content visible>
                      Activities
                      </Button.Content>
                    <Button.Content hidden>
                        <Icon inverted name='flag checkered' />
                    </Button.Content>
                  </Button>
                </Link>
                <Link to='/itinerary'>
                  <Button className='itinerary-nav-button' inverted color='red' animated='fade' compact>
                    <Button.Content visible>
                      Itinerary
                      </Button.Content>
                    <Button.Content hidden>
                      <Icon inverted className='theme isle' />
                    </Button.Content>
                  </Button>
                  </Link>
                <Link to='/aboutus'>
                    <Button className='about-us-nav-button' inverted color='pink' animated='fade' compact>
                      <Button.Content visible>
                        About
                        </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted name='hand spock' />
                      </Button.Content>
                    </Button>
                </Link>
                </Grid.Column>

                <Grid.Column textAlign='right' width={4}>
                    <Button
                      className='logout-nav-button'
                      inverted
                      color='green'
                      animated='fade'
                      compact
                      onClick={() => dispatch(handleLogout(history))} >
                        <Button.Content visible>
                          Log Out
                        </Button.Content>
                        <Button.Content hidden>
                          <Icon inverted name='ambulance' />
                        </Button.Content>
                    </Button>
                </Grid.Column>
          </Grid.Row>
        </Grid>
      );
    } else {
      return(
        <Grid textAlign='center'>
            <Grid.Row column={3}>
              <Grid.Column width={5} className="navLO917">
              <Link to='/contact'>
                    <Button className='contact-nav-button' inverted color="violet" animated='fade' compact>
                      <Button.Content visible>
                        Contact
                        </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted name='talk outline' />
                      </Button.Content>
                    </Button>
                </Link>
                <Link to='/aboutus'>
                    <Button className='about-us-nav-button' inverted color='pink' animated='fade' compact>
                      <Button.Content visible>
                        About
                        </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted name='hand spock' />
                      </Button.Content>
                    </Button>
                </Link>
              </Grid.Column>
              <Grid.Column width={6}>
                <a href="/"><img className="logo" src={ Logo }></img></a>
              </Grid.Column>
              <Grid.Column floated='right' width={5} className="navLO917">
                <Link to='/register'>
                    <Button className='register-nav-button' inverted color='blue' animated='fade' compact>
                      <Button.Content visible>
                        Register
                        </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted name='drivers license' />
                      </Button.Content>
                    </Button>
                </Link>
                <Link to='/login'>
                    <Button className='login-nav-button' inverted color='green' animated='fade' compact>
                      <Button.Content visible>
                        Login
                        </Button.Content>
                      <Button.Content hidden>
                        <Icon inverted name='ambulance' />
                      </Button.Content>
                    </Button>
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      );
    }
  }

  render() {
    return (
      <Segment basic>
          { this.rightNavs() }
      </Segment>
    )
  }
}





const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(NavBar));
