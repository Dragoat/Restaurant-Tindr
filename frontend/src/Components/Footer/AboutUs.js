import React, { Component} from "react";
import { Link, Redirect, Switch, Router, Route} from 'react-router-dom'

import { Navbar, NavbarBrand } from "reactstrap";


const AboutUs = () => {
    return(
        <body>
        <div class="aboutus">
          <h1>About Us</h1>
          <li>The Final Capstone </li>
          <li>Project Name: Restaurant Tinder</li>
          <li>Team Members: Kelsey Beck, Paige Hall,Rhiannon Malloy,Lucas J Lombardi and Mohammed Al Kubati .</li>
        </div>
        

        <h1 className="" style={{ color: "#0b53b1"}}>Connect to know more: </h1>
    
    
        <div class="row">
          <div class="column">
            <div class="card">

          
              <div class="container">
                <h2>Kelsey Beck</h2>
                <p>
                  <a class="button"
                    href="https://www.linkedin.com/in/kelsey-beck/"
                   >linkedin</a>
                </p>
              </div>
            </div>
          </div>
    
          <div class="column">
            <div class="card">
            
              <div class="container">
                <h2>Paige Hall</h2>
                <p>
                  <a
                    class="button"
                    href="https://www.linkedin.com/in/paige-a-hall/"
                   
                    >linkedin</a>
                  
                </p>
              </div>
            </div>
          </div>
    
          <div class="column">
            <div class="card">
              <div class="container">
                <h2>Rhiannon Malloy</h2>
                <p>
                  <a
                    class="button"
                    href="https://www.linkedin.com/in/rhiannon-malloy/"
                    
                    >linkedin</a>
                
                </p>
              </div>
            </div>
                </div>
                <div class="column">
            <div class="card">
              <div class="container">
                <h2>Lucas J Lombardi</h2>
                <p>
                  <a
                    class="button"
                    href="https://www.linkedin.com/in/lucas-j-lombardi/"
                    
                    >linkedin</a>
                
                </p>
              </div>
            </div>
                </div>
                   <div class="column">
            <div class="card">
              <div class="container">
                <h2>Mohammed Al Kubati</h2>
               
    
                <p>
                  <a
                    class="button"
                    href="https://www.linkedin.com/in/mohammed-al-kubati/"
                    
                    >linkedin</a>
                
                </p>
              </div>
            </div>
                </div>
    
    
        <div className="createdby">
            <div className="col-auto">
                </div>
                </div>           
        </div>
      </body>
    
    
    );
}

export default AboutUs;