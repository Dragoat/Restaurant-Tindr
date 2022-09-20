import react, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BusinessList from '../BusinessList/BusinessList';

function InviteData(props) {

    const [inviteData, setInviteData] = useState([]);
    const [inviteDetails, setInviteDetails] = useState({foodSearch: '', location: ''});   
    const [businessList, setBusinessList] = useState({businesses: []});

    const location = useLocation();
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
        console.log(response.data)
        setInviteData(response.data)
        setInviteDetails({foodSearch: response.data.foodSearch, location: response.data.location})
    })
    .then(() => {
        axios.get('http://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + 'taco' + '&location=' + 'ohio', { 
            headers: {
                'Authorization': 'Bearer NFObK7SDG3Ydps6H3FWcww0uarQlzVqnY_osBgmG4wg-9K2v7bVsu5fachNVIxtuxL6Eknh0Su4EnukxiVVGlxaSF_U0a444-gqV0vnTjvs7w4C-1rYr68jKgn8OY3Yx'
                }
                })
                .then(response => {
                    console.log(response.data)
                    setBusinessList(response.data)
                })
    //             .then(() => {
                    
    //                     return businessList.map(business => ({
    //                         id: business.id,
    //                         imageSrc: business.image_url,
    //                         name: business.name,
    //                         isClosed: business.is_closed, 
    //                         address: business.location.address1,
    //                         city: business.location.city,
    //                         state: business.location.state,
    //                         zipCode: business.location.zip_code,
    //                         transactions: business.transactions, 
    //                         latitude: business.coordinates.latitude,
    //                         longitude: business.coordinates.longitude,
    //                         category: business.categories[0].title,
    //                         rating: business.rating,
    //                         displayPhone: business.display_phone,
    //                         reviewCount: business.review_count
    //                     }));
    //                 }
    //             )     
    })
}, [])





    return ( 
        <>
        <div>invite data</div>
        <div>Invite ID: {inviteData.inviteId}</div>
        <div>Sender ID: {inviteData.senderId}</div>
        <div>Appointment: {inviteData.appointment}</div>
        <div>Location Search: {inviteData.locationSearch}</div>
        <div>Food Search: {inviteData.foodSearch}</div>


        <BusinessList businesses={businessList.businesses}/>
        </>
     );
}

export default InviteData;