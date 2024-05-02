import './App.css';
import {  Field, Form,useFormik} from 'formik';

function App() {


    const {handleSubmit,handleChange,values} = useFormik({

      initialValues:{
        firstName:"Jack",
        lastName:"JJ",
        email:"jack@gmail.com",
        gender:"male",
        hobies:["Football"],
        country:"england"
      },
      
      onSubmit: (values) => {
        alert(JSON.stringify(values,null,2))
      }
      
      
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

          <form onSubmit={handleSubmit}> 


          <label htmlFor='firstName'>First Name: </label>
          <input onChange={handleChange} name="firstName" value={values.firstName} placeHolder="Enter your name" />
          <br/>
          <br/>
  
          <label htmlFor='lastName'>Last Name: </label>
          <input onChange={handleChange}  name="lastName" value={values.lastName} placeHolder="Enter your last name"/>
          <br/>
          <br/>
  
          <label htmlFor='email'>Email: </label>
          <input onChange={handleChange}  name="email" value={values.email} placeHolder="Enter your email"/>
          <br/>
          <br/>


          <span>Male</span>
          <input type='radio' name='gender' value="male" onChange={handleChange} checked={values.gender === "male"}/>
          <span>Female</span>
          <input type='radio' name='gender' value="female" onChange={handleChange} checked={values.gender === "female"}/>

          <br/>
          <br/>

          <div>
            
          <input type='checkbox' name='hobies' value="Football" onChange={handleChange} checked={values.hobies.includes("Football")}/>
          <span>Football</span>

          </div>

          <div>
            
            <input type='checkbox' name='hobies' value="Cinema" onChange={handleChange} checked={values.hobies.includes("Cinema")}/>
            <span>Cinema</span>
  
            </div>

            <div>
            
            <input type='checkbox' name='hobies' value="Photography" onChange={handleChange} checked={values.hobies.includes("Photography")}/>
            <span>Photography</span>
  
            </div>

            <br/>
          <br/>

          <select onChange={handleChange} name='country' value={values.country}>
            <option value="turkey">Turkey</option>
            <option value="england">England</option>
            <option value="usa">USA</option>

          </select>

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

export default App;
