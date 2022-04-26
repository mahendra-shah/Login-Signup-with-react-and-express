import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

    return (
        <>

            <div className="topnav" id="myTopnav" >
                <a href="#home" className="active">Home</a>
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Sign In</Link>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#" className="icon" >
                    <i className="fa fa-bars"></i>
                </a>
            </div>

        </>
    )
}

export default Header
