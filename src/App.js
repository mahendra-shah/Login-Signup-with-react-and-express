import { useState } from 'react';
import './App.css';
import Routing from './components/Routers/Routing';

function App() {
  //Signup state
  const [inputs, setInputs] = useState({
    fName:"",
    lName:"",
    email:"",
    password:"",
    cpassword:"",
  })
  const [register, setRegister] = useState([])

  const handleChange = (e)=>{
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    setRegister([...register, inputs])
    setInputs({
      fName:"",
    lName:"",
    email:"",
    password:"",
    cpassword:"",
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
  function handleLogin(e) {
    e.preventDefault()
    
  }
  
  return (

    <div className="App">
        <Routing signupData = {{inputs,
              setInputs,
              handleChange,
              handleSubmit,
              handleLoginTxt,
              handleLogin
        }} />
        
    </div>
  );
}

export default App;
