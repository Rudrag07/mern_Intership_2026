import React from 'react'
import { useParams } from 'react-router-dom'


const Watch = () => {
  const movieName = useParams().name;

    return (
<center>
<h1>
    You Are Waching :- {movieName}
  </h1>
  </center>
  )
}

export default Watch