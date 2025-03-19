import React, { useEffect, useState } from 'react'

const Users = () => {

 const [userData , setUserData] = useState([]);
 const [loading , setLoading] = useState(false)

 useEffect(()=>{
  getUser();
  setLoading(true);
 },[])

async function getUser(){
  const url = "https://dummyjson.com/users";
  let response = await fetch(url);
   
  response = await response.json();
  setUserData(response.users);
  setLoading(false);
  console.log(response.users)
 }
  return (
    <div>
     <h1 className='text-center mt-5'>Uers Data </h1>
     <div className='container'>
      <div className='row'>
      {
       !loading?
       userData.map((user)=>{
        return<div className='col-lg-4 col-md-6 col-sm-12 mb-3' key={user.id}>
         <div className='card shadow text-center'>
          <div className='card-body'>
           <img src={user.image} alt='' width="100" height="100" className='rounded-circle' />
          <h3>{user.firstName}</h3>
          <p>Age : {user.age}</p>
          <p>Phone :{user.phone}</p>
          <p>Email :{user.email}</p>
          </div>
         </div>
        </div>
       }):<h1 className='text-center'>Loading.....</h1>
      }
      </div>
     </div>
      
    </div>
  )
}

export default Users
