import './App.css'

const App = () => {
  return (
    <div>
      <h1>Abhiram B S</h1>
      <h1>{2 + 4}</h1>
      <br />
      <img src='https://abhibs.in/storage/about/1824290004760266.jpg' alt='' />
      <h1>
        {new Date().getHours()}:{new Date().getMinutes()}
      </h1>
      <p className='abhiram'>Abhiram</p>
      <p style={{ color: 'red', background: 'blue' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum
        obcaecati ad iste veritatis eligendi.
      </p>
      <button onClick={() => alert('Hello Abhiram!')}>Click Me</button>
    </div>
  )
}

export default App
