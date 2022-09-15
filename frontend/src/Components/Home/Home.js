import React from 'react';
import apiData from '../../api';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import './home.css';
import { Link } from 'react-router-dom';


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
      <div className='Main-body '>
          <SearchBar searchYelp={this.searchData} />
          </div>
        <BusinessList businesses={this.state.businesses} />
        
      </>
    );
  }
}

export default Home;