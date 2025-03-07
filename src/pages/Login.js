import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    // Make the login API request
    const response = await fetch('https://zencia-web-zeta.vercel.app/v1/get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: email, password }),
    });

    const data = await response.json();

    if (data.success) {
      // If login is successful, store the token and user details in localStorage
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.payload)); // Store the user details

      // Assuming the role is inside the payload and is either 'admin' or 'user'
      const userRole = data.payload.role; 
      localStorage.setItem('userRole', userRole); // Store the user role

      localStorage.setItem('chatbotId', data.payload.userId); // Store chatbotId as userId

      // Redirect based on role
      if (userRole === 'admin') {
        navigate('/admin/dashboard'); // Admins are redirected to admin dashboard
      } else {
        navigate('/dashboard'); // Regular users are redirected to user dashboard
      }
    } else {
      // Handle login failure
      setErrorMessage(data.message);
    }
  } catch (error) {
    // Handle any network or server error
    setErrorMessage('An error occurred while logging in. Please try again.');
    console.error('Login error:', error);
  }
};


  return (
    <div className="position-relative">
      <div className="authentication-wrapper authentication-basic container-p-y p-4 p-sm-0">
        <div className="authentication-inner py-6">
          {/* Login */}
          <div className="card p-md-7 p-1">
            {/* Logo */}
            <div className="app-brand justify-content-center mt-5">
              <a href="/" className="app-brand-link gap-2">
              <span className="app-brand-logo demo">
  <span style={{ color: '#666cff' }}>
    {/* Add your logo or SVG here */}
    <img
      src="/assets/img/zenlogo.png" // Path to your logo image
      alt="Zencia Logo"
      width={40}  // Set the width of the logo
      height={40} // Set the height of the logo
      style={{
        marginTop: '5px', // Adjust top margin if needed
        marginRight: '10px', // Adjust right margin if needed
        marginBottom: '5px', // Adjust bottom margin if needed
      }}
    />
  </span>
</span>

                <span className="app-brand-text demo text-heading fw-semibold">Zenca.Ai</span>
              </a>
            </div>
            {/* /Logo */}
            <div className="card-body mt-1">
              <h4 className="mb-1">Welcome to Zencia.Ai! 👋</h4>
              <p className="mb-5">Please sign-in to your account and start the adventure</p>

              {/* Show error message if login fails */}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

              <form id="formAuthentication" onSubmit={handleSubmit}>
                <div className="form-floating form-floating-outline mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email-username"
                    placeholder="Enter your email or username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                  <label htmlFor="email">Email or Username</label>
                </div>

                {/* <div className="mb-5">
                  <div className="form-password-toggle">
                    <div className="input-group input-group-merge"> */}
                    <div className="form-floating form-floating-outline mb-5">
                    <input
                          type={showPassword ? 'text' : 'password'} // Toggle between password and text
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="············"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                      </div>
                      {/* <span 
                        className="input-group-text cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                      >
                        <i className={showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} /> 
                      </span> */}
                    {/* </div> */}
                  {/* </div>
                </div> */}

                {/* <div className="mb-5 d-flex justify-content-between mt-5">
                  <div className="form-check mt-2">
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" htmlFor="remember-me">
                      Remember Me
                    </label>
                  </div>
                  <a href="auth-forgot-password-basic.html" className="float-end mb-1 mt-2">
                    <span>Forgot Password?</span>
                  </a>
                </div> */}

                <div className="mb-5">
                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>

              <p className="text-center">
  <span>New on our platform?</span>
  <a href="/register">
    <span>Create an account</span>
  </a>
</p>

            </div>
          </div>
          {/* /Login */}
        </div>
      </div>
    </div>
  );
}

export default Login;
