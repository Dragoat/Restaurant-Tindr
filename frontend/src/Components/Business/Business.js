import React from 'react';
import PhoneNumber from 'react-phone-number' 
import './business.css'

class Business extends React.Component {

render() {
    return (
      <div className="business">
        <img src={this.props.business.imageSrc} alt='' className='business-image'/>
        <h2>{this.props.business.name}</h2>
        <p>{this.props.business.id}</p>
        <button >
        <a href='/business/info' >Click for more information</a>
        </button>
        <p>{this.props.business.transactions[0]} {this.props.business.transactions[1]} {this.props.business.transactions[2]}</p>
        <p>{this.props.business.isClosed}</p>
        <a href = {`https://maps.google.com/?q=${this.props.business.latitude},${this.props.business.longitude}`}>View on Google Maps</a>
        <p>{this.props.business.address} {this.props.business.city} {this.props.business.state} {this.props.business.zipCode}</p>
        {/* <PhoneNumber number={this.props.business.displayPhone} isLinked={true}/> */}
        <a href={"tel:" + this.props.business.displayPhone}>{this.props.business.displayPhone}</a>
        <p>type: {this.props.business.category}</p>
        <p>{`${this.props.business.rating} stars`}{`${this.props.business.reviewCount} reviews`}</p>
      </div>
    );
  }
}

export default Business;