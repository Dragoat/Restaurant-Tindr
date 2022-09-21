import axios from "axios"
import { func } from "prop-types"
import { React, useState } from "react"

function Restaurant (props) {

  const noVoteData = {
    inviteId: props.inviteId,
    placeId: props.business.id
  }

  const sendToNoVote = () => {
    axios.post('http://localhost:8081/invite_location', noVoteData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + props.token
      }
    })
    .then(() => {
      console.log('no vote sent')
    })
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
              <button onClick={sendToNoVote}>Dislike</button>
      </div>
    )
}

export default Restaurant