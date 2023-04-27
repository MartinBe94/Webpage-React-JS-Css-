import React from "react"
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa"
import { Link } from "react-router-dom";
import Pic from './images/Pic2.jpg'

function Contact() {
  return (
        <div className="contact">
             <h1>Contact</h1>
             <img src={Pic} className="Pic"></img>
             <h2>You can reach me on:</h2>
             <div className="Icons">
             <h3>
              <Link to="https://www.linkedin.com/in/martin-be-1a1458205/">
             <h3><FaIcons.FaLinkedin/> </h3>
             </Link>

             <Link to="https://github.com/MartinBe94">
             <h3><FaIcons.FaGithub/></h3>
             </Link>

             {/* <Link to="Martin.be@iths.se"> */}
             <a href = "mailto: Martin.be@iths.se">
             <h3><FaIcons.FaMailBulk/></h3>
             </a></h3>
             </div>
        </div>
  )
}

export default Contact;