import React, { Component } from 'react';
import { Header, Form, Button, Segment, Container, Divider, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Children extends Component {
  state = { age: '', interests: ''
          };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const { age, interests } = this.state;
  }

  handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  // const options = [
  //   { key: 1, text: '1', value: 1 },
  //   { key: 2, text: '2', value: 2 },
  //   { key: 3, text: '3', value: 3 },
  //   { key: 4, text: '4', value: 4 },
  //   { key: 5, text: '5', value: 5 },
  //   { key: 6, text: '6', value: 6 },
  //   { key: 7, text: '7', value: 7 },
  //   { key: 8, text: '8', value: 8 },
  //   { key: 9, text: '9', value: 9 },
  //   { key: 10, text: '10', value: 10 },
  //   { key: 11, text: '11', value: 11 },
  //   { key: 12, text: '12', value: 12 },
  //   { key: 13, text: '13', value: 13 },
  //   { key: 14, text: '14', value: 14 },
  //   { key: 15, text: '15', value: 15 },
  //   { key: 16, text: '16', value: 16 },
  //   { key: 17, text: '17', value: 17 },
  //   { key: 18, text: '18', value: 18 },
  // ]

  render() {
    const { age, interests } = this.state;

    return(
      <Segment basic className='regBackground'>
        <Header as='h1' textAlign='center' className='registrationHeader'>
        Register Here!
        </Header>
        <Divider />
        <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field required>
            <label>Age:</label>
            <input
              id='age'
              placeholder='Age'
              value={age}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Interests:</label>
            <input
              id='interests'
              placeholder='Interests'
              value={interests}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Segment basic textAlign='center'>
            <Button
              inverted
              color='violet'
              size='huge'
              type='submit'
              className='registrationButton'
            > Submit
            </Button>
          </Segment>
        </Form>
        </Container>
      </Segment>
    );
  }
}

export default connect()(Children);
