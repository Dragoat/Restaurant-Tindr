import React from 'react';
import './inviteform.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



/*************************************************state****************************************************************/
class InviteForm extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            dateString: '',
            timeString: '',
            term: '',
            location: '',
            items: [],
            value: "",
            inviteId: '',
            recipient: '',
            error: null
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleRecipientChange = this.handleRecipientChange.bind(this);
        this.handleInviteIdChange = this.handleInviteIdChange.bind(this);
        // this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onSave = this.onSave.bind(this);
      }
/***************************************** term/location input *************************************************************/

  handleTermChange(event) {
    this.setState({term: event.target.value});
    // console.log(this.state)
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
    // console.log(this.state)
  }

  handleRecipientChange(event) {
    this.setState({recipient: event.target.value});
    // console.log(this.state)
  }

  handleInviteIdChange(event) {
    this.setState({inviteId: event.target.value});
    console.log(this.state)
  }

/************************************************ save *****************************************************************/


   onSave = e => {
    e.preventDefault();
    const token = this.props.token
    let data= "";
    const inviteData = {
        senderId: this.props.username,
        appointment: this.props.dateString + " " + this.props.timeString,
        locationSearch: this.state.location + "",
        foodSearch: this.state.term + ""
    }
    console.log(inviteData)
    
    axios.post(`http://localhost:8081/invites/`, inviteData, {
        headers: {
            'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + token
        }})
        .then(function (response) {
            console.log(response)

            data = response.data;
            
        })
        .then(() => {
        const inviteListData = {
            inviteId: data,
            recipientId: this.state.recipient + "" 
        }
        console.log(inviteListData)
        axios.post(`http://localhost:8081/invite_list/`, inviteListData, {
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + token
            }})
            .then(() => {
                console.log('invite list entry created');
            })
            .catch(err => {
            console.log(err)
            })
            })
        .catch(err => {
        console.log(err)
        })
    }

/**************************************************** render ***************************************************************/

    render() {
        return (
        <div>
        <div className='enter-location'>
                    <h3 className='search'>Enter search criteria to create invitation results</h3>
                    <br/>
        <input placeholder="type of food" onChange={this.handleTermChange} className='searchbar-b'/>
        <input placeholder="location" onChange={this.handleLocationChange}className='searchbar-b'/>
        <input placeholder="recipient" onChange={this.handleRecipientChange}className='searchbar-b'/>
        </div>

        {/* <div className='email'>
        <div className='emails'>
        <h4 className='add-email-text'>Add emails to send invitations - Press Enter to add multiple</h4>
        </div>
            {this.state.items.map(item => (
            <div className="tag-item" key={item}>
                {item}
                <button
                type="button"
                className="button"
                onClick={() => this.handleDelete(item)}
                >
                &times;
                </button>
            </div>
            ))}

            <input
            className={"input " + (this.state.error && " has-error")}
            value={this.state.value}
            placeholder="Email address"
            onKeyDown={this.handleKeyDown}
            onChange={this.handleEmailChange}
            />
            {this.state.error && <p className="error">{this.state.error}</p>}      
            </div> */}

            <button onClick={this.onSave}className='save'>Save</button>
            <div>
            <Link to='/home'>
            <button className='return-home'>return home</button>
            </Link>
            </div>
        </div>
  
        );
    }
    }
    export default InviteForm;
      

