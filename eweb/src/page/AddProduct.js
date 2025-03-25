import React, { useState  } from 'react'
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {

  const changePage = useNavigate();

  const [title , setTitle] =useState("");
  const [url , setUrl] = useState("");
  const [price , setPrice] = useState("");
  const [discripation ,setDiscripation ] = useState("");




async function addProduct(){
  const api = "http://localhost:3000/products";

  let response = await fetch(api , {
    method:"POST",
    body:JSON.stringify({
      title:title,
      price:price,
      description:discripation,
      image:url
    })
  });
  response = await response.json();
  if(response){
    alert("add Product success");
    changePage("/admin")
  }
   
  }

  return (
    <div>
      <div className='container py-5'>
       <div className='row justify-content-center'>
        <div className='col-12 mb-3 text-center'>
         <h2>Add Your New Product</h2>
        </div>
        <div className='col-lg-6 col-md-8 col-sm-12'>
         <div className='bg-white shadow p-4 border border-success rounded'>
            <div className='mb-4'>
              <label className='mb-1'>Enter Product Title</label>
              <input 
              type='text'
              placeholder='Title' 
              className='form-control'
              onChange={(event)=>setTitle(event.target.value)}
               />
            </div>
            <div className='mb-4'>
              <label className='mb-1'>Product Image url</label>
              <input 
              type='url' 
              placeholder='Image' 
              className='form-control'
              onChange={(event)=>setUrl(event.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='mb-1'>Product Price</label>
              <input 
              type='number' 
              placeholder='Price' 
              className='form-control'
              onChange={(event)=>setPrice(event.target.value)}
               />
            </div>
            <div className='mb-4'>
              <label className='mb-1'>Product Discripation</label>
              <textarea 
              placeholder='Text' 
              className='form-control' 
              onChange={(event)=>setDiscripation(event.target.value)}
              rows={5}
              ></textarea>
            </div>
            <div>
             <button onClick={addProduct} className='btn btn-success w-100'>Add Product</button>
            </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default AddProduct
