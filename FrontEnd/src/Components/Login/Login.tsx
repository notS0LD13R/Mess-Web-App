import React, { useEffect, useRef, useState } from 'react';
import './Login.scss'
import fingerprint from '../../assets/Login/fingerprint.svg'
import {useAuth} from  '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from '@firebase/util';


const Login = () => {
  
  const userid=useRef<HTMLInputElement>(null);
  const pass=useRef<HTMLInputElement>(null);

  
  const {login,currUser}=useAuth()!;
  
  const nav=useNavigate();
  const [Loading,setLoading]=useState<boolean>(false);
  const [Alert,setAlert]=useState<String>('');
  
  async function handleSubmit(e:any){
    e.preventDefault();
    if(!Loading){
      try {
        setLoading(true);
        await login(userid.current!.value+'@gmail.com',pass.current!.value)
        setLoading(false);
      } catch (error:any) {
        setAlert(error.code);
        console.log('error:',error.code);
        setLoading(false);
      }
    }
  }

  useEffect(()=>{
    if(currUser)
        nav('/Student');
  },[currUser])
  
  return (
    <div className="Login">
      
      <div className="container">
        <img src={fingerprint} />
        { Alert &&
          <div className="alert">
          {Alert}
          </div>
        }
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
        
          <input type="submit" value="Login" disabled={Loading}/>
        </form>
      </div>
    </div>
  )
}

export default Login

