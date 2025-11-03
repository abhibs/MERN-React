import React, { useRef } from 'react'

const App = () => {
  let apiData = useRef(null)

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products')
    apiData.current = await response.json()
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch API</button>
    </div>
  )
}

export default App
