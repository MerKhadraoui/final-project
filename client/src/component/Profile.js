import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Profile.css";
import ProfilePhoto from "./images/profile-free.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import StorContext from "../context";
import axios from "axios";
import CreateAccount from "./CreateAccount";
import MyProfileForme from "./MyProfileForme";


function Profile() {
  const { avatar, profileData, logoutHandler} = useContext(StorContext);
  console.log(`avatar`, avatar);
  const emailAddress = "cryptospace@gmail.com";
  const [orderStatus, setOrderStatus] = useState("Order a call");
 

  const handleButtonClick = () => {
    setOrderStatus("We call you back");
  }
  return (
    <main className="main">
      <div className="sidebar">
        <div className="link-list">
          <h4> Support:</h4>

          <p className="info-support one">
            <FontAwesomeIcon icon={faPhone}/>
            <p className="fa-phone-call"> 0151 555 77 00</p>
          </p>


          <p className="info-support two">
      <FontAwesomeIcon icon={faPhoneAlt} /> 
      <button
        type="button"  
        className="fa-phone-callback"
        onClick={handleButtonClick} 
      >
        {orderStatus}
      </button>
    </p>

          <a className="info-support three" href={`mailto:${emailAddress}`}>
            <FontAwesomeIcon icon={faEnvelope} /> 
            <p className="fa-envelop">Send a message</p>
          </a>

          
        </div>
      </div>
      <div className="">
        <div className="card-content">
          <div className="card-heading">
           <div className="card-heading-links">
              <NavLink to="/my-wallet" className="link-name">
                My Wallet
              </NavLink>
              <NavLink to="/trading-live" className="link-name">
                My live Trading
              </NavLink>
              <NavLink to="/" className="profile-logout" onClick={logoutHandler} >
              <i className="fas fa-times-circle"></i> 
              </NavLink>
            </div>
            
          </div>
         <div className="">  <MyProfileForme /></div>
         <div> <img src="https://g.foolcdn.com/image/?url=https%3A//g.foolcdn.com/editorial/images/647879/bitcoin-logo.jpg&amp;w=2000&amp;op=resize" 
      className="cta-teal-airplane" alt="paper airplane"></img></div>

        </div>
      </div>
    </main>
  );
}
export default Profile;
