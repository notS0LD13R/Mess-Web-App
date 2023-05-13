import React, { useEffect, useState, useRef } from 'react'
import { useAuth } from '../../../Contexts/AuthContext'
import { SpiralSpinner } from 'react-spinners-kit';
import { fetchMessCutbyID } from '../../../API/Express';
import './Calendar.scss'
import { Dayprop,Day } from './Day';


interface fetchMessCutbyID_type {
    CutDays:Array<number>,
    ID:string,
    date:Date
}

const getDaysInMonth = (date:Date)=> {
   return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
  };

const getDays=(data:fetchMessCutbyID_type)=>{
    const arr:Dayprop[]=[];
    const NoOfDays=getDaysInMonth(data.date)
    for (let i=1;i<NoOfDays+1;i++){
        arr.push({
            disabled:i<2+data.date.getDate(),
            day:i,
            cut:data.CutDays.includes(i)
        })
    }
    console.log(arr)
    return arr
}



export default function Calendar() {
    const date=new Date()
    const userID=useAuth()!.currUser.email!
    const [Loading,setLoading]=useState<boolean>(true)

    const data =useRef<fetchMessCutbyID_type>()
    
    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            try{
                data.current=await fetchMessCutbyID(userID)
                data.current!.date=new Date(data.current!.date)
                console.log('effect',data.current)
                setLoading(false)
            }
            catch (err){
                console.log(err)
            }
        })();
        
    },[])
    if (Loading)
        return (
        <div className="loader-wrapper">
            <SpiralSpinner size={100} frontColor='#008080' backColor='lightgrey'/>
        </div>
        )
    else{
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
                {getDays(data.current!).map((item)=><Day key = {`day${item.day}`} {...item}/>)}
            </div>
        </div>
        )
    }
}


