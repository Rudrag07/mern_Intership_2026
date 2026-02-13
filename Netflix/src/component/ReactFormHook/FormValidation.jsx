import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidation = () => {
    const {reset,register,handleSubmit,formState:{errors}} = useForm();
    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"Name is Required*"
            },
            minLength:{
                value:5,
                message:"Minimum 5 Character is Required*"
            },
            maxLength:{
                value:10,
                message:"Maximum 10 Character is Required*"
            },
        },
        ageValidator:{
            required:{
                value:true,
                message:"Age is Required*"
            },
            min:{
                value:6,
                message:"Minimum age 6*"
            },
            max:{
                value:18,
                message:"Maximum age 18*"
            },
        },
        phoneValidator:{
           required:{
            value:true,
            message:"Phone is Required"
           },
           maxLength:{
            value:10,
            message:"10 digit is Required"
           },
           minLength:{
            value:10,
            message:"10 digit is Required"
           },
        },
        addValidator:{
            required:{
                value:true,
                message:"Address is Required"
            },
            minLength:{
                value:20,
                message:"Maximum 20 Character"
            },
            
        }
    }
    const submitHandler = (data)=>{
        console.log(data)
        alert("FormSubmited");
        reset();
    }
  return (
    <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1>Form Validation</h1><br /><b></b>
        <form onSubmit={handleSubmit(submitHandler)}>
            Name : <input type='text' {...register("name",validationSchema.nameValidator)}></input>
            <p>{errors.name && errors.name.message}</p>
            age : <input type='text' {...register("age",validationSchema.ageValidator)}></input>
            <p>{errors.age && errors.age.message}</p>
            Phone : <input type='text' {...register("phone",validationSchema.phoneValidator)}></input>
            <p>{errors.phone && errors.phone.message}</p>
            Address : <textarea {...register("add",validationSchema.addValidator)}></textarea>
            <p>{errors.add && errors.add.message}</p>
            
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default FormValidation