const App = () => {
  let mark = 23
  return (
    <div>
      {(() => {
        if (mark >= 80 && mark <= 100) {
          return <h1>A + </h1>
        } else if (mark >= 70 && mark < 80) {
          return <h1>A</h1>
        } else if (mark >= 60 && mark < 70) {
          return <h1>B+</h1>
        } else if (mark >= 50 && mark < 60) {
          return <h1>B</h1>
        } else if (mark >= 40 && mark < 50) {
          return <h1>C+</h1>
        } else {
          return <h1>Fail</h1>
        }
      })()}
    </div>
  )
}

export default App
