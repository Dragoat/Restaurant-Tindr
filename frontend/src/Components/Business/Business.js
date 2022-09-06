import React from 'react';
import PhoneNumber from 'react-phone-number' //says it doesn't exist but it does


class Business extends React.Component {
render() {
    return (
      <div className="Restaurant">
        <img src={this.props.business.imageSrc} alt=''/>
        <h2>{this.props.business.name}</h2>
        <p>{this.props.business.transactions}</p>
        <p>{this.props.business.isClosed}</p>
        <p>{this.props.business.address} {this.props.business.city} {`${this.props.business.state} ${this.props.business.zipCode}`}</p>
        <PhoneNumber number={this.props.business.displayPhone} isLinked={true}/>
        <p>type: {this.props.business.category}</p>
        <p>{`${this.props.business.rating} stars`}</p>
        <p>{`${this.props.business.reviewCount} reviews`}</p>
      </div>
    );
  }
}

export default Business;