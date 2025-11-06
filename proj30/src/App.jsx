import React, { useState } from 'react'

const App = () => {
  let [formObj, setFormObj] = useState({
    fname: '',
    lname: '',
    city: '',
    gender: '',
  })

  const inputOnChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }))
  }

  const FormSubmit = (e) => {
    e.preventDefault()
    console.log(formObj)
  }

  return (
    <div className='container'>
      <form onSubmit={FormSubmit}>
        <input
          onChange={(e) => {
            inputOnChange('fname', e.target.value)
          }}
          value={formObj.fname}
          placeholder='First Name'
        />
        <input
          onChange={(e) => {
            inputOnChange('lname', e.target.value)
          }}
          value={formObj.lname}
          placeholder='Last Name'
        />
        <select
          onChange={(e) => {
            inputOnChange('city', e.target.value)
          }}
          value={formObj.city}
        >
          <option value=''>Choose City</option>
          <option value='Banglore'>Banglore</option>
          <option value='Shimoga'>Shimoga</option>
          <option value='Shimoga'>Ugser</option>
        </select>
        <input
          onChange={() => {
            inputOnChange('gender', 'Male')
          }}
          type='radio'
          checked={formObj.gender === 'Male'}
          name='gender'
        />
        Male
        <input
          onChange={() => {
            inputOnChange('gender', 'Female')
          }}
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
