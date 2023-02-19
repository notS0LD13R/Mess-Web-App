import React, { ReactNode, useContext, useEffect, useState } from 'react'
import {auth} from '../firebase-config';

interface Authvalue{
  currUser:String,
  signup:Function,
  login:Function
}

const AuthContext=React.createContext<Authvalue|null>(null);

export function useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider({children}:{children:ReactNode}) {
  
  const [currUser,setcurrUser]=useState<string>()
  
  useEffect(()=>{
    const unsubscriber=auth.onAuthStateChanged((user:any)=>{
      setcurrUser(user)
    });
    return unsubscriber;
  },[])

  function signup(email:string,password:string){
    return auth.createUserWithEmailAndPassword(email,password);
  }

  function login(email:string,password:string){
    return auth.signInWithEmailAndPassword(email,password);
  }

  const value={
    currUser,
    login,
    signup
  }
  
  return (
    //@ts-ignore
    <AuthContext.Provider value={value}>
   <>{children}</> 
    </AuthContext.Provider>
  )
}

