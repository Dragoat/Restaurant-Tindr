import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './invite.css';
import InviteForm from './InviteForm';
import DateMomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { useSelector } from 'react-redux';

function Invite() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');
  const [isShown, setIsShown] = useState(false);

  const username = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.token.token);
  console.log(token)
  console.log(username);


  useEffect(() => {
    setDateString(moment(selectedDate).format('MMMM Do YYYY')); 
    setTimeString(moment(selectedTime).format('h:mm a'));
  }, [selectedDate, selectedTime]);

  const onSubmit = (e) => {
    e.preventDefault();
    setDateString(moment(selectedDate).format('MMMM Do YYYY'));
    setTimeString(moment(selectedTime).format('h:mm a'));
    // console.log(dateString)
    // console.log(timeString)
    setIsShown(current => !current);
  }

  const changeDate = () => {
    setIsShown(current => !current);
  }
 
  return (
   <div className='invite-pic'>
       
    <div className="date-time">
      {!isShown && ( 
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <h3 className='text'>Select the date and time for your event: </h3>
        <KeyboardDatePicker value={selectedDate} onChange={setSelectedDate} />
        <KeyboardTimePicker value={selectedTime} onChange={setSelectedTime} />
        <button onClick={onSubmit}>Save Date and Time</button>
      </MuiPickersUtilsProvider>
      )}

      <div>
      {isShown && (
            <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <button onClick={changeDate} className='change-date'>Change Event Date</button>
        <h3 >Creating invitation for {dateString} at {timeString}</h3>

        <InviteForm username={username} token={token} dateString={dateString} timeString={timeString} />
        </MuiPickersUtilsProvider>
      )}
      </div>
    </div>
    </div>
  )
}

export default Invite;