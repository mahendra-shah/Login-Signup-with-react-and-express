import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'

const Header = ({signupData}) => {
    
    const {isLoggedIn} = signupData
    const navigate = useNavigate()
    useEffect(()=>{
        if(isLoggedIn){
            navigate("/")
        }
    })
    return (//isLoggedIn &&
        <>

            <div className="topnav" id="myTopnav" >
                <a href="#home" className="active">Home</a>
                {isLoggedIn ? "" : <><Link to='/signup'>Sign Up</Link><Link to='/login'>Sign In</Link></>}
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
