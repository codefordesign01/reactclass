import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom';


const Admin = () => {

  const [prodcut , setProduct]=useState([]);
  
    useEffect(()=>{
      getProducts();
    },[])
  
   async function getProducts(){
      const url = "http://localhost:3000/products";
      let response = await fetch(url);
      response = await response.json();
      console.log(response);
      setProduct(response)
    }


  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-12 text-end mb-5'>
            <Link to="/add-product" className='btn btn-success'>Add New Product</Link>
          </div>
          <div className='col-12'>
            <div className='bg-white shadow p-4 border border-success'>
              <table class="table table-striped table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Price</th>
                    <th scope="col">Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    prodcut && prodcut.map((prodcut)=>{
                      return<tr key={prodcut.id}>
                      <th scope="row">{prodcut.id}</th>
                      <td><img src={prodcut.image} alt='' width="100" /></td>
                      <td>{prodcut.title}</td>
                      <td>$ : {prodcut.price}</td>
                      <td>$ : {prodcut.description}</td>
                      <td>
                        <button className='btn'><i class="fa-solid fa-eye text-success"></i></button>
                        <button className='btn'><i class="fa-solid fa-pen-to-square text-primary"></i></button>
                        <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
                      </td>
                    </tr>
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
