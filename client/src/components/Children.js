import React, { Component } from 'react';
import { Header, Form, Button, Segment, Container, Divider, Menu, Icon, Dropdown, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addChild } from '../actions/children';
import StepRegisterChildren from './step_register_children';
import '../styles/children.css';
import { registerUser } from '../actions/auth';


class Children extends Component {
  state = { age: '', realInterest: [] }

  handleSubmit = (e) => {

    e.preventDefault();
    const { dispatch, history, user } = this.props;
    dispatch(registerUser(user, history, this.state));
  }

  handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    this.setState({ [id]: value });
  }

  interests = () => {}

  render() {
    const { age } = this.state;
    const options = [
  { key: 'Reading', text: 'Reading', value: 'Reading' },
  { key: 'Sports / Athletics', text: 'Sports / Athletics', value: 'Sports / Athletics' },
  { key: 'Animals', text: 'Animals', value: 'Animals' },
  { key: 'Drawing', text: 'Drawing', value: 'Drawing' },
  { key: 'Coloring', text: 'Coloring', value: 'Coloring' },
  { key: 'Creative Arts', text: 'Creative Arts', value: 'Creative Arts' },
  { key: 'Being Imaginative', text: 'Being Imaginative', value: 'Being Imaginative' },
  { key: 'Acting', text: 'Acting', value: 'Acting' },
  { key: 'Listening to Music', text: 'Listening to Music', value: 'Listening to Music' },
  { key: 'Learning an Instrument', text: 'Learning an Instrument', value: 'Learning an Instrument' },
  { key: 'Playing with Siblings', text: 'Playing with Siblings', value: 'Playing with Siblings' },
  { key: 'Being Alone', text: 'Being Alone', value: 'Being Alone' },
  { key: 'Having a Conversation', text: 'Having a Conversation', value: 'Having a Conversation' },
  { key: 'Family / Friend Gatherings', text: 'Family / Friend Gatherings', value: 'Family / Friend Gatherings' },
  { key: 'Plants / Gardening', text: 'Plants / Gardening', value: 'Plants / Gardening' },
  { key: 'Hiking', text: 'Hiking', value: 'Hiking' },
  { key: 'Building Forts', text: 'Building Forts', value: 'Building Forts' },
  { key: 'Board Games', text: 'Board Games', value: 'Board Games' },
  { key: 'Building Things', text: 'Building Things', value: 'Building Things' },
  { key: 'Making Noise', text: 'Making Noise', value: 'Making Noise' },
  { key: 'Race Cars', text: 'Race Cars', value: 'Race Cars' },
  { key: 'Science Experiments', text: 'Science Experiments', value: 'Science Experiments' },
  { key: 'Paper Airplanes', text: 'Paper Airplanes', value: 'Paper Airplanes' },
  { key: 'Sloth Wrestling', text: 'Sloth Wrestling', value: 'Sloth Wrestling' },
]

    return(

        <div>
          <StepRegisterChildren className="register-child"/>

          <Divider />

          <div className='childReg'>
              <Icon name='smile' className="smileyFace" color="orange" size="large" />
              <span className="childInfoTitle">Enter Child Information</span>
              <span className="childInfoNote">More Children can be added in the Profile Page</span>
          </div>
          <Container>
          <Form onSubmit={this.handleSubmit}>
              <Label pointing='below' color="blue">What's Your Child's Age:</Label>
              <Form.Field
                control='select'
                id='age'
                value={this.state.value}
                onChange={this.handleChange}
              >
                <option value=''></option>
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
              <Divider hidden vertical />
              <Label pointing="below" color="teal">Select Your Child's Interest:</Label>
              <Dropdown
                label="Please Select Your Child\'s Interests"
                placeholder='Interests'
                onChange={(e,data) =>
                  this.setState({ realInterest: data.value})}
                  fluid
                  multiple
                  selection
                  options={options}
              />
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

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Children);
