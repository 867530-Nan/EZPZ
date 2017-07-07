import React from 'react'
import { Header, Form } from 'semantic-ui-react'


class SavedActivities extends React.Component {

  state =

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Field>
      <label>Date</label>
      <input

      <Header as='h3' textAlign='center'>Time</Header>
      </Form>
    );
  }
}
