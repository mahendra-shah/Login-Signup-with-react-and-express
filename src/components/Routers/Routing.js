import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} 
from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'
import Login from '../Login'
import Sinup from '../Sinup'

const Routing = ({signupData}) => {
    const {
            inputs, 
            setInputs, 
            handleChange, 
            handleSubmit, 
            handleLoginTxt, 
            loginTxt,
            isLoggedIn,
            toggleLoggedIn
          } = signupData
  return (
    <BrowserRouter>
        <Header signupData={isLoggedIn} />
        <Routes>
            <Route path='/signup' element={<Sinup signupData={{inputs, setInputs, handleChange, handleSubmit,isLoggedIn}}/>} />
            <Route path='/login' element={<Login signupData={{handleLoginTxt, loginTxt, isLoggedIn, toggleLoggedIn}}/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
