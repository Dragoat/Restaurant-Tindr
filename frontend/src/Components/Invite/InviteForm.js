import React from 'react';
import './inviteform.css';
import axios from 'axios';


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
            error: null
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onSave = this.onSave.bind(this);

    
      }

      
/********************************************** email ****************************************************************/
    handleKeyDown = evt => {
        if (["Enter", "Tab", ","].includes(evt.key)) {
        evt.preventDefault();
    
        let value = this.state.value.trim();
    
        if (value && this.isValid(value)) {
            this.setState({
            items: [...this.state.items, this.state.value],
            value: ""
            });
        }
        }
    };
    
    handleEmailChange = evt => {
        this.setState({
        value: evt.target.value,
        error: null,
        appointment: this.props.dateString + " " + this.props.timeString,
        });
        // console.log(this.state)
    };
    
    handleDelete = item => {
        this.setState({
        items: this.state.items.filter(i => i !== item)
        });
    };
    
    isValid(email) {
        let error = null;
        if (this.isInList(email)) {
        error = `${email} has already been added.`;
        }
        if (!this.isEmail(email)) {
        error = `${email} is not a valid email address.`;
        }
        if (error) {
        this.setState({ error });
        return false;
        }
        return true;
    }
    
    isInList(email) {
        return this.state.items.includes(email);
    }
    
    isEmail(email) {
        return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
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

/************************************************ save *****************************************************************/


   onSave = e => {
    e.preventDefault();
    // console.log(this.state);
    //save to back end 

    const token = this.props.token

    const inviteData = {
        senderId: this.props.username,
        appointment: this.props.dateString + " " + this.props.timeString,
        locationSearch: this.state.location + "",
        foodSearch: this.state.term + ""
    }
    console.log(inviteData)
    axios.post(`http://localhost:8081/invites`, inviteData, {
        headers: {
            'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + token
        }})
     
        .then(() => {
        console.log('invite created');
        })
        .catch(err => {
        console.log(err);
        });
    }

/**************************************************** render ***************************************************************/

    render() {
        return (
        <div>
        <div className='enter-location'>
        <h3 className='search'>Enter search criteria to create invitation results</h3>
        <input placeholder="type of food" onChange={this.handleTermChange} />
        <input placeholder="location" onChange={this.handleLocationChange}/>
        </div>

        <div className='email'>
        <div className='emails'>
        <h4>Add emails to send invitations - Press Enter to add multiple</h4>
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
            </div>

            <button onClick={this.onSave}>Save</button>
        </div>
  
        );
    }
    }
    export default InviteForm;
      

