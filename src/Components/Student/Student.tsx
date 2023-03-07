import React, { useEffect,useState } from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import './Student.scss'
import { useNavigate } from 'react-router-dom'

import SideNav from '../SideNav/SideNav'
import Home from './Home'
import MessCut from './MessCut'

const Student = () => {
  
  const {currUser}= useAuth()!;
  const nav=useNavigate();

  const [selection,setSelection]=useState<string>('Home');
  
  

  useEffect(()=>{
    console.log('Student',currUser);
    if(!currUser)
      nav('/');
    else
      console.log(currUser.uid);

  },[currUser])

  
  
  return (
    
    <div className='Student'>
      
      <SideNav 
      selection={selection}
      setSelection={setSelection}
      selectable = {{
        Home:<Home/>,
        Calendar:<MessCut/>,
        
      }}
      />
    </div>



    
    

    
  )
}

export default Student