import React, { useEffect } from 'react'

const NewState = ({data , btn , val}) => {

 function changeValue(){
  console.log("value changed");
  
 }
 useEffect(()=>{
  changeValue();
 },[])

  return (
    <div>
      <h1>Value : {data}</h1>
    </div>
  )
}

export default NewState
