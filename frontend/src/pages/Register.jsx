import { Link } from 'react-router-dom';
import { useState } from 'react';
function Register() {
  const [fullName, setFullName] = useState('');
  const handleRegister = (e) => {
  e.preventDefault();

  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }

  const users = JSON.parse(
    localStorage.getItem('users') || '[]'
  );

  const existingUser = users.find(
    (user) => user.email === email
  );

  if (existingUser) {
    alert('Email already registered!');
    return;
  }

  const newUser = {
    fullName,
    email,
    password
  };

  users.push(newUser);

  localStorage.setItem('users', JSON.stringify(users));

  alert('Registration Successful!');
};
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>Create Account</h2>

        <p>Join SmartHire and find your dream job</p>

      <form onSubmit={handleRegister}>

          <label>Full Name</label>
          <input
  type="text"
  placeholder="Enter your full name"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}
  required
/>

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
  placeholder="Create a password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

          <label>Confirm Password</label>
          <input
  type="password"
  placeholder="Confirm your password"
  value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
  required
/>

          <button type="submit">Register</button>

        </form>

        <p className="auth-switch">
  Already have an account? <Link to="/login">Login</Link>
</p>

      </div>

    </div>
  );
}

export default Register;