import React from 'react'
import { Header, Button, Divider, Grid, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getActivities, addActivity } from '../actions/activities';
import ActivityView from './ActivityView';
import '../styles/activities.css';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput'

const DAY_FORMAT = 'DD/MM/YYYY';

class Activities extends React.Component {

  state = { month: '', activeIndex: null, visible: [], selectedDay: undefined, isDisabled: false, }

  addActivity = (id) => {
    this.props.dispatch(addActivity(id));
    let activeIndex = this.state.activeIndex;
    let newVisible = this.state.visible.splice(activeIndex, 1)
    let visible = this.state.visible
    this.setState({ visible, activeIndex });
  }

  handleDayChange = (selectedDay, modifiers) => {
    let monthParse = moment(selectedDay).format("MMMM DD YYYY")
    let visible = this.props.activities.filter( a =>
        moment(`${a.month} ${a.day} ${a.year}`).format("MMMM DD YYYY") === monthParse
      )
    this.setState({ visible, activeIndex: 0 });
  };

  componentWillMount() {
    this.props.dispatch(getActivities(this.setActivities));
  }

  setActivities = (activities) => {
    this.setState({ visible: activities });
  }

  tick = () => {
    let activeIndex = this.state.activeIndex;
    // console.log(this.state.activeIndex, this.state.visible.length)
    if (activeIndex === this.state.visible.length - 1){
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
    //make it so dropdown menu is not behind the table
    const { selectedDay, isDisabled } = this.state;
    const formattedDay = selectedDay
      ? moment(selectedDay).format(DAY_FORMAT)
      : '';

    const dayPickerProps = {
      todayButton: 'Go to Today',
      disabledDays: {
        daysOfWeek: [],
      },
      enableOutsideDays: true,
      modifiers: {
        monday: { daysOfWeek: [1] },
      },
    };

    let { activeIndex } = this.state;

    if (activeIndex == null)
      return(
        <div className="dateMod">
          <div className="dateSelect">
            <Header as='h1' className="activity-header" textAlign='center'>
              Select Activity Date:
            </Header>
            <div className="calendar">
              <DayPickerInput
                value={formattedDay}
                onDayChange={this.handleDayChange}
                format={DAY_FORMAT}
                placeholder={`E.g. ${moment().locale('en').format(DAY_FORMAT)}`}
                dayPickerProps={dayPickerProps}
                className = "day-picker"
              />
            </div>
          </div>
        </div>
        )
    else
      return(
        <div className="actMod">

        <div className="singleAct-date">
        
        <Header as="h1" className="singleAct-header" textAlign="center" basic color="violet">
          Select a New Date:
        </Header>
        <Modal trigger={<Button color='violet'>Show Calendar</Button>}>
          <Modal.Header>Select a Date</Modal.Header>
            <Modal.Content>
              <DayPickerInput
                value={formattedDay}
                onDayChange={this.handleDayChange}
                format={DAY_FORMAT}
                placeholder={`E.g. ${moment().locale('en').format(DAY_FORMAT)}`}
                dayPickerProps={dayPickerProps}
                className = "singleAct-picker"
              />
            </Modal.Content>
          </Modal>

        </div>

          <div className="actInfo">
            <Grid columns={16}>
              <Grid.Row>
                <ActivityView activity={this.state.visible[this.state.activeIndex]} />
              </Grid.Row>
            </Grid>

            <div className='ui two buttons singleAct'>
              <Button attached='bottom' color="orange" onClick={this.tick} >
                Show Next Activity
              </Button>
              <Button
                attached='bottom'
                color="green"
                onClick={() => this.addActivity(this.state.visible[activeIndex].id)}
                >
                Add to Itinerary
              </Button>
            </div>
            <Link to='/itinerary'>
              <Button fluid color="violet" to="/itinerary">Visit Itinerary for all Activities</Button>
            </Link>
          </div>

        </div>
      )
  }
}

const mapStateToProps = (state) => {
  const months = [...new Set(state.activities.map( a => a.month ))]
  return { activities: state.activities, months, selectedDay: state.selectedDay }
}

export default connect(mapStateToProps)(Activities);
