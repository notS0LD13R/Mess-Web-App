import React, { ReactNode, useContext, useEffect, useState } from 'react'
import {auth} from '../firebase-config';
import {User} from 'firebase/auth';

interface Authvalue{
  currUser:User,
  signup:Function,
  login:Function,
  logout:Function
}



const AuthContext=React.createContext<Authvalue|null>(null);

export function useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider({children}:{children:ReactNode}) {
  
  const [currUser,setcurrUser]=useState<User>()
  
  useEffect(()=>{
    const unsubscriber=auth.onAuthStateChanged((user)=>{
      setcurrUser(user);
    });
    return unsubscriber;
  },[])

  
  function signup(email:string,password:string){
    return auth.createUserWithEmailAndPassword(email,password);
  }

  function login(email:string,password:string){
    return auth.signInWithEmailAndPassword(email,password);
  }

  function logout(){
    return auth.signOut();
  }

  const value={
    currUser,
    login,
    signup,
    logout
  }
  
  return (
    //@ts-ignore
    <AuthContext.Provider value={value}>
   <>{children}</> 
    </AuthContext.Provider>
  )
}

