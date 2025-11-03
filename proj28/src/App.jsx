import React, { useState } from 'react'

const App = () => {
  const [myObj] = useState({
    key1: 'Abhi 1',
    key2: 'Abhi 2',
    key3: 'Abhi 3',
  })

  return (
    <div>
      <h1>Number: {myObj.key1}</h1>
      <h1>Number: {myObj.key2}</h1>
      <h1>Number: {myObj.key3}</h1>
      <button onClick=''>Click</button>
    </div>
  )
}

export default App
