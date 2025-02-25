import React, { useState } from 'react'

const Loop = () => {

 const user=[
  {
   id:1,
   name:"Shahzad",
   age:25,
   from:"Gujranwala"
  },
  {
   id:2,
   name:"Ahmad",
   age:20,
   from:"Lahore"
  },
  {
   id:3,
   name:"Sameer",
   age:23,
   from:"Gujranwala"
  },
  {
   id:4,
   name:"Ali",
   age:20,
   from:"Karachi"
  }
 ]
 
  return (
    <div>
     {
      user.map((data)=>(
        <div key={data.id} style={{border:"2px solid", margin:"30px"}}>
         <h1>Name :{data.name}</h1>
         <h1>Age : {data.age}</h1>
         <h1>From : {data.from}</h1>
        </div>
      ))
     }
    </div>
  )
}

export default Loop
