import React, { useEffect, useState } from 'react'
import './SideNav.scss'
import { useAuth } from '../../Contexts/AuthContext';
import randimg from './picsumapi';

import {ReactComponent as home_icon} from '../../assets/Icons/home-icon.svg'; 
import {ReactComponent as calendar_icon} from '../../assets/Icons/calendar-icon.svg';

function SideNav(props:{setSelection:Function,selectable:{[key:string]:JSX.Element}}) {

    const {currUser,logout}= useAuth()!;

    const [img,setImg]=useState<string>('');
    
    const setSelection=props.setSelection;
    const selectables=Object.keys(props.selectable)
    
    function LogOut(){
        try {
           logout();
        } catch (error) {
          console.log(error);
        }
      }
      
    useEffect( ()=>{
      const getimg= async ()=>{
      
      setImg(await randimg());
    }
      getimg();
      console.log('called')
    },[]) 
    
    const icon={
      'Home':<home_icon/>,
      'Calendar':<calendar_icon />
    }
    console.log(home_icon)

    return (
    
    <div className='SideNav'>
        <img src={img} alt="Profile Pic" />
        <span><i>Welcome,</i> { (currUser?currUser.email:'loading...')?.slice(0,-10)}</span>
        { <ul>
          {Object.keys(props.selectable).map((item)=>{
            return <li key={item.toString()}>
              {icon[item]}
              {item}
              </li>
          })}
        </ul> }
        <button onClick={LogOut}>Log Out</button>
    </div>
    
  
    )
}

export default SideNav