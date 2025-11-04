import React, { useState } from 'react'

const App = () => {
  const [list, setList] = useState([])
  const [item, setItem] = useState('')

  const AddToList = () => {
    list.push(item)
    setList([...list])
  }

  const removeItem = (index) => {
    alert(index)
  }

  return (
    <div>
      {/* <p>{list.length}</p> */}

      <table>
        <tbody>
          {list.length !== 0 ? (
            list.map((element, index) => {
              return (
                <tr>
                  <td>{element}</td>
                  <td>
                    <button
                      onClick={() => {
                        removeItem(index)
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>

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
