import React, { useRef } from 'react'

const App = () => {
  let myImg = useRef()

  const change = () => {
    myImg.current.src = 'https://placehold.co/600x400/000000/ffffff'
    myImg.current.setAttribute('height', '400px')
    myImg.current.setAttribute('width', '400px')
  }
  return (
    <div>
      <img ref={myImg} src='https://placehold.co/600x400' alt='' />
      <br />
      <br />
      <br />
      <button onClick={change}>Change</button>
    </div>
  )
}

export default App
