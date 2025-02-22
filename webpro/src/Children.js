import React from 'react'

const Children = ({children}) => {
  return (
    <div style={{border:"2px solid red" , width:"400px" , margin:"30px auto" , textAlign:"center"}}>
      {children}
    </div>
  )
}

export default Children
