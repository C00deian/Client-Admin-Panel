import React, { Component } from 'react';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '',
    };
  }

  handleDateChange = (e) => {
    const selectedDate = e.target.value;
    this.setState({ selectedDate });
  };

  formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear().toString().slice(2); // Get last 2 digits of the year
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ensure 2-digit month
    const day = date.getDate().toString().padStart(2, '0'); // Ensure 2-digit day

    return `${day}-${month}-${year}`;
  };

  handleSaveToMongoDB = () => {
    // Format the selected date and set the state with the formatted date
    const formattedDateString = this.formatDate(this.state.selectedDate);
    console.log('Formatted Date (ddmmyy):', formattedDateString);

    // Here, you would save the formattedDateString to MongoDB
    // Replace this with your MongoDB integration code
  };

  render() {
    return (
      <div>
        <label htmlFor="datePicker">Select Date:</label>
        <input
          type="date"
          id="datePicker"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
        />
        <button onClick={this.handleSaveToMongoDB}>Save to MongoDB</button>
      </div>
    );
  }
}

export default DatePicker;
