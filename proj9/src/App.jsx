const App = () => {
  let team = ['Abhiram', 'Lavanya', 'Shruti', 'Vinay']
  return (
    <div>
      <ul>
        {team.map((item, i) => {
          return <li key={i.toString}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App
