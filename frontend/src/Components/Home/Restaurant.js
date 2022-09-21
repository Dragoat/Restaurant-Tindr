import { React, useState } from "react";

function Restaurant (props) {

  const [inviteBusinessList, setInviteBusinessList] = useState({businesses: [props.businesses]});

  const handleRemove = (id) =>{
    console.log(id)
    console.log(inviteBusinessList)
    const newInviteBusinessList = inviteBusinessList.businesses.filter(business => business.id !== id)
  }

  return (
      <div className="business">
              <h2>{props.business.name}</h2>
              <img src={props.business.image_url} />
              <a href = {`https://maps.google.com/?q=${props.business.latitude},${props.business.longitude}`}>View on Google Maps</a>
              <a href={"tel:" + props.business.display_phone}>{props.business.display_phone}</a>
              <p>{props.business.location.display_address[0]} {props.business.location.display_address[1]}</p>
              <p>⭐️{`${props.business.rating} stars`}</p>
              <button>Like</button>
              <button onClick={() => handleRemove(props.business.id)}>Dislike</button>

              

      </div>
    )
}

export default Restaurant