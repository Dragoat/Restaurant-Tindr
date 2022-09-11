import React from "react";
import "./invite.css";


class Invite extends React.Component {



/*****************************************************************************************************************/
    state = {
        items: [],
        value: "",
        error: null
    };
    
    handleKeyDown = evt => {
        if (["Enter", "Tab", ","].includes(evt.key)) {
        evt.preventDefault();
    
        var value = this.state.value.trim();
    
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
/*-------------------------------------------------------------------------------------------------------------------------*/








    
    render() {
        return (
        <form>

        <h1>Invite</h1>

        <div classname='enter-location'>
        <h6>Enter location to create invitation results</h6>
        <input placeholder="location" />
        </div>

        <div classname='email'>
        <h6>Enter email addresses to send invitation</h6>
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

         
            
        </form>
        );
    }
    }
    export default Invite;
      