import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './Components/Login/Login'
import Admin from './Components/Admin/Admin'
import Student from './Components/Student/Student'

function App() {
  const temp=0;
  return (
    
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path ="/Admin" element={<Admin/>} />
        <Route path="/Student" element={<Student/>} />
      </Routes>
      
  )
}

export default App
