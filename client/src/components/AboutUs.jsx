import React, { Component } from 'react'
import { Divider, Grid, Card, Icon, Image, Header } from 'semantic-ui-react'
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
			  <Header as="h3" className="how">How you spend time together is what matter most</Header>
      </div>
	      <div className="swimming"></div>
			    <div as='h3' textAlign='center' className="together">
		      	EZPZ grants easy access to community events for the whole family
			    </div>
			   <div className="instructions">
			    <Card>
				    <Image src={ numberOne } className="photo" />
				    <Card.Content>
				      <Card.Header>
				        Register Your Family
				      </Card.Header>
				    </Card.Content>
				  </Card>
				  <Card>
				    <Image src={ numberTwo } className="photo" />
				    <Card.Content>
				      <Card.Header>
				        Select Availability
				      </Card.Header>
				    </Card.Content>
				  </Card>
				  <Card>
				    <Image src={ numberThree } className="photo" />
				    <Card.Content>
				      <Card.Header>
				        Browser Activities
				      </Card.Header>
				    </Card.Content>
				  </Card>
				</div>
				<div className="concert"></div>
							   <div className="instructions">
			    <Card>
				    <Image src={ numberOne } className="photo" />
				    <Card.Content>
				      <Card.Header>
				        Register Your Family
				      </Card.Header>
				    </Card.Content>
				  </Card>
				  <Card>
				    <Image src={ numberTwo } className="photo" />
				    <Card.Content>
				      <Card.Header>
				        Select Availability
				      </Card.Header>
				    </Card.Content>
				  </Card>
				  <Card>
				    <Image src={ numberThree } className="photo" />
				    <Card.Content>
				      <Card.Header>
				        Browser Activities
				      </Card.Header>
				    </Card.Content>
				  </Card>
				</div>
</div>
    );
  }
}

export default AboutUs;
