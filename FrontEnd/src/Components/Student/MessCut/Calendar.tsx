import React from 'react'
import './Calendar.scss'

const getDays=()=>{

}

export default function Calendar() {
    const date=new Date()

  
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


