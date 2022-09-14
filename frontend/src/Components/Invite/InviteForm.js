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
    console.log(this.state);
    //save to back end 
    const inviteData = {
        senderId: '',
        foodSearch: this.state.term,
        locationSearch: this.state.location,
    
        appointment: this.props.dateString + " " + this.props.timeString,
    }


    // items: this.state.items,
        // dateString: this.props.dateString,
    
    axios.post(`http://localhost:8081/invites`, { inviteData }, {




        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(inviteData)
        
    })
    .then(response => {
      console.log(response);
    })


    // if( inviteData.inviteId != undefined ) {
    //     // update
    //     axios.put('http://localhost:8081/invites' + inviteData.inviteId, {
    //        cache: 'no-cache',
    //        headers: {
    //            'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify(inviteData)
    //    })
    //     .then((response) => {
    //         if( response.ok ) {
    //            alert('ok!');
    //        }
    //    })
    //    .catch((err) => {
    //        console.error(err);
    //        alert('not ok');
    //    });
    // } else {

    // axios.post("http://localhost:8081/invites", {inviteData}, {
    //     headers: { "Content-Type": "application/json", 
    //     // "Access-Control-Allow-Origin": "*",
    //     // 'cache-control': 'no-cache',
    //     // "Authorization": "Bearer" + localStorage.getItem("token") 
        

    // },
    //     body: JSON.stringify(inviteData)
    // }).then((res) =>{
    //     // console.log(res)
    //     console.log("new invite created");
    // })

    
    













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

        <div classname='email'>
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


            <div>{this.state.term}</div>
            <div>{this.state.location}</div>
            <div>{this.state.items}</div>
            <div>{this.props.dateString}</div>
            <div>{this.props.timeString}</div>
        </div>
  
        );
    }
    }
    export default InviteForm;
      

