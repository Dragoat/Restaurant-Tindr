import React from 'react';
import Business from '../Business/Business';

class RestaurantList extends React.Component {


  render() {
    return (
      <div className='list'>
      <div className='business'>
        {
          (this.props.businesses && this.props.businesses.map(business => {
            return (
            <Business business={business} key={business.id} /> 
          )}))
          
        }
      </div>
      </div>
    );
  }
}

export default RestaurantList;