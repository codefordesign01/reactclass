import React from 'react'
import img1 from '../../images/product_01.jpg'
import img2 from '../../images/product_02.jpg'
import img3 from '../../images/product_03.jpg'
import img4 from '../../images/product_04.jpg'
import img5 from '../../images/product_05.jpg'
import img6 from '../../images/product_06.jpg'

const Products = () => {
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
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src={img1} alt="" /></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$25.75</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (24)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src={img2} alt="" /></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$30.25</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (21)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src={img3} alt="" /></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$20.45</h6>
                <p>Sixteen Clothing is free CSS template provided by TemplateMo.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (36)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src={img4} alt="" /></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$15.25</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (48)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src={img5} alt="" /></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$12.50</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (16)</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="product-item">
              <a href="/"><img src={img6} alt="" /></a>
              <div className="down-content">
                <a href="/"><h4>Tittle goes here</h4></a>
                <h6>$22.50</h6>
                <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                <ul className="stars">
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                  <li><i className="fa fa-star"></i></li>
                </ul>
                <span>Reviews (32)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Products
