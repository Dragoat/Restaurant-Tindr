import React from 'react';
import './business.css'
import BusinessInfo from '../BusinessInfo/BusinessInfo';


class Business extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
  }



  handleClick = async() => {
    this.setState({
      showComponent: true,
    });


    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${this.props.business.id}`, {
      headers: {
          Authorization: `Bearer NFObK7SDG3Ydps6H3FWcww0uarQlzVqnY_osBgmG4wg-9K2v7bVsu5fachNVIxtuxL6Eknh0Su4EnukxiVVGlxaSF_U0a444-gqV0vnTjvs7w4C-1rYr68jKgn8OY3Yx`
      }
    });
    const jsonRes = await res.json();
    console.log(jsonRes);
  
  }


render() {
    return (
      <div className="business">
        <img src={this.props.business.imageSrc} alt='' className='business-image'/>
        <h2>{this.props.business.name}</h2>
        <p>{this.props.business.id}</p>
        <button onClick={this.handleClick}>View More Details</button>
        {this.state.showComponent ? <BusinessInfo id={this.props.business.id}/> : null }
        <p>{this.props.business.transactions[0]} {this.props.business.transactions[1]} {this.props.business.transactions[2]}</p>
        <p>{this.props.business.isClosed}</p>
        <a href = {`https://maps.google.com/?q=${this.props.business.latitude},${this.props.business.longitude}`}>View on Google Maps</a>
        <p>{this.props.business.address} {this.props.business.city} {this.props.business.state} {this.props.business.zipCode}</p>
        <a href={"tel:" + this.props.business.displayPhone}>{this.props.business.displayPhone}</a>
        <p>type: {this.props.business.category}</p>
        <p>{`${this.props.business.rating} stars`}{`${this.props.business.reviewCount} reviews`}</p>
      </div>
    );
  }
}

export default Business;