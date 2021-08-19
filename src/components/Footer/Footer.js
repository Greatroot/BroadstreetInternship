// This is the footer that the React-Web-Dev-Team will be working on.
// All of the code for the footer should be in this one file.
// TODO: (For React Action Team) Make footer component that looks identical to the mock-up on Figma.

import React from "react";
import "./Footer.css";
import logo from '../../assets/images/covid19dataproject_asset_1.svg';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin, FaLinkedinIn,
    FaPinterestSquare,
    FaTwitterSquare
} from "react-icons/fa";
import {Link} from "gatsby";

//TODO: Add routing to Broadstreet and website's About Us page into the footer!
//TODO: Also add routing to the hello@broadstreet.io!
const Footer = () => {

    return(
        <div className="footer">
            <div className="left-right-footer">
                <div className="left-footer">
                    <img src={logo} alt="Logo" className="broadstreet-logo" />
                    <div className="left-footer--text">
                        <div className="top-text">
                            <p>Made with ♡ by</p>
                            <div style={{ margin: "0 0.3rem", }}>
                                <a className="link" href="https://www.broadstreet.io/board/HOME">Broadstreet</a>
                            </div>
                            <p>& the</p>
                            <div style={{ marginLeft: "0.3rem", }}>
                                <a className="link" href="https://covid19dataproject.org/">COVID-19 Data Project team</a>
                            </div>
                        </div>
                        <div className="email">
                            <p>Email: </p>
                            <p className="link">hello@broadstreet.io</p>
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
                    <a>
                        <FaLinkedin className="icon"/>
                    </a>
                    <a>
                        <FaInstagramSquare className="icon" />

                    </a>
                    <a>
                        <FaPinterestSquare className="icon" />

                    </a>
                    <a>
                        <FaTwitterSquare className="icon" />
                    </a>
                    <a>
                        <FaFacebookSquare className="icon" />

                    </a>
                    <a>
                        <FaGithubSquare className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;


// This is the footer that the React-Web-Dev-Team will be working on.
// // All of the code for the footer should be in this one file.
// // TODO: (For React Action Team) Make footer component that looks identical to the mock-up on Figma.
//
// import React from "react";
// import "./Footer.css";
// import {
//     FaFacebookSquare,
//     FaGithubSquare,
//     FaInstagramSquare,
//     FaLinkedin, FaLinkedinIn,
//     FaPinterestSquare,
//     FaTwitterSquare
// } from "react-icons/fa";
// import {Link} from "gatsby";
//
// //TODO: Add routing to Broadstreet and website's About Us page into the footer!
// //TODO: Also add routing to the hello@broadstreet.io!
// const Footer = () => {
//
//     return(
//         <div className="footer">
//             <div className="left-right-footer">
//                 <div className="left-footer">
//                     <div className="top-text">
//                         <div className="broadstreet-logo">
//                             placeholder
//                         </div>
//                         <p>Made with ♡ by </p>
//                         <a className="link" href="https://www.broadstreet.io/board/HOME">Broadstreet</a>
//                     </div>
//                     <div className="bottom-text">
//                         <p>& the</p>
//                         <a className="link" href="https://covid19dataproject.org/">COVID-19 Data Project team</a>
//                     </div>
//                     <div className="email">
//                         <p>Email: </p>
//                         <p className="link">hello@broadstreet.io</p>
//                     </div>
//                 </div>
//                 <div className="right-footer">
//                     <div className="right-footer--text">
//                         <p>Report an Issue with the Data</p>
//                         <p>Terms & Policies</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="bottom-footer">
//                 <div className="icons">
//                     <FaLinkedin />
//                     <FaInstagramSquare />
//                     <FaPinterestSquare />
//                     <FaTwitterSquare />
//                     <FaFacebookSquare />
//                     <FaGithubSquare />
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default Footer;