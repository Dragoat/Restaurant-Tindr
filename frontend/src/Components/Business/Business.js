import React from 'react';
import './business.css'
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import axios from 'axios';
import { useState } from 'react';
import API_KEY from '../restaurantData'


function Business (props) {
  const API_KEY = 'NFObK7SDG3Ydps6H3FWcww0uarQlzVqnY_osBgmG4wg-9K2v7bVsu5fachNVIxtuxL6Eknh0Su4EnukxiVVGlxaSF_U0a444-gqV0vnTjvs7w4C-1rYr68jKgn8OY3Yx'
  const [showComponent, setShowComponent] = useState(false);
  const [mondayStart, setMondayStart] = useState('');
  const [mondayEnd, setMondayEnd] = useState('');
  const [tuesdayStart, setTuesDayStart] = useState('');
  const [tuesdayEnd, setTuesdayEnd] = useState('');
  const [wednesdayStart, setWednesdayStart] = useState('');
  const [wesnesdayEnd, setWednesdayEnd] = useState('');
  const [thursdayStart, setThursdayStart] = useState('');
  const [thursdayEnd, setThursdayEnd] = useState('');
  const [fridayStart, setFridayStart] = useState('');
  const [fridayEnd, setFridayEnd] = useState('');
  const [saturdayStart, setSaturdayStart] = useState('');
  const [saturdayEnd, setSaturdayEnd] = useState('');
  const [sundayStart, setSundayStart] = useState('');
  const [sundayEnd, setSundayEnd] = useState('');
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = async() => {
    setShowComponent(true);
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${props.business.id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
    }
    }).then(res => {
    console.log(res.data)
    if(res.data.hours) {
    setIsOpen(res.data.hours[0].is_open_now);
    }
    if(!res.data.hours){
    } else {
      if(res.data.hours[0].open[0]) {
        if(res.data.hours[0].open[0].start === undefined){
          setMondayStart('Closed')
          setMondayEnd('Closed')
        } else { 
        setMondayStart(changeTime(res.data.hours[0].open[0].start))
        setMondayEnd(changeTime(res.data.hours[0].open[0].end))
      }
    } else {
      setMondayStart('N/A')
      setMondayEnd('N/A')
    }

      if(res.data.hours[0].open[1]) {
        if(res.data.hours[0].open[1].start === undefined){
          setTuesDayStart('Closed')
          setTuesdayEnd('Closed')
        } else {
        setTuesDayStart(changeTime(res.data.hours[0].open[1].start))
        setTuesdayEnd(changeTime(res.data.hours[0].open[1].end))
        }
      } else {
        setTuesDayStart('N/A')
        setTuesdayEnd('N/A')
      }

        if(res.data.hours[0].open[2]) {
        if(res.data.hours[0].open[2].start === undefined){
          setWednesdayStart('Closed')
          setWednesdayEnd('Closed')
        } else {
        setWednesdayStart(changeTime(res.data.hours[0].open[2].start))
        setWednesdayEnd(changeTime(res.data.hours[0].open[2].end))
        }
      } else {
        setWednesdayStart('N/A')
        setWednesdayEnd('N/A')
      }

        if(res.data.hours[0].open[3]) {
        if(res.data.hours[0].open[3].start === undefined){
          setThursdayStart('Closed')
          setThursdayEnd('Closed')
        } else {
        setThursdayStart(changeTime(res.data.hours[0].open[3].start))
        setThursdayEnd(changeTime(res.data.hours[0].open[3].end))
        }
      } else {
        setThursdayStart('N/A')
        setThursdayEnd('N/A')
      }

        if(res.data.hours[0].open[4]) {  
        if(res.data.hours[0].open[4].start === undefined){
          setFridayStart('Closed')
          setFridayEnd('Closed')
        } else {
        setFridayStart(changeTime(res.data.hours[0].open[4].start))
        setFridayEnd(changeTime(res.data.hours[0].open[4].end))
        }
      } else {
        setFridayStart('N/A')
        setFridayEnd('N/A')
      }

        if(res.data.hours[0].open[5]) {
        if(res.data.hours[0].open[5] === undefined){
          setSaturdayStart('Closed')
          setSaturdayEnd('Closed')
        } else {
        setSaturdayStart(changeTime(res.data.hours[0].open[5].start))
        setSaturdayEnd(changeTime(res.data.hours[0].open[5].end))
        }
      } else {
        setSaturdayStart('N/A')
        setSaturdayEnd('N/A')
      }

        if(res.data.hours[0].open[6]) {
        if(res.data.hours[0].open[6] === undefined){
          setSundayStart('Closed') 
          setSundayEnd('Closed')
        } else {
        setSundayStart(changeTime(res.data.hours[0].open[6].start))
        setSundayEnd(changeTime(res.data.hours[0].open[6].end))
        }
      } else {
        setSundayStart('N/A')
        setSundayEnd('N/A')
      }
    }
    })
  }

  function changeTime(time) {
    const hours = time.slice(0, 2);
    const minutes = time.slice(-2);
    const AmOrPm = hours >= 12 ? 'pm' : 'am';
    const finalTime = hours % 12 || 12;
    return finalTime + ':' + minutes + AmOrPm;
  }

    return (
      <div className="business">
        <img src={props.business.imageSrc} alt='' className='business-image'/>
        <h2>{props.business.name}</h2>
        <p>{props.business.id}</p>
        <button onClick={handleClick}>View More Details</button>
        {showComponent ? <BusinessInfo monStart={mondayStart} monClose={mondayEnd} 
        tuesStart={tuesdayStart} tuesClose={tuesdayEnd} wedStart={wednesdayStart} wedClose={wesnesdayEnd} 
        thursStart={thursdayStart} thursClose={thursdayEnd} friStart={fridayStart} friClose={fridayEnd} 
        satStart={saturdayStart} satClose={saturdayEnd} sunStart={sundayStart} sunClose={sundayEnd} isOpen={isOpen}/> : null} 
        <p>{props.business.transactions[0]} {props.business.transactions[1]} {props.business.transactions[2]}</p>
        <p>{props.business.isClosed}</p>
        <a href = {`https://maps.google.com/?q=${props.business.latitude},${props.business.longitude}`}>View on Google Maps</a>
        <p>{props.business.address} {props.business.city} {props.business.state} {props.business.zipCode}</p>
        <a href={"tel:" + props.business.displayPhone}>{props.business.displayPhone}</a>
        <p>type: {props.business.category}</p>
        <p>{`${props.business.rating} stars`}</p>
      </div>
    );
  
}

export default Business;