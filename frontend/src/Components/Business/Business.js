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

  const handleClick = async() => {
    setShowComponent(true);
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${props.business.id}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`
    }
    }).then(res => {
    console.log(res.data)
    setMondayStart(changeTime(res.data.hours[0].open[0].start))
    setMondayEnd(changeTime(res.data.hours[0].open[0].end))
    })
  }



  function changeTime(startTime) {
    const hours = startTime.slice(0, 2);
    const minutes = startTime.slice(-2);
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
        {showComponent ? <BusinessInfo startTime={mondayStart} closeTime={mondayEnd}/> : null} 
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