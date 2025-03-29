import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EidtProduct = () => {


  const {id} = useParams();
  const changePage = useNavigate("");
    const [title , setTitle] =useState("");
    const [url , setUrl] = useState("");
    const [price , setPrice] = useState("");
    const [discripation ,setDiscripation ] = useState("");

    useEffect(()=>{
      getproduct();
    },[])


    async function eidtProduct(){
      const url = "http://localhost:3000/products";
      let response = await fetch(url+"/"+id , {
        method:"PUT",
        body:JSON.stringify({
          title:title,
          image:url,
          price:price,
          description:discripation
        })
      });
      response = await response.json();
      if(response){
        changePage("/admin")
      }
    }

    async function getproduct(){
      const url = "http://localhost:3000/products";
      let response = await fetch(url+"/"+id);
      response = await response.json();
      setTitle(response.title);
      setUrl(response.image);
      setPrice(response.price);
      setDiscripation(response.description);
      console.log(response)
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
              value={title}
              onChange={(event)=>setTitle(event.target.value)}
               />
            </div>
            <div className='mb-4'>
              <label className='mb-1'>Product Image url</label>
              <input 
              type='url' 
              placeholder='Image' 
              className='form-control'
              value={url}
              onChange={(event)=>setUrl(event.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label className='mb-1'>Product Price</label>
              <input 
              type='number' 
              placeholder='Price' 
              className='form-control'
              value={price}
              onChange={(event)=>setPrice(event.target.value)}
               />
            </div>
            <div className='mb-4'>
              <label className='mb-1'>Product Discripation</label>
              <textarea 
              placeholder='Text' 
              className='form-control' 
              value={discripation}
              onChange={(event)=>setDiscripation(event.target.value)}
              rows={5}
              ></textarea>
            </div>
            <div>
             <button onClick={eidtProduct} className='btn btn-success w-100'>update Product</button>
            </div>
         </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default EidtProduct
