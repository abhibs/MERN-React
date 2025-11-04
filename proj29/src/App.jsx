import React, { useState } from 'react'

const App = () => {
  const [list, setList] = useState([])
  const [item, setItem] = useState('')

  const AddToList = () => {
    list.push(item)
    setList([...list])
  }

  return (
    <div>
      <p>{list.length}</p>
      <input
        type='text'
        placeholder='Item'
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={AddToList}>Add</button>
    </div>
  )
}

export default App
