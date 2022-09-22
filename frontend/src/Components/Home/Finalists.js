import './Finalist.css'
import axios from "axios"
import { React, useEffect, useState } from "react"
import FinalRestaurantList from './FinalRestaurantList'

function Finalists(props) {

    const [votedNoIDs, setVotedNoIDs] = useState([])
    const [businessList, setBusinessList] = useState({businesses: []})

    const token = props.token
    const inviteId = props.inviteId
    const foodSearch = props.foodSearch
    const locationSearch = props.locationSearch

//gonna need later
// useEffect(() => { 
    const temporaryButton = () => {
    
    //pulls ID's of restaurants that have been voted no
    axios.get('http://localhost:8081/invite_location/invite_id/' + inviteId, {
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    })
    .then(response => {
    //logs ID's of restaurants that have been voted no
        console.log(response.data)
        // const x = response.data
        setVotedNoIDs(response.data)
    })
    //calls yelp api with food and location search
    axios.get(`http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${foodSearch}&location=${locationSearch}`, { 
        headers: {
        'Authorization': 'Bearer NFObK7SDG3Ydps6H3FWcww0uarQlzVqnY_osBgmG4wg-9K2v7bVsu5fachNVIxtuxL6Eknh0Su4EnukxiVVGlxaSF_U0a444-gqV0vnTjvs7w4C-1rYr68jKgn8OY3Yx',
        'Access-Control-Allow-Origin': '*',
        }
    })
    //logs list of all invite restaurants - need to filter out restaurants that have been voted no
    .then(response => {
        console.log(response.data)
        setBusinessList(response.data)
    })


    }

    // }, [])
    //for useEffect block



    return ( 
        <div>
        <button className='temp-btn' onClick={temporaryButton}>temporary button to display the restaurants</button>
        <h1>✨Finalists✨</h1>
        <FinalRestaurantList inviteId={inviteId} token={token} restaurants={businessList.businesses}/>
        </div>
     );
}

export default Finalists