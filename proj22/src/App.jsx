import React, { useRef } from 'react'
const App = () => {
  let myHeadLIne = useRef()

  const change = () => {
    myHeadLIne.current.innerText =
      'Abhiram B S Javalli Tudoor Thirthahalli Shimoga'
  }
  return (
    <div>
      <h1 ref={myHeadLIne}></h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default App
