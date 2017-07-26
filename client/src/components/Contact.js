import React, { Component } from 'react';
import { Header, Segment, Card, Image, Container, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import matthew from '../photodump/matthew.jpg';
import addy from '../photodump/addy.JPG';
import stockton from '../photodump/stockton.JPG';
import tate from '../photodump/Tate.jpg';
import '../styles/contact.css';

class Contact extends Component {
  render() {
    return(
      <div>
          <Header as='h1' textAlign='center'>
            The Team!
          </Header>
        <div className="name-cards">
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
                  The Deep Thinker.
                </Card.Meta>
                <Card.Description>
                  Addy is the glue to the EZPZ family. He's also a father. He's probably glue to that family as well.
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
                  #1 in the hearts of EZPZ families everywhere, and #12 on the roster of Utah Jazz Fans everywhere.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card className='cards'>
              <Image src={ tate } className='photo' />
              <Card.Content>
                <Card.Header>
                  Tate
                </Card.Header>
                <Divider />
                <Card.Meta>
                  He is a potato
                </Card.Meta>
                <Card.Description>
                  Tater is our perfect side dish of a developer. He adds a bit of flavor that helps the main course seem extra delicious!
                </Card.Description>
              </Card.Content>
            </Card>
        </div>
      </div>
    );
  }
}

export default Contact;
