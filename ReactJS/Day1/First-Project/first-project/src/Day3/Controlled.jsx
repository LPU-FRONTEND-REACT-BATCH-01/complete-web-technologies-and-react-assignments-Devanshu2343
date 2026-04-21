import React, { useState } from 'react'

const Controlled = () => {
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    gender:"",
    skills:[]
  })


  let handleChange = (e) =>{
    const {value,name,type,checked} = e.target

    if(type==="checkbox"){
      if(checked){
        setFormData({...formData,skills:[...formData.skills,value]})
      }
      else{
        setFormData({...formData,skills:formData.skills.filter((skill)=>skill!==value)})
      }
    }
    else{
      setFormData({...formData,[name]:value}) 
    }  
  }

  const formValidation = {
    uppercase:/[A-Z]/.test(formData.password), 
    lowercase:/[a-z]/.test(formData.password),
    number:/[0-9]/.test(formData.password),
    lengthOfPassword:formData.password.length>=8
  }

  let results = Object.values(formValidation).filter(ele => ele === true)

  console.log(results)



  return (
    <div>
      <form action="">
        Username : <input type="text" name='username' onChange={handleChange} /><br /><br />
        Password : <input type="password" name='password' onChange={handleChange} /><br /><br />

        {results.length < 1 && <p>Weak Password</p>  }
        {results.length < 2 && <p>Medium Password</p> }
        {results.length < 4 && <p>Strong Password</p> }

        <ul>
          <li style={{color:formValidation.uppercase ? "green" : "red"}} >It should Contain atleast one Uppercase</li>
          <li style={{color:formValidation.lowercase? "green" : "red"}} >It should Contain atleast one lowercase</li>
          <li style={{color:formValidation.number ? "green" : "red"}} >It should Contain atleast one number</li>
          <li style={{color:formValidation.lengthOfPassword? "green" : "red"}} >The length should be greater than 8 characters</li>
        </ul>


        Gender: Male <input name='gender' value={"Male"} type="radio" onChange={handleChange} /> 
        Female: <input name='gender' value={"Female"} type="radio" onChange={handleChange} /> <br /><br />

        Skills: React <input name='skills' value={"React"} type="checkbox" onChange={handleChange} />
        CSS <input name='skills' value={"CSS"} type="checkbox" onChange={handleChange} />
        HTML <input name='skills' value={"HTML"} type="checkbox" onChange={handleChange} />
        <input disabled={results.length> 4 ? "false" : "true"} type='submit' />
      </form>
    </div>
  )
}

export default Controlled ;