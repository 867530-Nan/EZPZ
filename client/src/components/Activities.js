import React from 'react'
import { Header, Segment, Button, Divider, Label } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Grid, Card } from 'semantic-ui-react';
import { getActivities } from '../actions/activities'


class Activities extends React.Component {
  // state = {
  //   startDate: moment(),
  //   loaded: false,
  // }

  componentDidMount = () => {
    this.props.dispatch(getActivities())
    // this.setState({ loaded: true })
  }

  // handleChange = (date) => {
  //   this.setState({
  //     startDate: date
  //   });
  // }

  showActivities = () => {
  //   let { activities } = this.props;
  //   let visible = activities;

  //   //TODO: update logic in if-statement
  //   debugger
  //   if ( startDate === this.activity.id.date )
  //     visible = activities.filter( a => a.date === this.date )
  //     return visible.map ( activity => {
  //     let { id, date, url, time,
  //           name, description, inside,
  //           age, location, interest
  //         } = activity;
      return (
        this.props.activities.map( activity =>
        <Grid.Column computer={4} >
          <Card>
            <Card.Content>
              <Card.Header>
              { activity.name }
              </Card.Header>
              <Card.Meta>
              { activity.date }
              </Card.Meta>
              <Card.Meta>
              { activity.time }
              </Card.Meta>
              <Card.Description>
              { activity.description }
              </Card.Description>
            </Card.Content>
            // <Card.Content extra>
            //   <div className='ui two buttons'>
            //   <Button basic color='green'>Approve</Button>
            //   <Button basic color='red'>Decline</Button>
            //   </div>
            // </Card.Content>
          </Card>
        </Grid.Column>
      )
    )
  //   })
  }
  //
  // render() {
  //   return(
  //     <Segment>
  //     <Header as='h3' textAlign='center' >When are we hanging out?</Header>
  //     <Label>Date</Label>
  //      <DatePicker
  //         selected={this.state.startDate}
  //         onChange={this.handleChange}
  //       />
  //       <Label>Activities Page</Label>
  //       <Divider />
  //       <Grid columns={16}>
  //         <Grid.Row>
  //           { this.showActivities() }
  //         </Grid.Row>
  //       </Grid>
  //       <Button>Save</Button>
  //       <Button>Next</Button>
  //     </Segment>

  //   );
  // }
  render() {
    if(!this.props.activities) {
      return(<div>loading</div>)
    }
    return(
      <Container>
        <Header as='h3' textAlign="center">Activities</Header>
          <Grid columns={16}>
            <Grid.Row>
              { this.showActivities() }
            </Grid.Row>
          </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { activities: state.activities }
}

export default connect(mapStateToProps)(Activities);
