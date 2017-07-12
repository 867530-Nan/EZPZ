import React, { Component } from 'react';
import { Header, Segment, Icon, Button, Divider, Container, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import avatar from '../photodump/avatar1.jpg';
import '../styles/profile.css';

class Profile extends Component {
  render() {
    return(
      <Container>
        <Segment>
          <Header as='h1' textAlign='center'>
            Welcome To Your Profile!
          </Header>
          <Divider />
          <Segment compact>
            <div>
              <Image src={avatar} />
              <Divider />
              <div className='nameHere'>Name Here</div>
            </div>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default Profile;
