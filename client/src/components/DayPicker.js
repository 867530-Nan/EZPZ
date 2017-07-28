import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { connect } from 'react-redux';


class DayPicker extends React.Component {
  state = {
    selectedDay: null,
  };

  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  render() {
    const { selectedDay } = this.state;
    return (
      <div>
        <DayPicker
          selectedDays={selectedDay}
          onDayClick={this.handleDayClick}
        />
        <p>
          {selectedDay
            ? selectedDay.toLocaleDateString()
            : 'Please select a day 👻'}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { selectedDay: state.selectedDay }
}

export default connect(mapStateToProps)(DayPicker);