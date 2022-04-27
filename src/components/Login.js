import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({signupData}) => {
  const navigate = useNavigate()
  const {handleLoginTxt, loginTxt, isLoggedIn, toggleLoggedIn}=signupData

  async function handleLogin(e) {
    e.preventDefault()
    try{
      console.log(loginTxt)
      const response = await fetch("http://localhost:3333/auth/user/signin", {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(loginTxt)
      })
  
      const AuthData = await response.json()
      if(AuthData.success){
        localStorage.setItem("token", AuthData.authToken)
        toggleLoggedIn(true)
        navigate("/")
      
      }
    

    }catch(err){
      console.log(err.message)
    }
    
  }

  useEffect(()=>{
    if(isLoggedIn){
      navigate("/")
    }
  })

  return (
    <>

      <section>
        <div className="log_image_box">
          <img src='https://wallup.net/wp-content/uploads/2015/12/190128-anime-anime_girls-bicycle-panties-748x529.jpg' alt='img' />
        </div>

        <div className="log_content_box">
          <div className="log_form_box">
            <h2>Sign In</h2>
            <form action="#" onSubmit={handleLogin} >
              <div className="log_input_box">
                <span>Email</span>
                <input onChange={handleLoginTxt} autoFocus name="email" type="email" required />
              </div>

              <div className="log_input_box">
                <span>Password</span>
                <input onChange={handleLoginTxt} name="password" type="password" required />
              </div>

              <div className="log_input_box">
                <input type="submit" value="Sign In" />
              </div><br /><br />

              <div className="log_input_box">
                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
              </div>

            </form>
            <h3>Login with social media</h3>
            <ul className="log_social_icons">
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

export default Login
