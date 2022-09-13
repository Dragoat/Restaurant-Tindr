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


       

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

      }

/**********************************************email****************************************************************/
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
/*****************************************term/location input *************************************************************/


  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }





/************************************************on submit*****************************************************************/


  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

/****************************************************render********************************************************************/
    render() {
        return (
        <form onSubmit={this.onSubmit}>

        <h1>form continued</h1>

        <div classname='enter-location'>
        <h6>Enter search criteria to create invitation results</h6>
        <input placeholder="type of food" onChange={this.handleTermChange} />
        <input placeholder="location" onChange={this.handleLocationChange}/>
        </div>

        <div classname='email'>
        <h6>Add emails and press Enter:</h6>
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

            <div>
           {/* <TimeDate /> */}
            </div>
           
           <input type="submit" value="Submit" />
           
        </form>
        );
    }
    }
    export default InviteForm;
      

