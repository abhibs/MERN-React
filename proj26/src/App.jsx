import React, { useRef } from 'react'

const App = () => {
  let apiData = useRef(null)
  let myData = useRef()
  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products')
    apiData.current = await response.json()
  }

  const showData = () => {
    myData.current.innerText = JSON.stringify(apiData.current)
  }

  return (
    <div>
      <p ref={myData}></p>
      <button onClick={fetchData}>Fetch API</button>
      <br />
      <button onClick={showData}>Show Data</button>
    </div>
  )
}

export default App
