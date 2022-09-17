import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import SearchBar from '../SearchBar/SearchBar';
import fire from '../Main/fire.svg';
import header from './header.css'
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
                   
            <Navbar collapseOnSelect fixed='static-top' expand='sm' bg='dark' variant='dark'className='Container-class'>
                
                <Container className='Container'>  
                <img src={fire} alt="fire" className = "fire"/>
                <h4 className = "tinder">Restaurant Tinder</h4>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/login'>Home</Nav.Link>
                            <Nav></Nav>
                            <Nav.Link href='/login'>Login</Nav.Link>
                            <Nav.Link href='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                 
        )
    }
}

export default Header;