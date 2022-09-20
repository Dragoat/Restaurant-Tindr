import { React, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import RestaurantList from './RestaurantList';
function InviteData(props) {

    const [inviteData, setInviteData] = useState({});
    const [businessList, setBusinessList] = useState({businesses: []});
    const location = useLocation()
    const inviteId = location.state.inviteId
    const token = location.state.token
    console.log(token)
    console.log(inviteId)

useEffect(() => {
    axios.get('http://localhost:8081/invites/' + inviteId, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    .then(response => {
        setInviteData(response.data)
        })
    }, [])

    const viewList = () => {
        axios.get(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${inviteData.foodSearch}&location=${inviteData.locationSearch}`, { 
            headers: {
                'Authorization': 'Bearer NFObK7SDG3Ydps6H3FWcww0uarQlzVqnY_osBgmG4wg-9K2v7bVsu5fachNVIxtuxL6Eknh0Su4EnukxiVVGlxaSF_U0a444-gqV0vnTjvs7w4C-1rYr68jKgn8OY3Yx'
                }
                })
                .then(response => {
                    console.log(response.data)
                    setBusinessList(response.data)
                    console.log(businessList.businesses.id)
                }) 
            }

    return ( 
        <>
        <div>invite data</div>
        <div>Invite ID: {inviteData.inviteId}</div>
        <div>Sender ID: {inviteData.senderId}</div>
        <div>Appointment: {inviteData.appointment}</div>
        <div>Location Search: {inviteData.locationSearch}</div>
        <div>Food Search: {inviteData.foodSearch}</div>
        <button onClick={viewList}>View List</button> 
        <RestaurantList  businesses={businessList.businesses}/>
        </>
     );
}

export default InviteData;