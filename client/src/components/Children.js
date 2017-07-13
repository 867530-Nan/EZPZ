import React, { Component } from 'react';
import { Header, Form, Button, Segment, Container, Divider, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addChild } from '../actions/children';
import StepRegisterChildren from './step_register_children'
import '../styles/children.css';


class Children extends Component {
  state = { age: '', interestOne: '', interestTwo: '', interestThree: '', interestFour: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { age, interestOne, interestTwo, interestThree, interestFour } = this.state;
    dispatch(addChild(this.state, history));
  }

  handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  interests = () => {}

  render() {
    const { age, interestOne, interestTwo, interestThree, interestFour } = this.state;

    return(
      
        <div >
          <StepRegisterChildren className="register-child"/>
        
          <Divider />
          <Segment basic className='regBackground'>
          <Header className='create-profile' color="orange" as='h1' icon textAlign='center'>
              <Icon name='child' />
              Child Information
            </Header>
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
              onChange={this.handleChange}
              required>
                <option></option>
                <option value='sports'>Sport / Athletics</option>
                <option value='reading'>Reading</option>
                <option value='animals'>Animals</option>
                <option value='drawing'>Drawing</option>
                <option value='coloring'>Coloring</option>
                <option value='creative arts'>Creative Arts</option>
                <option value='pretending'>Being Imaginative</option>
                <option value='acting'>Acting</option>
                <option value='music'>Listening to Music</option>
                <option value='music'>Learning an Instrument</option>
                <option value='siblings'>Playing with Siblings</option>
                <option value='alone'>Being Alone</option>
                <option value='talking'>Having a Conversation</option>
                <option value='gathering'>Family / Friend Gatherings</option>
                <option value='gardens'>Plants / Gardening</option>
                <option value='hiking'>Hiking</option>
                <option value='cooking'>Cooking / Baking</option>
                <option value='stories'>Listening to Stories</option>
                <option value='sloths'>Sloth Wrestling</option>
              </Form.Field>
              <Form.Field label='Interest:'
              control='select'
              id='interestTwo'
              value={this.state.value}
              onChange={this.handleChange}
              required>
                <option></option>
                <option value='sports'>Sport / Athletics</option>
                <option value='reading'>Reading</option>
                <option value='animals'>Animals</option>
                <option value='drawing'>Drawing</option>
                <option value='coloring'>Coloring</option>
                <option value='creative arts'>Creative Arts</option>
                <option value='pretending'>Being Imaginative</option>
                <option value='acting'>Acting</option>
                <option value='music'>Listening to Music</option>
                <option value='music'>Learning an Instrument</option>
                <option value='siblings'>Playing with Siblings</option>
                <option value='alone'>Being Alone</option>
                <option value='talking'>Having a Conversation</option>
                <option value='gathering'>Family / Friend Gatherings</option>
                <option value='gardens'>Plants / Gardening</option>
                <option value='hiking'>Hiking</option>
                <option value='cooking'>Cooking / Baking</option>
                <option value='stories'>Listening to Stories</option>
                <option value='sloths'>Sloth Wrestling</option>
              </Form.Field>
              <Form.Field label='Interest:'
              control='select'
              id='interestThree'
              value={this.state.value}
              onChange={this.handleChange}
              required>
                <option></option>
                <option value='sports'>Sport / Athletics</option>
                <option value='reading'>Reading</option>
                <option value='animals'>Animals</option>
                <option value='drawing'>Drawing</option>
                <option value='coloring'>Coloring</option>
                <option value='creative arts'>Creative Arts</option>
                <option value='pretending'>Being Imaginative</option>
                <option value='acting'>Acting</option>
                <option value='music'>Listening to Music</option>
                <option value='music'>Learning an Instrument</option>
                <option value='siblings'>Playing with Siblings</option>
                <option value='alone'>Being Alone</option>
                <option value='talking'>Having a Conversation</option>
                <option value='gathering'>Family / Friend Gatherings</option>
                <option value='gardens'>Plants / Gardening</option>
                <option value='hiking'>Hiking</option>
                <option value='cooking'>Cooking / Baking</option>
                <option value='stories'>Listening to Stories</option>
                <option value='sloths'>Sloth Wrestling</option>
              </Form.Field>
              <Form.Field label='Interest:'
              control='select'
              id='interestFour'
              value={this.state.value}
              onChange={this.handleChange}
              required>
                <option></option>
                <option value='sports'>Sport / Athletics</option>
                <option value='reading'>Reading</option>
                <option value='animals'>Animals</option>
                <option value='drawing'>Drawing</option>
                <option value='coloring'>Coloring</option>
                <option value='creative arts'>Creative Arts</option>
                <option value='pretending'>Being Imaginative</option>
                <option value='acting'>Acting</option>
                <option value='music'>Listening to Music</option>
                <option value='music'>Learning an Instrument</option>
                <option value='siblings'>Playing with Siblings</option>
                <option value='alone'>Being Alone</option>
                <option value='talking'>Having a Conversation</option>
                <option value='gathering'>Family / Friend Gatherings</option>
                <option value='gardens'>Plants / Gardening</option>
                <option value='hiking'>Hiking</option>
                <option value='cooking'>Cooking / Baking</option>
                <option value='stories'>Listening to Stories</option>
                <option value='sloths'>Sloth Wrestling</option>
              </Form.Field>
            </Form.Group>
            <Segment basic textAlign='center'>
            <Button
              inverted
              color='orange'
              size='huge'
              type='submit'
              className='registrationButton'
            > Submit
            </Button>
            </Segment>
          </Form>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default connect()(Children);
