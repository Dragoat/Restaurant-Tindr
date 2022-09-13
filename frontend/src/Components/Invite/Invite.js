import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DateMomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
 KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';



function Invite() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');
  // console.log(moment())
  // // console.log(selectedDate)
  // console.log(moment(selectedDate).format('MMMM Do YYYY'))
  // console.log(moment(selectedTime).format('h:mm a'))

  useEffect(() => {
    setDateString(moment(selectedDate).format('MMMM Do YYYY')); 
    setTimeString(moment(selectedTime).format('h:mm a'));

  }, [selectedDate, selectedTime]);

  const onSubmit = (e) => {
    e.preventDefault();
    setDateString(moment(selectedDate).format('MMMM Do YYYY'));
    setTimeString(moment(selectedTime).format('h:mm a'));

    console.log(dateString)
    console.log(timeString)
  }

 
  return (
    <div>
    <h1>Select time and date for event</h1>
    <div className="date-time">
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <KeyboardDatePicker value={selectedDate} onChange={setSelectedDate} />
        <KeyboardTimePicker value={selectedTime} onChange={setSelectedTime} />
      </MuiPickersUtilsProvider>
    </div>

    <div>
    <button onClick={onSubmit}>Save Date and Time</button>
    </div>

    <div>
    <Link to={{pathname: "/inviteform"}}>
        <button>Continue</button>
    </Link>
    </div>





    </div>

  


  )
}

export default Invite;