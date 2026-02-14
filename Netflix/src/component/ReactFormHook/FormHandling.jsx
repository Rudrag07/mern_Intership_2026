import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const FormHandling = () => {
  const [country,setCountry] = useState('');
  const [state,setState] = useState('');

  const data = [
    {country:"India",states:['Gujarat','Maharashtra','Rajasthan']},
    {country:"USA",states:['California','Texas','Florida']},
    {country:"Canada",states:['Ontario','Quebec','BritishColumbia']},
  ]

    const {register,handleSubmit}  = useForm();
    const [Data,setData] = useState();
    const submitHandler=(data) =>{
        setData(data);
        console.log(data)
    }
  return (
    <div  className='container'>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit(submitHandler)} > 
       Name : <input type="text"name="name"placeholder="Student Name"  {...register("name")}/><br/><br/>
       Email :  <input type="email" name="email" placeholder="Email" {...register("email")}/><br/><br/>
       Phone :  <input type="tel" name="phone" placeholder="Phone Number" {...register("phone")}/><br/><br/>
     
       Country : <select value={country} {...register("country")} onChange={(e)=> setCountry(e.target.value)}>
          <option value="">---Select Country---</option>
            {data.map((d)=>{
              return <option key={d.id}>{d.country}</option>
            })}
        </select><br/><br/>

       State : <select  value={state}  {...register("country")} onChange={(e)=>setState(e.target.value)} disabled={!country}>
          <option value="">---Select State---</option>
          {country && data.map((d)=>{
            if(d.country === country){
              return d.states.map((s)=>{
                return <option key={s.id}>{s}</option>
              })
            }
          })}
       </select><br/><br/>
        <input type="text" name="city" placeholder="City" {...register("city")}/><br/><br/>
        <button type="submit"> Submit</button>
      </form>
    </div>
  )
}

export default FormHandling