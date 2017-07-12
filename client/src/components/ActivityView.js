import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ActivityView = ({ activity = {} }) => (
  <Container>
    <Header as="h3" textAlign="center">{activity.name}</Header>
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Date</Table.Cell>
          <Table.Cell>{activity.month}/{activity.day}/{activity.year}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Location</Table.Cell>
          <Table.Cell>{activity.location}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Inside</Table.Cell>
          <Table.Cell>No</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Webpage</Table.Cell>
          <Table.Cell>{activity.url}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{activity.description}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Time</Table.Cell>
          <Table.Cell>5:00 PM</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

export default connect()(ActivityView);
