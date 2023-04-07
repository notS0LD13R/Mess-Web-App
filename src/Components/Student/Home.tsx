import React,{useRef,useState} from 'react'
import { useAuth } from '../../Contexts/AuthContext'
function Home() {
  
  const passref={
    old:useRef<HTMLInputElement>(null),
    new:useRef<HTMLInputElement>(null)
  }
  const {resetpass}=useAuth()!;

  const [Loading,setLoading]=useState<boolean>(false);

  const  handleSubmit=async (e:any)=>{
    e.preventDefault();
    console.log('Changing pass')
    try{
      setLoading(true);
      await resetpass(passref.old.current!.value,passref.new.current!.value)
      setLoading(false)
    }
    catch (err){
      console.log(err)
    }
  }
  
  return (
    <div className='Home'>
      <h1>Home</h1>

      <section className='passchange'>
        <form onSubmit={handleSubmit}>
          <input type="password" placeholder="Old Password" ref={passref.old} />
          <input type="password" placeholder="New Password" ref={passref.new} />
          <input type="submit" value="Change" disabled={Loading} />
        </form>
      </section>
    </div>
  )
}

export default Home