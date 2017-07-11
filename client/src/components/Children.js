import React, { Component } from 'react';
import { Header, Form, Button, Segment, Container, Divider, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addChild } from '../actions/children';

class Children extends Component {
  state = { age: '', interestOne: '', interestTwo: '', interestThree: '', interestFour: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    const { dispatch } = this.props;
    const { age, interestOne, interestTwo, interestThree, interestFour } = this.state;
    dispatch(addChild(this.state));
  }

  handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
    console.log('someting')
  }

  interests = () => {}

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
          <Form.Field
            label='Age:'
            control='select'
            id='age'
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
          </Form.Field>
          <Form.Group widths='equal'>
            <Form.Field label='Interest:'
            control='select'
            id='interestOne'
            value={this.state.value}
            onChange={this.handleChange}>
              <option></option>
              <option value='basketball'>Basketball</option>
              <option value='reading'>Reading</option>
              <option value='castle'>Sand Castle Building</option>
              <option value='sloths'>Sloth Wrestling</option>
            </Form.Field>
            <Form.Field label='Interest:'
            control='select'
            id='interestTwo'
            value={this.state.value}
            onChange={this.handleChange}>
              <option></option>
              <option value='basketball'>Basketball</option>
              <option value='reading'>Reading</option>
              <option value='castle'>Sand Castle Building</option>
              <option value='sloths'>Sloth Wrestling</option>
            </Form.Field>
            <Form.Field label='Interest:'
            control='select'
            id='interestThree'
            value={this.state.value}
            onChange={this.handleChange}>
              <option></option>
              <option value='basketball'>Basketball</option>
              <option value='reading'>Reading</option>
              <option value='castle'>Sand Castle Building</option>
              <option value='sloths'>Sloth Wrestling</option>
            </Form.Field>
            <Form.Field label='Interest:'
            control='select'
            id='interestFour'
            value={this.state.value}
            onChange={this.handleChange}>
              <option></option>
              <option value='basketball'>Basketball</option>
              <option value='reading'>Reading</option>
              <option value='castle'>Sand Castle Building</option>
              <option value='sloths'>Sloth Wrestling</option>
            </Form.Field>
          </Form.Group>
          <Segment basic textAlign='center'>
            <Button>Submit</Button>
          </Segment>
        </Form>
        </Container>
      </Segment>
    );
  }
}

export default connect()(Children);
