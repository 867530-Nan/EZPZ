import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/activityview.css';

const ActivityView = ({ activity = {} }) => (
  <Container>
    <Header as="h3" textAlign="center" className="activity-header">{activity.name}</Header>
    <Table definition color="teal">
      <Table.Body>
        <Table.Row>
          <Table.Cell>Time</Table.Cell>
          <Table.Cell>{activity.time}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Date</Table.Cell>
          <Table.Cell>{activity.date}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Location</Table.Cell>
          <Table.Cell>{activity.location}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Is the Activity Indoors?</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{activity.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Webpage</Table.Cell>
          <Table.Cell><a href="{activity.url}">{activity.url}</a></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

export default connect()(ActivityView);
