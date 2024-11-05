import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const FormComponent = () => {
  const [name , setName] = useState ('')
  const [email , setEmail] = useState ('')
  const [age , setAge] = useState ('')
  
  const [nameErr , setNameErr] = useState ()
  const [emailErr , setEmailErr] = useState ()
  const [ageErr , setAgeErr] = useState ()
  
  
  const formSubmit = (e) => {
    e.preventDefault()
    if (name === '') {
      setNameErr(true)
    }
    if (email === '') {
      setEmailErr(true)
    }
    if (age === '') {
      setAgeErr(true)
    } else {
      Swal.fire({
        title: 'Success!',
        text: 'Form submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
      })
      setName('')
      setEmail('')
      setAge('')
    }
  };
  useEffect (() => {
    if (name !== "")
      setNameErr()
    
    }
    
   , [name])
  useEffect (() => {
    if (email !== "")
      setEmailErr()
    
    }
    
   , [email])
  useEffect (() => {
    if (age !== "")
      setAgeErr()
    
    }
    
   , [name, age, age]);
   
  
  return (
    <>
    <div className="d-flex justify-content-center align-items-center vh-100">

      <form onSubmit={formSubmit} className=' border w-50 m-5 larger shadow text-white rounded-3 p-5'>
      <div className=''>
      <TextField size='small' value={name} onChange={(e) => setName(e.target.value)} type='text' className='w-100 bg-white rounded-2' id="outlined-basic" label="Enter your name" variant="outlined" />
        {nameErr && <p className='text-danger fs-5'> Name is empty </p> }
      </div>
      <div className='my-5'>      
      <TextField size='small' label="Email *"  value={email} onChange={(e) => setEmail(e.target.value)} type='email' id="outlined-basic" fullWidth variant="outlined" />
      {emailErr && <p className='text-danger fs-5'> Email is empty. </p> }
      </div>
      <div className=''>
      <TextField size='small' value={age} onChange={(e) => setAge(e.target.value)} type='number' fullWidth  id="outlined-basic" label="Age *" variant="outlined" />
      {ageErr &&<p className='text-danger fs-5'> Age is empty</p>}
      </div>
      <div className='mt-5 text-center'>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      </div>
  
      </form>
  
    </div>
    </>
  )


}
export default FormComponent;


