import React, { useState } from 'react';
import Invite from './Invite';
import './inviteform.css';



/*************************************************state****************************************************************/
class InviteForm extends React.Component {
    constructor(props) {
        super(props);
    
        //restaurants
        this.state = {
          term: '',
          location: '',
        }
    
        //emails
        this.state = {
            items: [],
            value: "",
            error: null
        };

        // //form 
        // this.state = {
        //     term: '',
        //     location: '',
        //     items: [],
        //     date: '',
        //     time: ''
        // }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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
        error: null
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
    console.log(this.state)
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
    console.log(this.state)
  }

/************************************************ on submit*****************************************************************/


  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // this.props.searchYelp(this.state.term, this.state.location);

  }

/**************************************************** render ***************************************************************/

    render() {
        return (
        <form onSubmit={this.onSubmit}>

        <div classname='enter-location'>
        <h3 className='search'>Enter search criteria to create invitation results </h3>
        <input placeholder="type of food" onChange={this.handleTermChange} />
        <input placeholder="location" onChange={this.handleLocationChange}/>
        </div>

        <div classname='email'>
        <div className='emails'>
        <h3>Add emails and press Enter:</h3>
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

           <input type="submit" value="Submit" className='submit-btn'/>
           
        </form>
        );
    }
    }
    export default InviteForm;
      

