import React, { useRef, useState } from 'react';
import './Login.scss'
import fingerprint from '../../assets/Login/fingerprint.svg'


const Login = () => {

  
  const userid=useRef();
  const pass=useRef();
  
  function handleSubmit(e:any){
    e.preventDefault();
    console.log(userid.current.value,pass.current.value)
  }
  


  return (
    <div className="Login">
      
      
      <div className="container">
      <img src={fingerprint} />
        <form onSubmit={handleSubmit}>
        
          <input
          type="text"
          ref={userid}
          placeholder='UserId' />
        
        
          <input
          type="password"
          ref={pass}
          id='password'
          placeholder='Password' />
        
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login

