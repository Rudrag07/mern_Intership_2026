import React from 'react'

const MapDemo1 = () => {
  const cars = ['BMW','TATA','KIA','RR'];
    return (
   <center>
    <h1>Car-List</h1>
{
cars.map((car)=>{
    return <h5>{car}</h5>
})
}
   </center>   
  )
}

export default MapDemo1