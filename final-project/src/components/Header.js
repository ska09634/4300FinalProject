import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <h1 className="banner" id="header">My Zoo</h1>
      <Link to='/login'>
      <button className="logout-btn">Logout</button>
      <div className="list">
          <h2>My Animals</h2>
         <ul id="dynamic-list"></ul>
      </div>
      </Link>
    </header>
    
  )
}

export default Header
