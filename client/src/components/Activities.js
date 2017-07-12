import React from 'react'
import { Header, Segment, Button, Divider, Label, Container, Grid, Card, Dropdown } from 'semantic-ui-react'
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActivities } from '../actions/activities'
import ActivityView from './ActivityView'


class Activities extends React.Component {
  // state = {
  //   startDate: moment(),
  //   loaded: false,
  // }

  state = { month: '', activeIndex: 0 }

  componentDidMount = () => {
    this.props.dispatch(getActivities())
    // this.setState({ loaded: true })
  }

  tick =() => {
    let activeIndex = this.state.activeIndex;
    if (activeIndex == this.props.activities.length - 1){
      activeIndex = 0;
      } else {
        activeIndex++;
        }
    this.setState({
      activeIndex
    });
  }

  showActivities = () => {

      let visible = this.props.activities;
      const activeIndex = this.state.activeIndex
      if (visible)
        visible = this.props.activities.filter( a => a.date === this.state.month )
      return (
          <ActivityView activity={this.props.activities[this.state.activeIndex]} />
      )
   }

  monthOptions = () => {
    let { months } = this.props;
    return months.map( (month, index) => { return { key: index, text: month, value: month}})
  }





  render() {
    let { month } = this.state;
    if(!this.props.activities) {
      return(<div>loading</div>)
    }
    console.log(this.state.activeIndex)
    return(
      <Container>
        <Header as='h3' textAlign="center">Activities</Header>
        <Dropdown
          placeholder="Select Month to Play"
          fluid
          selection
          options={this.monthOptions()}
          onChange={ (e, data) => this.setState({ month: data.value }) }
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
              <ActivityView activity={this.props.activities[this.state.activeIndex]} />
            </Grid.Row>
          </Grid>
          { this.showActivities }
          <div className='ui two buttons'>
            <Button basic color='green'>Approve</Button>
            <Button className = "btn btn-default" onClick={this.tick} >
              Show Next Activity
            </Button>
          </div>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const activities = state.activities;
  const months = [...new Set(state.activities.map( a => a.date ))]
  return { activities, months }
}

export default connect(mapStateToProps)(Activities);
