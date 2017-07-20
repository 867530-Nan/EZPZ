import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Form, Divider, Container, Grid } from 'semantic-ui-react';
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

  render() {
    const { visible, email, password } = this.state
    return ( 
      <div>
        <div className="top-photo">
          <Header as='h1' textAlign='center' className='homeHeader'>&#123; <span className="e">E</span>Z | <span className="p">P</span>Z &#125;</Header>
          <Header as='h1' textAlign='center' className='home-duo'>Empowering Parenting by Eliminating Planning</Header>
          <div className="title-about">
            <h3 className="title-about-words">Strenghtening Families Through New Adventures and Energizing Play</h3>
          </div> 
        </div>
          <Grid divided columns={2} className="three-part-words">
            <Grid.Row>
              <Grid.Column textAlign='center' centered className="duo-grid duo-first">
                <div className="single">
                  <Icon name="calendar" size="huge"/>
                  <h5 className="duo-words">See What Family Friendly Activities are Happening in Your Community</h5>
                </div>
              </Grid.Column>

             

              <Grid.Column textAlign='center' centered className="duo-grid duo-second">
                <div className="single">
                  <Icon name="child" size="huge"/>
                  <h5 className="duo-words">Select Availability, Browse Activities, and Beign Spending Time with Your Family</h5> 
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(Home));
        
         
          
