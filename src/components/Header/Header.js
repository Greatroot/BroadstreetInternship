// This is the header that the React-Web-Dev-Team will be working on.
// All of the code for the header should be in this one file.
// TODO: (For React Action Team) Make header component that looks identical to the mock-up on Figma.

import React, {useEffect, useState, useRef } from "react";
import {Link} from "gatsby";
import './Header.css';
import title from '../../assets/images/Full_Title.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [click, setClick] = useState(false); // If false, show hamburger. If true, show 'x' icon.
    const [button, setButton] = useState(true); // True if hamburger menu is present and in mobile mode.
                    // False if webapp is in desktop/laptop mode and hamburger menu is not present.

    const handleClick = () => setClick(!click); // Toggle hamburger menu between open or closed.
    const closeMobileMenu = () => setClick(false); // If user clicks on a menu item while hamburger
                                            // is open, then the hamburger menu will close.

    const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
    // Being used so that we can have the useEffect hook do 2 different things based
    // on whether it has run for the first time or sometime after.

    const showButton = () => {
        if(window.innerWidth <= 1200 ) {
            setButton(true);
        } else {
            setButton(false);
        }
    }

    useEffect(() => {
        if(firstUpdate.current) {
            showButton();
            firstUpdate.current = false;
        }

        // We're adding an event listener so that everytime the window size changes, we call the showButton
        // function. I put it here so we can reduce memory usage/leaks.
        window.addEventListener('resize', showButton);

        return () => { // the cleanup function that is run when the Header component is de-rendered.
            window.removeEventListener('resize', showButton);
        }
    }, []);

    // ham = hamburger
    return(
        <div className="header">
            {/* { click ?  If the hamburger icon is clicked on, the broadstreet logo and title will disappear */ }
            {/*        null*/}
            {/*    :  Otherwise, if the hamburger menu is closed, then the broadstreet logo and title will be present */}
            {/*    (*/}

            {/*    )*/}
            {/*}*/}
            <div className='header-top-bottom'>
                <div className="header-top">
                    {/*{ click ? (*/}
                    {/*    */}
                    {/*) : null }*/}
                    <div className="title">
                        <img src={title} alt="Logo" className="img"/>
                    </div>
                </div>
                {button ? ( /* If in mobile mode, then the hamburger icon should be visible */
                    <div className="header-bottom">
                            <div className='ham-icon--container' onClick={handleClick}>
                            {click ? null : <FaBars className='ham-icon'/>}
                            </div>
                    </div>
                    ) :
                        null
                }
                {button ? (
                    <div className={click ? 'popup-menu active' : 'popup-menu' }>
                        <div className='ham-menu--exit' onClick={ handleClick }>
                            <FaTimes className='exit-icon'/>
                        </div>
                        {/*<div className="ham-menu--container">  */}
                        <ul className='ham-menu'>
                            <li className='ham-item'>
                                <Link to="/" className='ham-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='ham-item'>
                                <Link to="/gallery" className='ham-links' onClick={closeMobileMenu}>
                                    Map Gallery
                                </Link>
                            </li>
                            <li className='ham-item'>
                                <Link to="/projects" className='ham-links' onClick={closeMobileMenu}>
                                    Special Interest Projects
                                </Link>
                            </li>
                            <li className='ham-item'>
                                <Link to="/about" className='ham-links' onClick={closeMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                            <li className='ham-item'>
                                <Link to="/data" className='ham-links' onClick={closeMobileMenu}>
                                    Download Data
                                </Link>
                            </li>
                        </ul>
                        {/*</div>*/}
                    </div>
                ) : (
                    <>
                        <ul className='ham-menu'>
                            <li className='ham-item'>
                                <Link to="/" className='ham-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='ham-item'>
                                <Link to="/gallery" className='ham-links' onClick={closeMobileMenu}>
                                    Map Gallery
                                </Link>
                            </li>
                            <li className='ham-item'>
                                <Link to="/projects" className='ham-links' onClick={closeMobileMenu}>
                                    Special Interest Projects
                                </Link>
                            </li>
                            <li className='ham-item'>
                                <Link to="/about" className='ham-links' onClick={closeMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                            <li className='ham-item'>
                                <Link to="/data" className='ham-links' onClick={closeMobileMenu}>
                                    Download Data
                                </Link>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header