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
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(new Date())
  const [dateString, setDateString] = useState('')
  const [timeString, setTimeString] = useState('')
  const [isShown, setIsShown] = useState(false)

  const userId = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.token.token);
  console.log(token)
  console.log(userId)

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
   
    <div className='invite-pic'style={{
           backgroundImage: `url("https://images.unsplash.com/photo-1627618999952-6d9ea355d679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`
          }}>

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
        <InviteForm username={userId} token={token} dateString={dateString} timeString={timeString} />
          </MuiPickersUtilsProvider>
          
        )}
         </div>
       </div>
    </div>
   
  )
}

export default Invite;