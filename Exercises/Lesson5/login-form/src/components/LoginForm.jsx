import PropTypes from 'prop-types';
import './LoginForm.css';

export function LoginForm({ showPassword, setShowPassword}) {

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div>
        <input
          placeholder="Email"
          className="login-input"
        />
      </div>
      <div>
        {showPassword ? (
          <input
            placeholder="Password"
            type="text"
            className="login-input"
          />
        ) : (
          <input
            placeholder="Password"
            type="password"
            className="login-input"
          />
        )}
        <button 
        className="show-button"
        onClick={handleShowPassword}
        >Show
        </button>
      </div>
      <button className="login-button">Login</button>
      <button className="login-button">Sign up</button>
    </>
  );
}

// Add prop-types validation
LoginForm.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  setShowPassword: PropTypes.func.isRequired,
};