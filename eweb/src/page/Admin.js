import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './login'



const Admin = () => {

  const [prodcut, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const handleClose = () => setShow(false);

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);
  const [error , setError] = useState("");
  const url = "http://localhost:3000/products";

  useEffect(() => {
    getProducts();
  }, [])

  async function getProducts() {
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setProduct(response)
  }

  async function deleteProduct(id) {
    let response = await fetch(url + "/" + id, {
      method: "DELETE"
    });
    response = await response.json();
    if (response) {
      alert("your Product Delete");
      getProducts();
    }

  }

  const productShow = async (id) => {
    setShow(true);
    let response = await fetch(url + "/" + id);
    response = await response.json();
    setSingleProduct(response)
    console.log(response)
  };

  async function checkLogin() {
    const api = "http://localhost:3000/user";
    let response = await fetch(api);
    response = await response.json();
    setUser(response[0]);

    if (username === user.username && password === user.password) {
      setCheck(true)
    }
    else{
      setError("Your login is not valid try again")
    }
  }

  return (
    <div>
      {
        check ?
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
                        prodcut && prodcut.map((prodcut) => {
                          return <tr key={prodcut.id}>
                            <th scope="row">{prodcut.id}</th>
                            <td><img src={prodcut.image} alt='' width="100" /></td>
                            <td>{prodcut.title}</td>
                            <td>$ : {prodcut.price}</td>
                            <td>$ : {prodcut.description}</td>
                            <td>
                              <button onClick={() => productShow(prodcut.id)} className='btn'><i class="fa-solid fa-eye text-success"></i></button>
                              <Link to={"/eidt-product/" + prodcut.id} className='btn'><i class="fa-solid fa-pen-to-square text-primary"></i></Link>
                              <button onClick={() => deleteProduct(prodcut.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
                            </td>
                          </tr>
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> :
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
                <div className='bg-white p-4 rounded border shadow'>
                  <input type='email' placeholder='Enter username' className='form-control mb-3' onChange={(event) => setUsername(event.target.value)} />
                  <input type='password' placeholder='Enter password' className='form-control mb-3' onChange={(event) => setPassword(event.target.value)} />
                  <button onClick={checkLogin} className='btn btn-success w-100'>login</button>
                  {error && <div className='text-danger text-center'>{error}</div>}
                </div>
              </div>
            </div>
          </div>
      }



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={singleProduct.image} alt='' width="100%" />
          <h2>Product title</h2>
          <h2 className='text-primary'>{singleProduct.title}</h2>
          <h5>Price : $<span className='text-success'>{singleProduct.price}</span></h5>
          <p className=''>
            {singleProduct.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Admin
