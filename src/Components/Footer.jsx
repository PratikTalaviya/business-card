import React from "react";
import "./footer.css"
import FacebookLogo from "../Images/Facebook Icon.png"
import TwitterLogo from "../Images/Twitter Icon.png"
import InstagramLogo from "../Images/Instagram Icon.png"
import GitHubLogo from "../Images/GitHub Icon.png"



function Footer(){
    return(
        <footer>
            <img src={TwitterLogo} alt="logo" />
            <img src={FacebookLogo} alt="logo"/>
            <img src={InstagramLogo} alt="logo"/>
            <img src={GitHubLogo} alt="logo"/>
        </footer>
    )
}

export default Footer;