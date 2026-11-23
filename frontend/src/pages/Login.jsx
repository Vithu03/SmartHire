import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
  e.preventDefault();

  // Admin Login
  if (
    email === 'admin@smarthire.com' &&
    password === 'Admin123'
  ) {
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ email, role: 'admin' })
    );

    alert('Admin Login Successful!');
    navigate('/admin-dashboard');
    return;
  }

  // Normal User Login
  const users = JSON.parse(
    localStorage.getItem('users') || '[]'
  );

  const matchedUser = users.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (matchedUser) {
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({ ...matchedUser, role: 'user' })
    );

    alert('User Login Successful!');
    navigate('/dashboard');
  } else {
    alert('Invalid Email or Password!');
  }
};

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>Welcome Back!</h2>

        <p>Login to your SmartHire account</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
         <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>
          <label>Password</label>
          <input
  type="password"
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

          <div className="forgot-password">
           <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit">Login</button>
        </form>

        <p className="auth-switch">
  Don't have an account? <Link to="/register">Register</Link>
</p>

      </div>

    </div>
  );
}

export default Login;