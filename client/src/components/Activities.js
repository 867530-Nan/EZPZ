import React from 'react'
import { Header, Form, Segment, Button, Divider, Label } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import TimeInput from 'react-time-input';


class Activities extends React.Component {
  state = {
    startDate: moment()
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
  }




  render() {
    return(
      <Segment>
      <Header as='h3' textAlign='center' >When are we hanging out?</Header>
      <Label>Date</Label>
       <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <Label>Time</Label>
        <Divider />
        <Header>Location: </Header>
        <Header>Date: </Header>
        <Header>Description: </Header>
        <Header>Name: </Header>
        <Header>Indoor: </Header>
        <Button>Save</Button>
        <Button>Next</Button>
      </Segment>

    );
  }
}

export default Activities;
