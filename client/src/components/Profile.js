import React, { Component } from 'react';
import { Header, Segment, Icon, Button, Divider, Container, Image, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import avatar from '../photodump/avatar1.jpg';
import '../styles/profile.css';

class Profile extends Component {
  render() {
    return(
      <div className='bigBox'>
        <Header as='h1' textAlign='center'>
        Welcome To Your Profile!
        </Header>
          <Container className='profContainer'>
            <Segment compact className='avatar'>
            <Image src={avatar} />
            <Divider />
            Your Name here
            </Segment>
            <Segment basic>
              Content Here!
            </Segment>
          </Container>
      </div>
    );
  }
}

export default Profile;
