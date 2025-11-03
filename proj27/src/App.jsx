import React, { useState } from 'react'

const App = () => {
  let [number, setNumber] = useState(1)

  return (
    <div>
      <h1>Number: {number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  )
}

export default App
