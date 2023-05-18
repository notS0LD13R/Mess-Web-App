import {useRef,useEffect, useState} from 'react'
import './Day.scss'
import anime from 'animejs'
import { fetchMessCutbyID_type } from './Calendar'

export interface Dayprop {
    disabled:boolean,
    day:number,
    cut:boolean,
    data:React.MutableRefObject<fetchMessCutbyID_type | null>

}


export  function Day(props:Dayprop) {
    
    const ref= useRef<HTMLDivElement>(null)
    const mounted=useRef(false)

    const [cut,setCut]=useState(props.cut)

    const animation=useRef<anime.AnimeInstance>()
    useEffect(()=>{
        mounted.current=true

        animation.current=  anime({
            targets: ref.current,
            keyframes:[
                {rotateZ:5,scale:1.15},
                {rotateZ:-5,scale:1.15},
                {rotateZ:0,scale:1},
            ],
            duration:200,
            autoplay:false,
            easing:'linear',
            loop:1
        })
    },[])
    
    useEffect(()=>{//update CutDays when cut state changes
        const arr=props.data.current!.CutDays
        const pos=arr.indexOf(props.day)

        if (cut && pos===-1 )
            arr.push(props.day)
        else if((!cut) && pos!==-1){
            arr.splice(pos,1)        }
        
            
        sessionStorage.setItem('calendar',JSON.stringify(props.data.current))
    },[cut])

    function handleClick(){
        
        if (props.disabled)
                animation.current!.play()
        else //Toggle cut state
            setCut(!cut)

    }

    return (
    <div 
    className={
        'Day ' +
        (cut ? 'cut ' : '') +
        (props.disabled ? 'disabled ' : '') 
        }
        onClick={handleClick}
        ref={ref}>
        {props.day}
    </div>
  )
}
