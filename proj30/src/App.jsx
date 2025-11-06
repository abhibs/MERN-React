import React, { useState } from 'react'

const App = () => {
  let [formObj] = useState({
    fname: '',
    lname: '',
    city: '',
    gender: '',
  })
  return (
    <div className='container'>
      <form action=''>
        <input value={formObj.fname} placeholder='First Name' />
        <input value={formObj.lname} placeholder='Last Name' />
        <select value={formObj.city}>
          <option value=''>Choose City</option>
          <option value='Banglore'>Banglore</option>
          <option value='Shimoga'>Shimoga</option>
          <option value='Shimoga'>Ugser</option>
        </select>
        <input type='radio' checked={formObj.gender === 'Male'} name='gender' />
        Male
        <input
          checked={formObj.gender === 'Female'}
          type='radio'
          name='gender'
        />
        Female
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
