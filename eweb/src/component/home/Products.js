import React, { useEffect, useState } from 'react'

const Products = () => {

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
       <div className="latest-products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Latest Products</h2>
              <a href="products.html">view all products <i className="fa fa-angle-right"></i></a>
            </div>
          </div>
          {
            prodcut && prodcut.map((prodcut)=>{
              return<div className="col-md-4" key={prodcut.id}>
              <div className="product-item shadow">
                <a href="/"><img src={prodcut.image} alt="" height="250" /></a>
                <div className="down-content">
                  <a href="/"><h4>{prodcut.title}</h4></a>
                  <h6>${prodcut.price}</h6>
                  <p>{prodcut.description}</p>
                  <ul className="stars">
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                  </ul>
                </div>
              </div>
            </div>
            })
          }
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default Products
