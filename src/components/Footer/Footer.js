// This is the footer that the React-Web-Dev-Team will be working on.
// All of the code for the footer should be in this one file.
// TODO: (For React Action Team) Make footer component that looks identical to the mock-up on Figma.

import React from "react";
import "./Footer.css";
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin, FaLinkedinIn,
    FaPinterestSquare,
    FaTwitterSquare
} from "react-icons/fa";

//TODO: Add routing to Broadstreet and website's About Us page into the footer!
//TODO: Also add routing to the hello@broadstreet.io!
const Footer = () => {

    return(
        <div className="footer">
            <div className="left-right-footer">
                <div className="left-footer">
                    <div className="broadstreet-logo">
                        placeholder
                    </div>
                    <div className="left-footer--text">
                        <div className="top-text">
                            <p>Made with ♡ by Broadstreet & the COVID-19 Data Project team</p>
                        </div>
                        <div className="email">
                            <p>Email us: hello@broadstreet.io</p>
                        </div>
                    </div>
                </div>
                <div className="right-footer">
                    <div className="right-footer--text">
                        <p>Report an Issue with the Data</p>
                        <p>Terms & Policies</p>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="icons">
                    <FaLinkedin />
                    <FaInstagramSquare />
                    <FaPinterestSquare />
                    <FaTwitterSquare />
                    <FaFacebookSquare />
                    <FaGithubSquare />
                </div>
            </div>
        </div>
    );
}

export default Footer;