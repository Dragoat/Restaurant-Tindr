import './FinalRestaurant.css'

function FinalRestaurant (props) {
  //individual restaurant card data for the finalist restaurant list
  return (
    <>
    <div>
    </div>
      <div className="business">
              <h2>{props.business.name}</h2>
              <img className="image" src={props.business.image_url} alt={props.business.name} />
              <a href={"tel:" + props.business.display_phone}>{props.business.display_phone}</a>
              <p>{props.business.location.display_address[0]} {props.business.location.display_address[1]}</p>
              <p>⭐️{`${props.business.rating} stars`}</p>
      </div>
    </>
    )
  }

export default FinalRestaurant