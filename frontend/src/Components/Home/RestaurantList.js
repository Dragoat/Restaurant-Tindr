import React from 'react';
import Restaurant from './Restaurant';

class RestaurantList extends React.Component {
  render() {
    return (
      <div>
        <div>
        {
          (this.props.businesses && this.props.businesses.slice(0, 10).map(business => {
            return (
            <Restaurant businesses={this.props.businesses} business={business} key={business.id} /> 
            )}))
        }
        </div>
      </div>
    );
  }
}

export default RestaurantList