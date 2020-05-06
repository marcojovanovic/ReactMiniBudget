import React,{useState, useEffect, useRef} from 'react'
import validateLogin from './validateLogin'
import FormSubmission from './FormSubmission'

import './form.css'


function Form() {

  const [errors, setErrors]=useState({})
  const [values, setValues]=useState({

      name:'',
      email:'', 
      password:''

  })

  const [submited, isSubmited]=useState(false)
  const mounted = useRef()

  const handleChange=(e)=>{

    setValues({...values, [e.target.name] : e.target.value})
   
  }

  function submit(){

   

    return 'Forma je prosledjena'

  }

  const handleSubmit=(e)=>{

      e.preventDefault()

     setErrors(validateLogin(values))

   

     


     
   setValues({name: '', email: '', password: ''})

  }
    
   

useEffect(() => {

   // console.log(errors)


if(!mounted.current){

 mounted.current = true


} else{


if(Object.keys(errors).length === 0 && isSubmited){
  
      isSubmited(true)
   
   
}

}


}, [errors])

  return (
    <>
    <div className='flex-content'>
      <h1 className='text-center display-4'>Basic React Form</h1>

         { console.log(isSubmited) && <FormSubmission />}

      <div className='card p-5 mt-2'>
      <form onSubmit={handleSubmit} className='form-group' noValidate>

      <div>
        <label htmlFor='email'>Email</label>

     <input 
      type='email'
      placeholder='enter email'
      value={values.email}
      onChange={handleChange}
      name='email'
      className={`form-control ${errors.email ? 'border-error' : ''}  mt-2 mb-2 `}
      />
      {errors.email && <p className='text-warning'>{errors.email}</p>}
      </div>
      <div>

        <label htmlFor='name'>Name</label>

     <input 
      type='text'
      placeholder='enter your Name'
      value={values.name}
      onChange={handleChange}
      name='name'
      className={`form-control ${errors.name ? 'border-error' : ''}  mt-2 mb-2 `}
      />
      {errors.name && <p className='text-warning'>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor='password'>Password</label>

      <input 
      type='password'
      placeholder='enter password'
      value={values.password}
      onChange={handleChange}
      name='password'
      className={`form-control ${errors.email ? 'border-error' : ''}  mt-2 mb-5 `}
    

      />
         {errors.password && <p className='text-warning'>{errors.password}</p>}
      </div>
  

       <button type='submit' className='btn btn-primary btn-block'>Submit</button> 
      </form>
     
     
        </div>
    </div>
    </>
  )
}

export default Form
