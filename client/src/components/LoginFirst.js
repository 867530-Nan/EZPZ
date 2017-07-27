import React, { Component } from 'react';
import { Header, Segment, Form, Button, Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/auth';
import '../styles/loginfirst.css';
import StepRegisterLogin from './step_register_login'
import numberOne from '../photodump/select-date.png'
import numberTwo from '../photodump/activity.png'
import numberThree from '../photodump/blog.png'


class LoginFirst extends Component {
  state = { email: '', password: '' };

  handleChange = (e) => {
    const { id , value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { email, password } = this.state;

    dispatch(handleLogin(email, password, history));
  }

  render() {
    const { email, password } = this.state;

    return(
      <div>
     	 	<div className="register-login">
         <StepRegisterLogin className="steps"/>

        <Segment basic textAlign="center" as="h2" className="interface">
          <span className="interWords">...Quick Overview of the EZPZ Interface...</span>
        </Segment>
          <div className="instructions">
            <Card className="trioCards">
              <Image src={ numberOne } className="photo" />
              <Card.Content className="bottomHalf">
                <Card.Header>
                  Select Activity Day
                </Card.Header>
                <Card.Description>
                  Our Team has done the research, 
                  searching the community high and low for all kinds of events, 
                  and chosen activities for you and your children. 
                </Card.Description>
              </Card.Content>
            </Card>
            <Card className="trioCards">
              <Image src={ numberTwo } className="photo" />
              <Card.Content className="bottomHalf">
                <Card.Header>
                  Add to Itinerary (Green Button) or <br />Skip to next Activity (Orange)
                </Card.Header>
                <Card.Description>
                  Your Itinerary is your Go-To for saved activities. 
                  Whether today, or next week, quickly access each Itinerary, 
                  and begin Family Time. 
                </Card.Description>
              </Card.Content>
            </Card>
            <Card className="trioCards">
              <Image src={ numberThree } className="photo" />
              <Card.Content className="bottomHalf">
                <Card.Header>
                  Explore EZPZ Blog
                </Card.Header>
                <Card.Description>
                  Visit the Blog and Share you Experiences, 
                  Drop us a line and tell us about an event coming up,
                  Share any feedback with our application. 
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(LoginFirst);
