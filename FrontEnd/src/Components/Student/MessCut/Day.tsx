import {useRef} from 'react'
import './Day.scss'
import anime from 'animejs'
import { JsxElement } from 'typescript'

export interface Dayprop {
    disabled:boolean,
    day:number,
    cut:boolean
}


export  function Day(props:Dayprop) {
    
    const ref= useRef<HTMLDivElement>(null)

    const animation=anime({
        targets:ref.current,
        keyframes:[
            {rotateZ:45,scale:1.75},
            {rotateZ:-45,scale:1.75},
            {rotateZ:0,scale:1},
        ],
        duration:100,
        autoplay:false,
        loop:1
    })

    
    return (
    <div className={
        'Day ' +
        (props.cut ? 'cut ' : '') +
        (props.disabled ? 'disabled ' : '') 
        }
        onClick={()=>{
            if (props.disabled) animation.play()
        }}
        ref={ref}>
        {props.day}
    </div>
  )
}
