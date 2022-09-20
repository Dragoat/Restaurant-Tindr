function Restaurant (props) {

  const handleRemove = (id) =>{
    console.log(id)
    console.log(props.business)
  }

  return (
      <div className="business">
              <h2>{props.business.name}</h2>
              <img src={props.business.image_url} />
              <p>Rating: {props.business.rating}</p>
              <a href = {`https://maps.google.com/?q=${props.business.latitude},${props.business.longitude}`}>View on Google Maps</a>
              <a href={"tel:" + props.business.display_phone}>{props.business.display_phone}</a>
              <p>{props.business.location.display_address[0]} {props.business.location.display_address[1]}</p>
              <p>⭐️{`${props.business.rating} stars`}</p>
              <button>Like</button>
              <button>Dislike</button>
      </div>
    );
  
}

export default Restaurant