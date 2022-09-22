import './Finalist.css'
import axios from "axios"
import { React, useEffect, useState } from "react"

function Finalists(props) {

    const [votedNoIDs, setVotedNoIDs] = useState([])
    const [finalist, setFinalist] = useState([])

    const token = props.token
    const inviteId = props.inviteId
    const foodSearch = props.foodSearch
    const locationSearch = props.locationSearch




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
        // setVotedNoIDs(response.data)
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

    })
    






    }

    // }, [])

    return ( 
        <div>
        <button className='temp-btn' onClick={temporaryButton}>Temporary Button</button>
        <h1>finalists</h1>
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        </div>
     );
}

export default Finalists