import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} 
from 'react-router-dom'
import Header from '../Header'
import Login from '../Login'
import Sinup from '../Sinup'

const Routing = ({signupData}) => {
    const {inputs, setInputs, handleChange, handleSubmit, handleLoginTxt, handleLogin} = signupData
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/signup' element={<Sinup signupData={{inputs, setInputs, handleChange, handleSubmit}}/>} />
            <Route path='/login' element={<Login signupData={{handleLoginTxt, handleLogin}}/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Routing
