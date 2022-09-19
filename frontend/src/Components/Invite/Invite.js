import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './invite.css';
import InviteForm from './InviteForm';
import timeAndDate from './timeAndDate.svg';
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

  const username = useSelector((state) => state.user);
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
       < div className='Change'> 
     
    <div className="date-time">
      {!isShown && ( 
            <MuiPickersUtilsProvider utils={DateMomentUtils}>
            <img src={timeAndDate} alt="timeAndDate" className="timeAndDate-img" />
        <h3 className='text'>Select the date and time for your event: </h3>
        <KeyboardDatePicker value={selectedDate} onChange={setSelectedDate} />
        <KeyboardTimePicker value={selectedTime} onChange={setSelectedTime} />
              <button onClick={onSubmit} className='save-date'>Save Date and Time</button>
              <p className='pro-tip'>Pro tip: invite your friend even if you know they can't go,
                it's nice to know you were at least thought of instead of not getting an invite at all❤️</p>
               <div>
            <Link to='/home'>
            <button className='return-home'>return home</button>
            </Link>
            </div>
              
      </MuiPickersUtilsProvider>
        )}
    
      {/* <div className=''> */}
      {isShown && (
        <MuiPickersUtilsProvider utils={DateMomentUtils}>
     <img src={timeAndDate} alt="timeAndDate" className="timeAndDate-img" />
              <h3 className='creating-invite'>Creating invitation for {dateString} at {timeString}</h3>
                 <button onClick={changeDate} className='change'>Change Event Date</button>
        <InviteForm username={username} token={token} dateString={dateString} timeString={timeString} />
          </MuiPickersUtilsProvider>
          
        )}
         </div>
       </div>
    </div>
   
  )
}

export default Invite;