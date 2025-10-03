import { Link, NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <ul>
        {/* <li>
          <Link to='/'>Home</Link>
        </li> */}

        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        {/* <li>
          <Link to='/about'>About</Link>
        </li> */}
        <li>
          <NavLink to='/about/Abhiram/Javalli Tudoor Thirthahalli'>
            About
          </NavLink>
        </li>

        {/* <li>
          <Link to='/contact'>Contact</Link>
        </li> */}
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Menu
