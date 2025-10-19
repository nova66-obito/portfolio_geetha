import React from "react";
import { FaHandPointUp } from "react-icons/fa";
import Logo from '../../assets/logo.png';
import './footer.css'
import { delay, motion } from "framer-motion";
export default function Footer(){
    return(
        <>
          <motion.footer
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0,transition:{duration:0.4}}}
          viewport={{once:false,amount:0.3}} 
          className="center f-main">
              <div className="f-logo center">
                 <img src={Logo} alt="Geetha" />
              </div>
              <div className="f-up">
                 <a href="#"> <FaHandPointUp className="f-up-icon"/></a>
              </div>
              <div className="f-copy">
                <p>Geetha. All rights reserved.</p>
              </div>
          </motion.footer>
        </>
    )
}