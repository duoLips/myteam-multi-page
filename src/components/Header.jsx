import React from 'react'
import logo from '../assets/logo.svg'
import { useState } from 'react'
import burger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import Button from './Button'
const Header = () => {
    const [isShown, setIsShown] = useState(false)
    return (
        <header>
            <div className="wrapper">
                <nav className={`nav header--nav ${isShown === true ? 'bg' : ''}`}>
                    <div className='nav--logo'>
                        <img src={logo} alt="logo" />
                    </div>
                    <ul className={`nav--links ${isShown === true ? 'nav--links__active' : ''}`}>
                        <div>
                            <li><a href="#home">home</a></li>
                            <li><a href="#home">about</a></li>
                        </div>
                        <Button btnTitle='contact us' btnClass='button button_primary' />
                    </ul>
                    {isShown === false ?
                        <img src={burger} alt='burger' onClick={() => { setIsShown(true) }} className='burger nav--icon' /> :
                        <img src={close} alt='close' onClick={() => { setIsShown(false) }} className='close nav--icon' />}
                </nav>
            </div>
        </header>
    )
}

export default Header
