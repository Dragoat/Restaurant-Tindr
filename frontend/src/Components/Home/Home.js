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
      <div className="App">
        <div className='button'>
        <Link to='/invite'>
        <button>Create an invitation</button>
        </Link>
        </div>
        <SearchBar searchYelp={this.searchData} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default Home;