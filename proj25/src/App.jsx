import React, { useRef } from 'react'

const App = () => {
  let headLine = useRef()

  const change = () => {
    headLine.current.classList.remove('text-primary')
    headLine.current.classList.add('text-success')
  }
  return (
    <div>
      <h1 className='text-primary' ref={headLine}>
        Abhiram B S Javalli Tudoor
      </h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default App
