import React from 'react';
import Business from '../Business/Business';
import './businesslist.css'

class BusinessList extends React.Component {
  render() {
    return (
      <div className='list'>
        <div className='business'>
        {
          (this.props.businesses && this.props.businesses.slice(0, 50).map(business => {
            return (
            <Business business={business} key={business.id} /> 
          )}))
        }
        </div>
      </div>
    );
  }
}

export default BusinessList