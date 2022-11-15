import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className="signup-container">
      <h2>Signup Page</h2>
      <form>
        <div className='signup-form'>
            <div>
                <label>First Name: </label>
                <input type="text" placeholder="Enter First Name" name="firstname" required/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" placeholder="Enter Last Name" name="lastname" required/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" placeholder="Enter Email" name="email" required/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" placeholder="Enter Password" name="password" required/>
            </div>
            <div>
              <Link to='/login'>
                <button type='submit'>Signup</button>
              </Link>
            </div>
        </div>
      </form>
    </div>
  )
}

export default Signup
