import React from 'react';
import { Header, Grid, Container, Divider, Accordion, Message, Label, Icon } from 'semantic-ui-react'
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

  showActivities = () => {
    return this.state.visible.map( (activity, i) =>
      <Accordion>
          <Accordion.Title>
            <Icon name='dropdown' />
            Activity {i}: {activity.name} - {activity.time}
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
    let visible = this.props.userActivities.filter( a => moment(`${a.month} ${a.day} ${a.year}`).format("MMMM DD YYYY") === timeParse)
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
        daysOfWeek: [0, 6],
      },
      enableOutsideDays: true,
      modifiers: {
        monday: { daysOfWeek: [1] },
      },
    };

    let { month, activeIndex } = this.state;

    if (this.state.visible.length < 1)
      return(
        <div className="itineraryDate">
          <div className="dateSelect">
            <h1 className="activity-header" textAlign="center" basic color="teal">
              Look Up an Itinerary:
            </h1>
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
          </div>
        </div>
        )
    else
      return(
        <div className="">

          <div className="singleAct-date">
              <div as="h1" className="singleAct-header" textAlign="center" basic color="teal">
                Itinerary Selecter:
              </div>
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

          <div className="">
                    { this.showActivities() }
          </div>
        </div>
      )
  }

}

const mapStateToProps = (state) => {
  const userActivities = state.userActs
  return { userActivities }
}

export default connect(mapStateToProps)(Itinerary);
