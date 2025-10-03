import React, { useRef } from 'react'
const App = () => {
  let myHeadLIne = useRef()

  const change = () => {
    // myHeadLIne.current.innerText =
    //   'Abhiram B S Javalli Tudoor Thirthahalli Shimoga'
    myHeadLIne.current.innerHTML = '<ul><li>Abhi</li><li>Ram</li></ul>'
  }
  return (
    <div>
      <h1 ref={myHeadLIne}></h1>
      <button onClick={change}>Change</button>
    </div>
  )
}

export default App
