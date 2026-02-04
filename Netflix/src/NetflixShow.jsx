import React from 'react'
import { Link } from 'react-router-dom'

const NetflixShow = () => {
  
  
    return ( 
    
 
 <center>
  <h1>
      All-Movies & Show's
    </h1>
  <ul>
    <li><Link to="/watch/:Kalki">Kalki</Link></li>
    <li><Link to="/watch/:Money Heist">Money Heist</Link></li>
   <li><Link to="/watch/:hakker">mr hakker</Link></li>
   
  </ul></center>
    )
}

export default NetflixShow