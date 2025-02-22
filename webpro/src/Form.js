import React, { useState } from 'react'

const Form = () => {
 const [name , setName]=useState();
 const [email , setEmail]=useState();
 const [skill , setSkill] = useState([]);


 function skillHandel(event){
  console.log(event.target.value , event.target.checked)

  if(event.target.checked){
   setSkill([...skill,event.target.value])
  }
  else{
   setSkill([...skill.filter((i)=>i !== event.target.value)])
  }
 }
  return (
    <div>
      <h1>Form Component</h1>

      <form>
       <input type='text' onChange={(event)=>setName(event.target.value)} placeholder='Enter Name' value={name} />
       <input  type='email' onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Name' value={email}  />

       <h3>{name}</h3>
       <h3>{email}</h3>

       <h3>Selct Any Skill</h3>

       <input value="Html" type='checkbox' id='html' onChange={skillHandel}  />
       <label htmlFor='html'>HTML</label>

       <input value="Css" type='checkbox' id='css' onChange={skillHandel}  />
       <label htmlFor='css'>CSS</label>

       <input value="Js" type='checkbox' id='js' onChange={skillHandel}  />
       <label htmlFor='js'>Js</label>

       <input value="React" type='checkbox' id='react' onChange={skillHandel}  />
       <label htmlFor='react'>HTML</label>

       <select>
        <option>book 1</option>
        <option>book 1</option>
       </select>




       <h2>{skill.toString()}</h2>
      </form>
      <button onClick={()=>{setName("");setEmail("")}}>clear</button>
    </div>
  )
}

export default Form
