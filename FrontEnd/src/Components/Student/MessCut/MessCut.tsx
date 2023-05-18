import {useRef,useState} from 'react'
import './MessCut.scss'
import { updateMessCut } from '../../../API/Express'
import { fetchMessCutbyID_type } from './Calendar'
import Calendar from './Calendar'

function MessCut() {
  
  const data= useRef<fetchMessCutbyID_type | null>(null)
  const [disabled,setDisabled] = useState(false)

  

  function handleClick(){
    setDisabled(true)
    setTimeout(()=>setDisabled(false),2500)
    updateMessCut(data.current!)
  }
  
  return (
    <div className="MessCut">
      <Calendar data={data} setDisabled={setDisabled}/>
      <button type="submit" disabled={disabled} onClick={handleClick}>Submit</button>
    </div>
  )
}

export default MessCut