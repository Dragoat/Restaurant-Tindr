import axios from "axios"
import { React, useEffect, useState } from "react"

function Restaurant (props) {

  const [restaurantList, setRestaurantList] = useState([])
  const [object, setObject] = useState([])

  const liked = () => {
    const obj = {
      business: props.business.id,
      restaurantName: props.business.name,
      restaurantAddress: props.business.location.address1,
      restaurantPhone: props.business.display_phone,
      restaurantImage: props.business.image_url
    }

    setRestaurantList([...restaurantList, ...obj])

  }

    useEffect(() => {
    console.log(restaurantList)
  }, [restaurantList])

  
  return (
      <div className="business">
              <h2>{props.business.name}</h2>
              <img src={props.business.image_url} />
              <a href = {`https://maps.google.com/?q=${props.business.latitude},${props.business.longitude}`}>View on Google Maps</a>
              <a href={"tel:" + props.business.display_phone}>{props.business.display_phone}</a>
              <p>{props.business.location.display_address[0]} {props.business.location.display_address[1]}</p>
              <p>⭐️{`${props.business.rating} stars`}</p>
              <button onClick={liked}>Add to Finalists List</button>
      </div>
    )
}

export default Restaurant