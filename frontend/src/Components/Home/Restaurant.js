import axios from "axios"
import './Restaurant.css'

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
      console.log('Removed from event')
    })
  }

  return (
      <div className="business">
              <h2>{props.business.name}</h2>
              <img className="image" src={props.business.image_url} alt={props.business.name} />
              <a href={"tel:" + props.business.display_phone}>{props.business.display_phone}</a>
              <p>{props.business.location.display_address[0]} {props.business.location.display_address[1]}</p>
              <p>⭐️{`${props.business.rating} stars`}</p>
              <button className='button' onClick={sendToNoVote}>Remove From Event</button>
      </div>
    )
  }

export default Restaurant