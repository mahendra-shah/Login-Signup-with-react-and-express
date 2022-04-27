import { useEffect, useState } from 'react';
import './App.css';
import Routing from './components/Routers/Routing';

function App() {
  const [isLoggedIn, toggleLoggedIn] = useState(false)
  
  //Signup state
  const [inputs, setInputs] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
  })

  const handleChange = (e)=>{
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:3333/auth/user/signup", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(inputs)
    })
    const returnedData = await response.json()
    setInputs({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
    })
  }
  
  // login state
  const [loginTxt, setLoginTxt] = useState({
    email:"",
    password:""
  })

  function handleLoginTxt(e) {
    setLoginTxt(prev=>({...prev, [e.target.name]:e.target.value}))
  }

  //waiting for fetch
  // async function handleLogin(e) {
  //   e.preventDefault()
  //   try{
  //       const response = await fetch("http://localhost:3333/auth/user/signin", {
  //       method:"POST",
  //       headers:{
  //         "Content-Type":"application/json"
  //       },
  //       body:JSON.stringify(loginTxt)
  //     })
  
  //     const AuthData = await response.json()
  //     if(AuthData.success){
  //       localStorage.setItem("token", AuthData.authToken)
  //     }

  //   }catch(err){
  //     console.log(err.message)
  //   }
    
  // }
 
  
  return (

    <div className="App">
        <Routing signupData = {{inputs,
              setInputs,
              handleChange,
              handleSubmit,
              handleLoginTxt,
              // handleLogin
              loginTxt,
              isLoggedIn,
              toggleLoggedIn
        }} />
        
    </div>
  );
}

export default App;
