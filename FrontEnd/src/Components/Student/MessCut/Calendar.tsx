import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../Contexts/AuthContext'
import { SpiralSpinner } from 'react-spinners-kit';
import { fetchMessCutbyID } from '../../../API/Express';
import './Calendar.scss'

const getDaysInMonth = (date:Date)=> {
   return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
  };



export default function Calendar() {
    const date=new Date()
    const userID=useAuth()!.currUser.email!
    const [Loading,setLoading]=useState<boolean>(false)
    const CutDays:boolean[]=new Array(getDaysInMonth(date)).fill(false);
    
    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            try{
                await fetchMessCutbyID(userID)
            }
            catch (err){
                console.log(err)
            }
            setLoading(false)
        })();
        
    },[])
    if (Loading)
        return (
        <div className="loader-wrapper">
            <SpiralSpinner size={100} frontColor='#008080' backColor='lightgrey'/>
        </div>
        )
    else
    return (
    <div className='Calendar'>
        <h2> {date.getFullYear()} </h2>
        <h3> {date.toLocaleString('default', { month: 'long' })} </h3>
        <div className="dayname">
            {
                ['SUN','MON','TUE','WED','THU','FRI','SAT']
                .map((day)=> <h4 key={day}>{day}</h4> )
            }
        </div>
        <div className="days">
            
        </div>
    </div>
  )
}


