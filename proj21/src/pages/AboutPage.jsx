import { useParams } from 'react-router-dom'
import Menu from '../components/Menu'

const AboutPage = () => {
  let { name, address } = useParams()
  return (
    <div>
      <Menu />
      <h1>About Page</h1>
      <h1>Name: {name}</h1>
      <p>Address: {address}</p>
    </div>
  )
}

export default AboutPage
