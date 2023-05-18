import React, { useEffect, useState, useRef } from 'react'
import { useAuth } from '../../../Contexts/AuthContext'
import { SpiralSpinner } from 'react-spinners-kit';
import { fetchMessCutbyID } from '../../../API/Express';
import './Calendar.scss'
import { Dayprop,Day } from './Day';


export interface fetchMessCutbyID_type {
    CutDays:Array<number>,
    ID:string,
    date:Date,
}

const getDaysInMonth = (date:Date)=> {
   return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
  };

//Returns array of Dayprops object 
const getDays=(data:React.MutableRefObject<fetchMessCutbyID_type | null>)=>{
    const arr:Dayprop[]=[];
    const NoOfDays=getDaysInMonth(data.current!.date)
    for (let i=1;i<NoOfDays+1;i++){
        arr.push({
            disabled:i<2+data.current!.date.getDate(),
            day:i,
            cut:data.current!.CutDays.includes(i),
            data:data
        })
    }
    return arr
}

function getDayOffset(date:Date){
    return (new Date(date.getFullYear(),date.getMonth(),1)).getDay()-1
}



export default function Calendar() {
    const date=new Date()
    const userID=useAuth()!.currUser.email!
    const [Loading,setLoading]=useState<boolean>(true)

    const data =useRef<fetchMessCutbyID_type|null>(null)
    
    useEffect(()=>{
        (async ()=>{
            data.current=sessionStorage.getItem('calendar')?
            JSON.parse(sessionStorage.getItem('calendar')!):null
            
            console.log('cal eff',data.current)
            
            if(!data.current){
                setLoading(true)
                try{
                    data.current=await fetchMessCutbyID(userID)
                    console.log(data.current)
                    sessionStorage.setItem('calendar',JSON.stringify(data.current))
                    console.log('api effect',data.current)
                }
                catch (err){
                    console.log(err)
                }
            }
            data.current!.date=new Date(data.current!.date)
            setLoading(false)
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
                {new Array(getDayOffset(data.current!.date)).fill(<div/>)}
                {
                getDays(data)
                .map((item)=><Day key = {`day${item.day}`} {...item}/>)
                }
            </div>
        </div>
        )
    }
}


