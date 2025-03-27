import React from 'react'

const login = () => {
  return (
    <div>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>
            <div className='bg-white p-4 rounded border'>
              <input type='email' placeholder='Enter Email' className='form-control mb-3' />
              <input type='password' placeholder='Enter password' className='form-control mb-3' />
              <button className='btn btn-success w-100'>Submit</button>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default login
