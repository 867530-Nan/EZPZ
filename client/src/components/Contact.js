import React, { Component } from 'react';
import { Header, Segment, Card, Image, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import matthew from '../photodump/matthew.jpg';
import addy from '../photodump/addy.JPG';
import stockton from '../photodump/stockton.JPG';
import '../styles/contact.css';

class Contact extends Component {
  render() {
    return(
      <Container>
        <Segment className='row'>
          <Header as='h1' textAlign='center'>
            The Team!
          </Header>
          <Card className='cards'>
            <Image src={ matthew } className='photo' />
            <Card.Content>
              <Card.Header>
                Matthew
              </Card.Header>
              <Divider />
              <Card.Meta>
                The EZPZ Tzar.
              </Card.Meta>
              <Card.Description>
                Matthew is a model of the perfect human being. He has glorious locks, but has a strange interest in sloth wrestling.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card className='cards'>
            <Image src={ addy } className='photo' />
            <Card.Content>
              <Card.Header>
                Addy
              </Card.Header>
              <Divider />
              <Card.Meta>
                This is Addy
              </Card.Meta>
              <Card.Description>
                Addy is great. We love him.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card className='cards'>
            <Image src={ stockton } className='photo' />
            <Card.Content>
              <Card.Header>
                Stockton
              </Card.Header>
              <Divider />
              <Card.Meta>
                This is stockton
              </Card.Meta>
              <Card.Description>
                Stockton description.
              </Card.Description>
            </Card.Content>
          </Card>
        </Segment>
      </Container>
    );
  }
}

export default Contact;
