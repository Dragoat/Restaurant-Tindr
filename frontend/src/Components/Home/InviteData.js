import { React, useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import RestaurantList from './RestaurantList'
import ShowFinalists from './ShowFinalists'
import './InviteData.css'

function InviteData(props) {

    //Invitation information page -- shows both invite restaurant list and finalist list from different buttons 🥲

    const [inviteData, setInviteData] = useState({})
    const [businessList, setBusinessList] = useState({businesses: []})
    const location = useLocation()
    const inviteId = location.state.inviteId
    const token = location.state.token

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
                'Authorization': 'Bearer NFObK7SDG3Ydps6H3FWcww0uarQlzVqnY_osBgmG4wg-9K2v7bVsu5fachNVIxtuxL6Eknh0Su4EnukxiVVGlxaSF_U0a444-gqV0vnTjvs7w4C-1rYr68jKgn8OY3Yx',
                'Access-Control-Allow-Origin': '*',
                }
                })
                .then(response => {
                    console.log(response.data)
                    setBusinessList(response.data)
                })
            }

    return ( 
        <>

        {/* invite information at the top of the invitation page */}
        <div>Invite Information:
        <p>Invite ID: {inviteData.inviteId} Sender ID: {inviteData.senderId} Appointment: {inviteData.appointment} </p>
        <p>Food Search: {inviteData.foodSearch} Location Search: {inviteData.locationSearch}</p>
        </div>
        <button onClick={viewList}>View and Submit Restaurant Options for Your Event</button>

        {/* this is the list for the invitation list of restaurants */}
        <RestaurantList inviteId={inviteId} token={token} restaurants={businessList.businesses}/>


        {/* this is the list for the finalist list of restaurants*/}
        <div className='finalist-restaurants'>
        <ShowFinalists token={token} inviteId={inviteId} foodSearch={inviteData.foodSearch} locationSearch={inviteData.locationSearch}/>
        </div>

        </>
     )
}

export default InviteData