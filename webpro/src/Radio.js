import React, { useState } from 'react'

const Radio = () => {
 const [gendel , setGendel] =useState('male');
 const [book , setBook]= useState('Urdu')
  return (
    <div>
      <h1>Radio compontnt</h1>
       <h2>Selcet Gendel</h2>


      <input type='radio' id='male' name='gendel' value={'male'} onChange={(event)=>setGendel(event.target.value)} checked={gendel === 'male'} />
      <label htmlFor='male'>Male</label>

      <input type='radio' id='female' name='gendel' value={'female'} onChange={(event)=>setGendel(event.target.value)} checked={gendel === 'female'} />
      <label htmlFor='female'>Female</label>


      <h1>Selected Value :{gendel}</h1>



      <select defaultValue={book} onChange={(event)=>setBook(event.target.value)}>
       <option value={'English'}>English</option>
       <option value={'Urdu'}>Urdu</option>
       <option value={'Math'}>Math</option>
       <option value={'Computer'}>Computer</option>
      </select>



      <h1>Select book : {book}</h1>
    </div>
  )
}

export default Radio
