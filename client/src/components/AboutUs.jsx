import React, { Component } from 'react'
import { Header, Segment, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../styles/about.css'
import numberOne from '../photodump/parent-profile.png'
import numberTwo from '../photodump/select-date.png'
import numberThree from '../photodump/single-activity.png'


class AboutUs extends Component {
  render() {
    return(
<div>
			<div className="topLine">
	      <Header as='h1' textAlign='center' className="qvq">Quality > Quantity</Header>
			  <Header as="h3" className="how">How you spend time together is what matters most</Header>
      </div>
      <div className="swimming"></div>
		    <div className="together">
	      	<span className="firstTogether">EZPZ grants easy access to community events for the whole family</span>
		    </div>
		  <div className="instructions"></div>
		  <Table color="teal" stackable basic textAlign="center">
		  	<Table.Body className="researchTable">
	        <Table.Row className="researchRows">
	          <Table.Cell>Community Recreation Center</Table.Cell>
	          <Table.Cell>History &amp; Art Museums</Table.Cell>
	          <Table.Cell>Outdoor Concerts and Movies</Table.Cell>
	        </Table.Row>
	        <Table.Row className="researchRows">
	          <Table.Cell>City &amp; County Festivals</Table.Cell>
	          <Table.Cell>Family Centers</Table.Cell>
	          <Table.Cell>Community Events</Table.Cell>
	        </Table.Row>
	        <Table.Row className="researchRows">
	          <Table.Cell>Farmers Markets</Table.Cell>
	          <Table.Cell>Parks and Environmental Organizations</Table.Cell>
	          <Table.Cell>Everywhere Inbetween</Table.Cell>
	        </Table.Row>
	      </Table.Body>
	    </Table>
			<div className="concert"></div>
</div>
    );
  }
}

export default AboutUs;
