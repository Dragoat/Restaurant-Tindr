import React from 'react';
import Business from '../Business/Business';

class BusinessList extends React.Component {


  render() {
    return (
      <div>
        {
          (this.props.businesses && this.props.businesses.map(business => {
            return <Business business={business} key={business.id}/> 
          }))
        }
        
      </div>
    );
  }
}

export default BusinessList;