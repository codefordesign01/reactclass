import React, { useEffect, useState } from 'react'

const State = () => {

 const [counter,setCounter]=useState(0);
 const [data , setData] =useState(0)


  function handelChange(){
   console.log("function called"); 
  }

 useEffect(()=>{
  handelChange();
 },[counter , data])
  


  return (
    <div>
      <h1>State Component</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
      <button onClick={()=>setData(data-1)}>Counter {data}</button>
    </div>
  )
}

export default State
