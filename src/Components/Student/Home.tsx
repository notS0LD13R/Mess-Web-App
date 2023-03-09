import React from 'react'

function Home() {
  

  const handleSubmit=(e:any)=>{
    
  }
  
  return (
    <div className='Home'>
      <h1>Home</h1>

      <section className='passchange'>
        <form onSubmit={handleSubmit}>
          <input type="password" name="" id="" />
          <input type="password" name="" id="" />
          <input type="submit" value="asda" />
        </form>
      </section>
    </div>
  )
}

export default Home