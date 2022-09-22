import React, { Component } from 'react';
import footer from './footer.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Switch, Route, Redirect, Link} from 'react-router-dom'

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
           <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-6">
        <h6>About</h6>
        <p className="text-justify">
                               This App helps people make a decision which restaurant they should visit based upon their preference.
        </p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li>
            <a href="#">Fine Dining </a>
          </li>
          <li>
            <a href="#">
              Casual dining restaurants
            </a>
          </li>
          <li>
            <a href="#">
              Cafés
            </a>
          </li>
          <li>
            <a href="#">
              Pizzerias
            </a>
          </li>
          <li>
            <a href="#">Fast food restaurants</a>
          </li>
          <li>
            <a href="#">Family Style Restaurant</a>
          </li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
                    <li>
                      
            <Nav.Link as={Link} to='/AboutUs' onClick={this.handleLogout} className="footer-links a">AboutUs</Nav.Link>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">
              Contribute
            </a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-sm-6 col-xs-12">
        <p className="copyright-text">
          Copyright © 2022 All Rights Reserved by 
          Restaurant Tinder.
        </p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <ul className="social-icons">
          <li>
            <a className="facebook" href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a className="twitter" href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a className="dribbble" href="#">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a className="linkedin" href="#">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        )
    }
}

export default Footer;