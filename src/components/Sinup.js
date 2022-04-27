import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Sinup.css'

const Sinup = ({ signupData }) => {
  
  const { inputs, handleChange, handleSubmit, isLoggedIn } = signupData;
  
  return (
    <>

      <section>
        <div className="sign_image_box">
          <img src='https://c4.wallpaperflare.com/wallpaper/915/998/470/bodysuit-anime-bicycle-glasses-wallpaper-preview.jpg' alt='img' />
        </div>
        
        <div className="sign_content_box">
          <div className="sign_form_box">
            <h2>Signup</h2>
            <form action="#" onSubmit={handleSubmit}>
              <div className="sign_input_box">
                <span>First Name</span>
                <input value={inputs.fName} autoFocus name="firstName" type="text" required onChange={handleChange} />
              </div>

              <div className="sign_input_box">
                <span>Last Name</span>
                <input value={inputs.lName} name="lastName" type="text" onChange={handleChange} />
              </div>

              <div className="sign_input_box">
                <span>Email</span>
                <input value={inputs.email} name="email" onChange={handleChange} type="email" required />
              </div>

              <div className="sign_input_box">
                <span>Password</span>
                <input value={inputs.password} name="password" onChange={handleChange} type="password" required />
              </div>
              <br /><br />

              <div className="sign_term">
                <label><input type="checkbox" required /> agree <a href="/">Terms and Conditions</a></label>
              </div><br />

              <div className="sign_input_box">
                <input type="submit" value="Sign Up"/>
              </div><br /><br />

              <div className="sign_input_box">
                <p>Already have an account? <Link to="/login">Login</Link></p>
              </div>

            </form>
            <h3>Login with social media</h3>
            <ul className="sign_social_icons">
              <li><img src="https://www.flaticon.com/free-icons/facebook" alt='img' /></li>
              <li><img src="#" alt='img' /></li>
              <li><img src="#" alt='img' /></li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default Sinup