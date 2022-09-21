import React from 'react';
import apiData from '../../api';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import fire from '../Main/fire.svg';
import './home.css';
import Invitations from './Invitations';
import AppimageSilder from '../Business/AppimageSilder';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchData = this.searchData.bind(this);
  }

  searchData(term, location) {
    apiData.search(term, location).then(businesses => {
      this.setState({businesses: businesses});

    });
  }

  
  render() {
    return (
      <>
       <div className='Tinderlicious'>
          <h1 ><img src={fire} alt="fire" className = "fire-home"/> Restaurant Tinder</h1>
          <p>Pick the coolest and fun places in your city, with ideal settings based on your love for food.</p>
         <AppimageSilder/>
        </div>
        <Invitations />
          <SearchBar searchYelp={this.searchData} />
        <BusinessList businesses={this.state.businesses} />
      </>
    );
  }
}

export default Home;
