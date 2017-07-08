import React, { Component } from 'react';
import { Header, Segment, Button, Form, Container } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return(
      <div>
        <Header as='h1' textAlign='center'>Home Component</Header>
        <Container>
          <Segment>This is our blurb about things. When we hanging out???</Segment>
          <Button
            color='red'
            content='Like'
            icon='heart'
            label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
          />
        </Container>
      </div>
    );
  }
}

export default Home;
