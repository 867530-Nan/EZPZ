import React from 'react'
import { Header, Segment, Button, Divider, Label, Container, Grid, Card, Dropdown } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActivities, addActivity } from '../actions/activities';
import ActivityView from './ActivityView';
import '../styles/activities.css';


class Activities extends React.Component {

  state = { month: '', activeIndex: 0, visible: [] }

  addActivity = (id) => {
    this.props.dispatch(addActivity(id));
    let activeIndex = this.state.activeIndex;
    activeIndex++;
    this.setState({ activeIndex });
  }

  componentWillMount() {
    this.props.dispatch(getActivities(this.setActivities));
  }

  setActivities = (activities) => {
    this.setState({ visible: activities });
  }

  tick =() => {
    let activeIndex = this.state.activeIndex;
    // console.log(this.state.activeIndex, this.state.visible.length)
    if (activeIndex == this.state.visible.length - 1){
      activeIndex = 0
    } else {
      activeIndex++;
    }
    this.setState({ activeIndex });
  }

  monthOptions = () => {
    let { months } = this.props;
    return months.map( (month, index) => { return { key: index, text: month, value: month} } )
  }

  updateFilter = (e, data) => {
    let visible = this.props.activities.filter( a => a.month === data.value)
    this.setState({ month: data.value, visible, activeIndex: 0 });
  }



  render() {
    let { month, activeIndex } = this.state;
    if (month == '')
      return(
        <Container>
          <Segment as="h1" className="activity-header" textAlign="center" padded basic color="teal">
            Please Select a Date:
          </Segment>
          <Dropdown
          placeholder="Select Month to Play"
          fluid
          selection
          options={this.monthOptions()}
          onChange={this.updateFilter}
          value={month}
          />
          { month &&
              <Button
                fluid
                basic
                onClick={ () => this.setState({ month: '' }) }
              >
              Clear Filter: {month}
              </Button>
            }
          </Container>
        )
    else
      return(
        <Container>
          <Header size="massive" textAlign="center">Select Date:</Header>
          <Dropdown
            placeholder="Select Month to Play"
            fluid
            selection
            options={this.monthOptions()}
            onChange={this.updateFilter}
            value={month}
            />
            { month &&
                <Button
                  fluid
                  basic
                  onClick={ () => this.setState({ month: '' }) }
                >
                Clear Filter: {month}
                </Button>
                }
                <Divider />
            <Grid columns={16}>
              <Grid.Row>
                <ActivityView activity={this.state.visible[this.state.activeIndex]} />
              </Grid.Row>
            </Grid>
            <div className='ui two buttons'>
              <Button attached='bottom' color="orange" onClick={this.tick} >
                Show Next Activity
              </Button>
              <Button attached='bottom' color="green" onClick={() => this.addActivity(this.state.visible[activeIndex].id)}>Add to Itinerary</Button>
            </div>
              <Button fluid color="violet" to="/itinerary">Visit Itinerary for all Activities</Button>
        </Container>
      )
  }
}

const mapStateToProps = (state) => {
  const activities = state.activities;
  const months = [...new Set(state.activities.map( a => a.month ))]
  return { activities, months }
}

export default connect(mapStateToProps)(Activities);
