import React, { useEffect, useState } from 'react'

const Local = () => {

 const [post , setPost] = useState([]);

 useEffect(()=>{
  getPost()
 },[])


async function getPost(){
  const url="http://localhost:3000/posts";
  let response = await fetch(url);
  response = await response.json();
  console.log(response);
  setPost(response)

 }

  return (
    <div>
      <div className='container'>
       <div className='row mt-5'>
         {
          post.map((post)=>{
           return <div key={post.id} className='mb-4 col-lg-4 col-md-6 col-sm-12 '>
            <div className='card shadow text-center'>
             <div className='card-body'>
               <h1>{post.id}</h1>
               <h1>{post.title}</h1>
               <h4>{post.views}</h4>
             </div>
            </div>
           </div>
          })
         }
       </div>
      </div>
    </div>
  )
}

export default Local
