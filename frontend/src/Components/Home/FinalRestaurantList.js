import React from 'react'
import FinalRestaurant from './FinalRestaurant'

class FinalRestaurantList extends React.Component {
  //renders the list of businesses for the finalist restaurant list 
  render() {
    return (
      <div>
        <div>
        {
          (this.props.restaurants && this.props.restaurants.slice(0, 5).map(business => {
            return (
            <FinalRestaurant inviteId={this.props.inviteId} token={this.props.token} businesses={this.props.restaurants} business={business} key={business.id} /> 
            )}))
        }
        </div>
      </div>
    )
  }
}

export default FinalRestaurantList