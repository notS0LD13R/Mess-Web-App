import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './Contexts/AuthContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
      <AuthProvider>
      
        <Router>
          <App />
        </Router>
      
      </AuthProvider>
  
  
)
