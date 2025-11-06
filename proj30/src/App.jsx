import React from 'react'

const App = () => {
  return (
    <div className='container'>
      <form action=''>
        <input placeholder='First Name' />
        <input placeholder='Last Name' />
        <select>
          <option value=''>Choose City</option>
          <option value='Banglore'>Banglore</option>
          <option value='Shimoga'>Shimoga</option>
          <option value='Shimoga'>Ugser</option>
        </select>
        <input type='radio' name='gender' />
        Male
        <input type='radio' name='gender' />
        Female
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
