import React, { useState } from 'react';
import './Login.css'; 


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    
    console.log('Login with:', username, password);
  };

  return (
    <div className="login-container" style={{ backgroundimage:'url(wall.png)' }}>
      <div className="login-form">
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <button className="facebook">Facebook</button>
          <button className="google">Google</button>
        </div>
        <div className="login-links">
          <a href="#">Forgot Password?</a>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}



export default Login;
