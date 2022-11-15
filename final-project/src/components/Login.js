import {Link} from 'react-router-dom'


function Login() {
  return (
    <div className='login-container'>
      <h2>Login Page</h2>
      <form>
        <div className='login-form'>
            <div>
                <label>Email: </label>
                <input type="text" placeholder="Enter Email" name="email" required/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" placeholder="Enter Password" name="password" required/>
            </div>
            <div>
              <Link to='/home'>
                <button type='submit'>Login</button>
              </Link>
            </div>
            <div>
              <Link to='/signup'>
                Sign Up
              </Link>
            </div>
        </div>
      </form>

    </div>
  )
}

export default Login
