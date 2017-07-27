import React from 'react';
import { Header, Divider, Accordion, Icon } from 'semantic-ui-react'
import { getSavedActivities } from '../actions/itinerary'
import { connect } from 'react-redux'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import moment from 'moment'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import '../styles/itinerary.css'

const DAY_FORMAT = 'DD/MM/YYYY';


class Itinerary extends React.Component {
  state = { visible: [], selectedDay: undefined, isDisabled: false, }

  //Save User_activities to redux store with componentWillMount
  componentWillMount() {
    this.props.dispatch(getSavedActivities(this.setActivities))
  }

  setActivities = (userActivities) => {
    this.setState({ visible: userActivities });
  }

  showActivities = () => {
    return this.state.visible.map( (activity, i) =>
      <Accordion className='activityList' key={activity.id}>
          <Accordion.Title as='h1'>
            <Icon name='dropdown' />
            Activity {i+1}: {activity.name} - {activity.time}
          </Accordion.Title>
            <Accordion.Content>
              <div className="listInfo">
              Suitable for Ages: {activity.age}
              </div>
              <div className="listInfo">
              This event cost: ${activity.cost}
              </div>
              <div className="listInfo">
              Located at: {activity.address}
              </div>
              <div className="listInfo">
              {activity.description}
              </div>
              <div className="listInfo">
              Visit the Event Website: {activity.url}
              </div>
            </Accordion.Content>
      </Accordion>
    )
  }

  handleDayChange = (selectedDay, modifiers) => {
    let timeParse = moment(selectedDay).format("MMMM DD YYYY")
    let visible = this.props.userActivities.filter( a =>
        moment(`${a.month} ${a.day} ${a.year}`).format("MMMM DD YYYY") === timeParse)
    this.setState({ visible });
  }

  render() {
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

    if (this.state.visible.length < 1)
      return(
        <div className="itineraryDate">
          <div className="dateSelect">
            <Header as='h1' className="activity-header" textAlign="center" color="teal">
              Look Up an Itinerary:
            </Header>
            <div className="calendar">
              <DayPickerInput
                value={formattedDay}
                onDayChange={this.handleDayChange}
                format={DAY_FORMAT}
                placeholder="Select Date for Itinerary..."
                dayPickerProps={dayPickerProps}
                className = "day-picker"
              />
            </div>
            <Header as='h1'>
              You do not have any activities for this day planned!
            </Header>
          </div>
        </div>
        )
    else
      return(
        <div className="">

          <div className="singleAct-date">
              <Header as="h1" className="singleAct-header" textAlign="center" basic color="teal">
                Itinerary Selecter:
              </Header>
              <DayPickerInput
                  value={formattedDay}
                  onDayChange={this.handleDayChange}
                  format={DAY_FORMAT}
                  placeholder="What Day's Activities are you looking for?"
                  dayPickerProps={dayPickerProps}
                  className = "singleAct-picker"
                />
            </div>

          <Divider />

          <Header>
                    { this.showActivities() }
          </Header>
        </div>
      )
  }

}

const mapStateToProps = (state) => {
  const userActivities = state.userActs
  return { userActivities }
}

export default connect(mapStateToProps)(Itinerary);
