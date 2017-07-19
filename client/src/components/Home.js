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
          <Header as='h1' textAlign='center' className='homeHeader'>EZPZ</Header>
          <Header as='h1' textAlign='center' className='home-duo'>Empowering Parenting | Eliminating Planning</Header>
          <div className="title-about">
            <h3 className="title-about-words">Strenghtening Families Through New Adventures and Energizing Play</h3>
          </div> 
        </div>
          <Grid divided columns={2} className="three-part-words">
            <Grid.Row>
              <Grid.Column textAlign='center' centered color="green" className="trio-grid">
                <div className="single">
                  <Icon name="calendar" size="huge"/>
                  <h5 className="trio-words">See What Activities are Happening in your area based off a child's interest</h5>
                </div>
              </Grid.Column>

             

              <Grid.Column textAlign='center' centered color="orange" className="trio-grid">
                <div className="single">
                  <Icon name="child" size="huge"/>
                  <h5 className="trio-words">Select Availability, See Activities in Your Area, and Family Time</h5> 
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
        
         
          
