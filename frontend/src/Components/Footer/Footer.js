import React, { Component } from 'react';
import footer from './footer.css'

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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
          <li>
            <a href="#">Something</a>
          </li>
          <li>
            <a href="#">
             Something
            </a>
          </li>
          <li>
            <a href="#">
              Something
            </a>
          </li>
          <li>
            <a href="#">
              Something
            </a>
          </li>
          <li>
            <a href="#">Something</a>
          </li>
          <li>
            <a href="#">Something</a>
          </li>
        </ul>
      </div>
      <div className="col-xs-6 col-md-3">
        <h6>Quick Links</h6>
        <ul className="footer-links">
          <li>
            <a href="#">About Us</a>
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