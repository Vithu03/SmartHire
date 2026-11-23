import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="auth-container">

      <div className="auth-box">

        <h2>Forgot Password?</h2>

        <p>Enter your email to reset your password.</p>

        <form onSubmit={(e) => {
          e.preventDefault();
          alert("Password reset request submitted!");
        }}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <button type="submit">Reset Password</button>

        </form>

        <p className="auth-switch">
          Remember your password? <Link to="/login">Login</Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;