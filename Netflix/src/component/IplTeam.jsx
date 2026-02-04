

import React from 'react'
import { useParams } from 'react-router-dom'

const IplTeam = () => {
    const name = useParams().name
    const trophy = useParams().tropy
      return (

    <center>
<h1>
    {name} Is Playing & Has Won <span style={{color:"yellow"}}>{trophy}</span>  tropy
  </h1>
  </center>
  
  )
}

export default IplTeam
