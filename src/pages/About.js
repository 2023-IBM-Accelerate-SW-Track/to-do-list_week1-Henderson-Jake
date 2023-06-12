import React, { Component } from 'react';
import "./About.css";
import jake_img from '../assets/jake_img.jpg';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div className="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {jake_img}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Jake Henderson</div>
        <div className="brief_description">
          <body>
            <p>Hello! My name is Jake Henderson, I'm pursuing a Bachelor's Degree in Computer Science at the University of Texas at San Antonio! When I'm not tinkering on something 
              tech related, you can find me training Muay Thai, reading, cooking, or spending time with friends and family!
            </p>
          </body>
        </div>
      </div>
    </div>
  </div> 
      </div>
    )
  }
}