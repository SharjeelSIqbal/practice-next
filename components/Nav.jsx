import Link from 'next/link'
import navStyles from '../styles/Nav.module.css';

const Nav = (props) => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.ul}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
