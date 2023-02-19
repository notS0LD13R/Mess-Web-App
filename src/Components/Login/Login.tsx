import React, { useEffect, useRef, useState } from 'react';
import './Login.scss'
import fingerprint from '../../assets/Login/fingerprint.svg'
import {useAuth} from  '../../Contexts/AuthContext'


const Login = () => {
  
  const userid=useRef<HTMLInputElement>(null);
  const pass=useRef<HTMLInputElement>(null);
  
  const login=useAuth()!.login;
  const [Loading,setLoading]=useState<boolean>(false);
  
  async function handleSubmit(e:any){
    e.preventDefault();
    if(!Loading){
      try {
        setLoading(true);
        await login(userid.current!.value+'@gmail.com',pass.current!.value)
        setLoading(false);
      
      } catch (error) {
        console.log(error)
      }
    }
      

    console.log(userid.current!.value+'@gmail.com',pass.current!.value);
  }

  useEffect(()=>{
      console.log("Hello");
  })
  
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

