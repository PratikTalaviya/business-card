import React from "react";
import Description from "./Description";
import ProfilePicture from "../Images/Rectangle 90.png"
import "./info.css"
import MailLogo from "../Images/Mail.png"
import LinkedInLogo from "../Images/linkedin.png"

function Info(){
    return(
        <div className="container">
            <img src={ProfilePicture} alt="profile"/>
            <div className="info-container">
                <h1 className="title">Laura Smith</h1>
                <h3 className="position">Frontend Developer</h3>
                <p className="website">laurasmith.website</p>
                <div className="btn-container">
                    <button className="email-btn">
                        <img src={MailLogo} alt="logo"/>
                        <h3>Email</h3>
                    </button>
                    <button className="linkedin-btn">
                        <img src={LinkedInLogo} alt="logo"/>
                        <h3>LinkedIn</h3>

                    </button>
                </div>
                <Description title="About" content="I am a frontend developer with a particular interest in making things simple and automating daily tasks."/>
                <Description title="Interest" content="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."/>
            </div>
        </div>
    )
}

export default Info;