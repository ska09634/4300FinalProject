import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <h1 className="banner" id="header">My Zoo</h1>
      <Link to='/create-animal'>
        <button className="create-btn">Create</button>
      </Link>
      <Link to='/full-list'>
        <button className="full-btn">Full List</button>
      </Link>
      <Link to='/login'>
        <button className="logout-btn">Logout</button>
      </Link>
      <div className="list">
        <h2>My Animals</h2>
        <ul id="dynamic-list"></ul>
      </div>
    </header>
    
  )
}

export default Header
