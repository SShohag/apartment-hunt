import React from 'react';
import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faFacebook, faYoutube, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer container-fluid">
            <div className="row">
                <div className="col-md-3 col-sm-6 mt-5 p-3">
                    <p>H#340(4th Floor), Road #24,</p>
                    <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                    <p>Phone: 018XXXXXXXX</p>
                    <p>E-mail: info@company.com</p>
                </div>
                <div className="col-md-3 col-sm-6 mt-3 p-3">
                    <h5>Company</h5>
                    <ul>
                        <li>
                            <a href="">About</a>
                        </li>
                        <li>
                            <a href="">Site Map</a>
                        </li>
                        <li>
                            <a href="">Support Center</a>
                        </li>
                        <li>
                            <a href="">Terms Conditions</a>
                        </li>
                        <li>
                            <a href="">Submit Listing</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 mt-3 p-3">
                    <h5>Quick Links</h5>
                    <ul>
                        <li>
                           <a href="">Quick Links</a> 
                        </li>
                        <li>
                            <a href="">Rentals</a>
                        </li>
                        <li>
                            <a href="">Sales</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">Terms Conditions</a>
                        </li>
                        <li>
                            <a href="">Our blog</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 mt-3 p-3">
                    <h5>About Us</h5>
                    <p>We are the top real estate agency in Sydney. With agents available to answer any question 24/7</p>
                    <div className="socialLogo d-flex mt-3">
                    <div className="mr-3"><FontAwesomeIcon className="fa-2x" icon={faFacebook} /></div>
                    <div className="mr-3"><FontAwesomeIcon className="fa-2x" icon={faInstagram} /></div>
                    <div className="mr-3"><FontAwesomeIcon className="fa-2x" icon={faLinkedinIn} /></div>
                    <div className="mr-3"><FontAwesomeIcon className="fa-2x" icon={faYoutube} /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;