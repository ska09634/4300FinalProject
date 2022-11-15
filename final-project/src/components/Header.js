const Header = () => {
  return (
    <header>
        <h1 className="banner" id="header">My Zoo</h1>
        <button className="add-btn">Login</button>
        <button className="edit-btn">Logout</button>
        <button className="delete-btn">Signup</button>
        <div className="list">
          <h2>My Animals</h2>
         <ul id="dynamic-list"></ul>
      </div>
    </header>
    
  )
}

export default Header
