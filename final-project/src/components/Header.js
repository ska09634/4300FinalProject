import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1 className="banner" id="header">My Zoo</h1>
        <Link to='/login'>
          <button className="logout-btn">Logout</button>
        </Link>
    </header>
  )
}

export default Header
