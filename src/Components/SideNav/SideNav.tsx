import React, { SyntheticEvent, useEffect, useState } from 'react'
import './SideNav.scss'
import { useAuth } from '../../Contexts/AuthContext';
import randimg from '../../API/picsumapi';

import {AiOutlineHome,AiOutlineCalendar,AiOutlineLogout} from "react-icons/ai";

function SideNav(
  props:{
  selection:string,
  setSelection:React.Dispatch<React.SetStateAction<string>>,
  selectable:Array<string>
    }
  ) {

    const {currUser,logout}= useAuth()!;
    const [img,setImg]=useState<string>('');
    
    function LogOut(){
        try {
           logout();
        } catch (error) {
          console.log(error);
        }
      }
    function handleSelect(e:SyntheticEvent){
      console.log()
      props.setSelection((e.target as HTMLElement).id)
    }
      
    useEffect( ()=>{
      const getimg= async ()=>{
      setImg(await randimg());
    }
      getimg();
    },[]) 
    
    const icon:{[key:string]:JSX.Element}={
      'Home':<AiOutlineHome/>,
      'Calendar':<AiOutlineCalendar/>
    }

    return (
    
    <div className='SideNav'>
        <img src={img} alt="Profile Pic" />
        <span><i>Welcome,</i> { (currUser?currUser.email:'loading...')?.slice(0,-10)}</span>
        
        { 
        <ul>
          {props.selectable.map((item)=>{
            return( 
              <li 
              key={item.toString()} 
              className={(item==props.selection)?'active':''} 
              id={item}
              onClick={handleSelect}
              >
                {icon[item]}
                {item}
              </li>
            )
          })}
        </ul> 
        }
        <button className="logoutbtn" onClick={LogOut}>  Log Out <AiOutlineLogout/></button>
    </div>
    
  
    )
}

export default SideNav