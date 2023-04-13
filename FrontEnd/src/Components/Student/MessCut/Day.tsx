import React from 'react'
import 'Day.scss'

interface Dayprop {
    disabled:boolean,
    day:number,
    cut:boolean
}


export default function Day(props:Dayprop) {
    return (
    <div className={
        'Day' +
        (props.cut ? 'cut' : '') +
        (props.disabled ? 'disabled' : '') 
        }>
        {props.day}
    </div>
  )
}
