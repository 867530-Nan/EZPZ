import React from 'react';
import { Header, Divider, Accordion, Icon, Segment, Modal, Button } from 'semantic-ui-react'
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

  selectedDay = () => {
    return (
      <div>
        {this.state.visible[0].date}
      </div>      
    )      
  }

  showActivities = () => {
    return this.state.visible.map( (activity, i) =>
      <Accordion className='activityList' key={activity.id}>
          <Accordion.Title as='h2'>
            <Icon name='dropdown' />
            Activity {i+1}: {activity.name} - {activity.time}
          </Accordion.Title>
            <Accordion.Content className="dropAccord">
              <div className="itinInfo">
              Suitable for Ages: {activity.age}
              </div>
              <div className="itinInfo">
              This event cost: ${activity.cost}
              </div>
              <div className="itinInfo">
              Located at: {activity.address}
              </div>
              <div className="itinInfo">
              {activity.description}
              </div>
              <div className="itinInfo">
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

    if (this.state.visible.length <= 1)
      return(
        <div className="itineraryDate">
          <div className="itinDateSelect">
            <Header as='h1' className="activity-header" textAlign="center" color="teal">
              Look Up an Itinerary:
            </Header>
            <div className="calendar">
              <DayPickerInput
                value={formattedDay}
                onDayChange={this.handleDayChange}
                format={DAY_FORMAT}
                placeholder="Select Date..."
                dayPickerProps={dayPickerProps}
                className = "day-picker"
              />
            </div>
            <Header as='h1' className="noItinActs">
              You do not have any activities planned for this day!
            </Header>
          </div>
        </div>
        ) 
    else
      return(
          <div className="itineraryAct">
            <Header as="h1" className="singleAct-Header" textAlign="center" basic color="teal">
              Itinerary Selector:
            </Header>
              <Modal trigger={<Button color='teal'>Show Calendar</Button>}>
                <Modal.Header>Select Itinerary Date</Modal.Header>
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

            <Divider />
              <div>
                <Segment className="selectDay" basic as="h1" size='large' textAlign='center'>
                    Itinerary for: &nbsp;{this.selectedDay()}
                </Segment>
              </div>
              <Header as='h3'>
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
