import React from 'react'
import styled from 'styled-components'


const UserProfile = () => {

 const H=styled.h1`
  background:yellow;
  color:black;
  margin:20px;
  padding:20px;
  border:2px solid red;
 `

 const Mybtn=styled.button`
 padding:10px 30px;
 border-radius:10px;
 border:none;
 background-color:blue;
 color:white
 `
  const MZ = styled.span `
  font-size:40px;
  font-weight:700;
  background-color:lightBlue;
  display:block
  `

  return (
    <div>
     <H>My new Styled Component</H>
     <H>Lorem ipsum dolor sit amet.</H>
     <MZ>Shahzad</MZ>
     <MZ>Lorem, ipsum.</MZ>
     <Mybtn>click</Mybtn>
     <Mybtn>Read more</Mybtn>
      <h1>User Profile component</h1>
      <h1>User Profile component</h1>
    </div>
  )
}

export default UserProfile
