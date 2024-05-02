import React from 'react'
import '../App.css';

import {  useFormik} from 'formik';
import validationSchema from './validations';

function FormValidations() {
 
    
    const {handleSubmit,handleChange,values,errors,touched,handleBlur} = useFormik({

        initialValues:{
          email:"",
          password:"",
          passwordConfirm:"",
          
        },
        
        onSubmit: (values) => {
          alert(JSON.stringify(values,null,2))
        },
        validationSchema
        
        
      })
  
  
    return (
      <div className="App">
       
  
      
  
      {/* <Form>
  
          <label htmlFor='firstName'>First Name: </label>
          <Field name="firstName" placeHolder="Enter your name" />
          <br/>
          <br/>
  
          <label htmlFor='lastName'>Last Name: </label>
          <Field name="lastName" placeHolder="Enter your last name"/>
          <br/>
          <br/>
  
          <label htmlFor='email'>Email: </label>
          <Field name="email" placeHolder="Enter your email"/>
          <br/>
          <br/>
          <button>Submit</button>
  
  
      </Form> */}

      <h1>Sign Up</h1>
  
            <form onSubmit={handleSubmit}> 
  
  
    
            <label>Email: </label>
            <input onChange={handleChange} onBlur={handleBlur} name="email" value={values.email} placeHolder="Enter your email"/>
            {errors.email && touched.email && <div className='error'>{errors.email}</div>}

            <br/>
            <br/>
  
            <label>Password: </label>
            <input onChange={handleChange} onBlur={handleBlur} type='password'  name="password" value={values.password} placeHolder="Enter your password"/>
           {errors.password && touched.password && <div className='error'>{errors.password}</div>}
            <br/>
            <br/>

            <label>Password confirm: </label>
            <input onChange={handleChange} onBlur={handleBlur} type='password' name="passwordConfirm" value={values.passwordConfirm} placeHolder="Password confirm"/>
            {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
            <br/>
            <br/>

            <br/>
            <br/>
  
            <button>Submit</button>
    
            <br/>
            <br/>
  
            <code>{JSON.stringify(values)}</code>
    
    
            </form>
          
    
  
      </div>
    );
}

export default FormValidations