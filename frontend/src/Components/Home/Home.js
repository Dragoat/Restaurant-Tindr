import React from 'react';
import apiData from '../../api';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import fire from '../Main/fire.svg';
import './home.css';
import Invitations from './Invitations';
import { useSelector } from 'react-redux';
  function Home(props) {
  const userId = useSelector((state) => state.user.id);
  const token = useSelector((state) => state.token.token);
  console.log(token)
  console.log(userId);
  const [state, setState] = React.useState({businesses: []});
  function searchData(term, location) {
    apiData.search(term, location).then(businesses => {
      setState({businesses: businesses});
    });
  }
    return (
      <>
        <div className ='Main-body' style={{
           backgroundImage: `url("https://images.unsplash.com/photo-1646032538355-99f04d61a3c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`
          }}>
          <SearchBar searchYelp={searchData} />
        </div>
        <div className='Tinderlicious'>
          <h1 ><img src={fire} alt="fire" className = "fire-home"/> Restaurant Tinder</h1>
          <p>Pick the coolest and fun places in your city, with ideal settings based on your love for food.</p>
        </div>
        <BusinessList businesses={state.businesses} />
        <Invitations token={token} userId={userId}/>
      </>
    );
  }
export default Home;