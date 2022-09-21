import React from 'react'
import Restaurant from './Restaurant'

class RestaurantList extends React.Component {

  render() {
    return (
      <div>
        <div>
        {
          (this.props.restaurants && this.props.restaurants.slice(0, 10).map(business => {
            return (
            <Restaurant inviteId={this.props.inviteId} token={this.props.token} businesses={this.props.restaurants} business={business} key={business.id} /> 
            )}))
        }
        </div>
      </div>
    )
  }
}

export default RestaurantList