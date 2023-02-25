import React from 'react'
import logo from '../assets/logo.svg'
import pinterestIcon from '../assets/icon-pinterest.svg'
import twitterIcon from '../assets/icon-twitter.svg'
import facebookIcon from '../assets/icon-facebook.svg'
const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="footer">
                    <div className="nav footer--nav">
                        <div className='nav--logo'>
                            <img src={logo} alt="logo" />
                        </div>
                        <ul className='nav--links'>
                            <li><a href="#home">home</a></li>
                            <li><a href="#home">about</a></li>
                        </ul>
                    </div>
                    <div className='footer--address'>
                        <a rel="noreferrer" target="_blank" href="https://www.google.com/maps/place/Hillcrest+Ln,+Sacramento,+CA+95821/@38.6353064,-121.3768265,17z/data=!3m1!4b1!4m5!3m4!1s0x809ad941873af563:0xcebcbfb83a1d34ad!8m2!3d38.6353022!4d-121.3746378">
                            987 Hillcrest Lane Irvine, CA California 92714
                        </a>
                        <span>Call Us: <a href="tel:+1949-833-7432">949-833-7432</a></span>
                    </div>
                    <div className='footer--socials'>
                        <div className='footer--links'>
                            <a href="https://facebook.com/" rel="noreferrer" target="_blank"><img src={facebookIcon} alt="facebookIcon" /></a>
                            <a href="https://pinterest.com/" rel="noreferrer" target="_blank"><img src={pinterestIcon} alt="pinterestIcon" /></a>
                            <a href="https://twitter.com/" rel="noreferrer" target="_blank"><img src={twitterIcon} alt="twitterIcon" /></a>
                        </div>
                        <span>Copyright 2020. All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
