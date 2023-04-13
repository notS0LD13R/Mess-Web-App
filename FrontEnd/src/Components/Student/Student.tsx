import React, { useEffect,useState } from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import './Student.scss'
import { useNavigate } from 'react-router-dom'

import SideNav from '../SideNav/SideNav'
import Home from './Home/Home'
import MessCut from './MessCut/MessCut'

const Student = () => {
  
  const {currUser}= useAuth()!;
  const nav=useNavigate();

  const [selection,setSelection]=useState<string>('Home');
  
  

  useEffect(()=>{
    if(!currUser)
      nav('/');

  },[currUser])

  const rightcomp:{[key:string]:JSX.Element} ={
    'Home':<Home/>,
    'Calendar':<MessCut/>
  }
  
  return (
    
    <div className='Student'>
      
      <SideNav 
      selection={selection}
      setSelection={setSelection}
      selectable = {[
        'Home',
        'Calendar'
        
      ]}
      />
      {rightcomp[selection]}
    </div>



    
    

    
  )
}

export default Student