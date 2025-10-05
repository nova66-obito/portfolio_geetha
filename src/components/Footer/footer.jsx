import React from "react";
import { FaHandPointUp } from "react-icons/fa";
import Logo from '../../assets/logo.png';
import './footer.css'
export default function Footer(){
    return(
        <>
          <footer className="center f-main">
              <div className="f-logo">
                 <img src={Logo} alt="Geetha" />
              </div>
              <div className="f-up">
                 <a href="#"> <FaHandPointUp className="f-up-icon"/></a>
              </div>
              <div className="f-copy">
                <p>geetha</p>
              </div>
          </footer>
        </>
    )
}