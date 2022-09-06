import React from 'react';
import apiData from '../../api';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';

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
        <h1>🦖</h1>
        <SearchBar searchYelp={this.searchData} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default Home;