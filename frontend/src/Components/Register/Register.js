import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Alert, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
            globalMessage: '',
            userAlreadyExit: false
       }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
//        console.log("Current State is:" + JSON.stringify(this.state));
//        alert("Current State is:" + JSON.stringify(this.state));
        const postData ={
            email: this.state.email,
            password: this.state.password,
            username: this.state.email,
            lastName: 'lastName',
            firstName: 'firstName',
            confirmPassword:  this.state.confirmpassword,
            role: 'ROLE_USER'
        }
        //POST request
        fetch('http://localhost:8081/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })

        .then((response) => {
            if(response.status == 200){
                 this.setState({
                 globalMessage:'User is created',
                 userAlreadyExit: false
                 });
            } else if(response.status == 500){
               this.setState({
                   globalMessage: 'Username/email already exists',
                   userAlreadyExit: true
                   });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                this.setState({globalError:'Error found in saving'});
            });
            event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    CheckSymbols(str) {
    const specialSymbols = /[`!@#$%^&]/;
    return specialSymbols.test(str);
    }
    validate(email, password, confirmpassword) {
        const errors = {
            email: '',
            password: '',
            confirmpassword: ''
        };
          if (this.state.email && email.split('').filter(x => x === '@').length !== 1)
          errors.email = 'Email should contain a @';
        if (this.state.password && password.length < 8)
            errors.password = 'Password should be more than 8 characters';
        else if (this.state.password && password.search(/[A-Z]/) < 0)
            errors.password = 'Password needs at least one uppercase letter';
             else if (this.state.password && password.search(/[a-z]/) < 0)
                        errors.password = 'Password needs at least one lowercase letter';
        else if (this.state.password && !this.CheckSymbols(password))
        errors.password = 'Password should contain at least one of the following !@#$%';
        if(this.state.confirmpassword && confirmpassword !== password)
            errors.confirmpassword = 'Password does not match';
        return errors;
    }
    render() {
        const errors = this.validate(this.state.email, this.state.password, this.state.confirmpassword);
        return (
            <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <h2>Create Account</h2>
                  {!this.state.userAlreadyExit && this.state.globalMessage && this.state.globalMessage.length > 0 &&<Alert color="primary">{this.state.globalMessage}</Alert>}
                  {this.state.userAlreadyExit &&  this.state.globalMessage && this.state.globalMessage.length > 0 &&<Alert color="danger">{this.state.globalMessage}</Alert>}
                <FormGroup>
                    <Input type="email" id="email" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        valid={errors.email === ''}
                        invalid={errors.email !== ''}
                        onBlur={this.handleBlur('email')}
                        onChange={this.handleInputChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="password" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        valid={errors.password === ''}
                        invalid={errors.password !== ''}
                        onBlur={this.handleBlur('password')}
                        onChange={this.handleInputChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="confirmpassword" name="confirmpassword"
                        placeholder="Confirm password"
                        value={this.state.confirmpassword}
                        valid={errors.confirmpassword === ''}
                        invalid={errors.confirmpassword !== ''}
                        onBlur={this.handleBlur('confirmpassword')}
                        onChange={this.handleInputChange} />
                    <FormFeedback>{errors.confirmpassword}</FormFeedback>
                </FormGroup>
                  <Link to="/login">Have an account?</Link>
                                <button type="submit" onClick={this.handleSubmit}>Sign in</button>

            </Form>
            </div>
        );
    }
}
export default Register;