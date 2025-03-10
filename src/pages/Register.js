import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState(''); // Store username
  const [password, setPassword] = useState(''); // Store password
  const [errorMessage, setErrorMessage] = useState(''); // Store error message
  const [successMessage, setSuccessMessage] = useState(''); // Store success message
  const [loading, setLoading] = useState(false); // Handle loading state
  const [showPassword, setShowPassword] = useState(false); // Handle password visibility
  const navigate = useNavigate(); // For navigation after successful registration

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    setLoading(true); // Set loading to true when the form is submitted
    
    try {
      // Send registration request to /register endpoint
      const response = await fetch('https://zencia-web-ic1s.vercel.app/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Send username and password
      });

      const data = await response.json(); // Parse the response from the server

      console.log('Registration response:', data); // Log the response to see the structure

      setLoading(false); // Set loading to false when the response is received

      if (data.success) {
        // On successful registration, show success message
        setSuccessMessage('User registered successfully, please login.');
        setErrorMessage(''); // Clear error message if registration is successful

        // You can also optionally store data if needed
        localStorage.setItem('authToken', data.token);

        if (data.payload && data.payload.userId) {
          localStorage.setItem('user', JSON.stringify(data.payload)); // Store user details
          localStorage.setItem('chatbotId', data.payload.userId); // Store chatbotId (userId)
        }

      } else {
        // If registration fails, display error message
        setErrorMessage(data.message || 'Registration failed. Please try again.');
        setSuccessMessage(''); // Clear success message if registration fails
      }
    } catch (error) {
      setLoading(false); // Set loading to false if there's an error
      setErrorMessage('An error occurred while registering. Please try again.');
      setSuccessMessage(''); // Clear success message if there's an error
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="position-relative">
      <div className="authentication-wrapper authentication-basic container-p-y p-4 p-sm-0">
        <div className="authentication-inner py-6">
          {/* Register Card */}
          <div className="card p-md-7 p-1">
            {/* Logo Section */}
            <div className="app-brand justify-content-center mt-5">
  <a href="/" className="app-brand-link gap-2">
  <span style={{ color: "var(--bs-primary)" }}>
            <img
  src="/assets/img/1.svg"
  alt="Zencia Logo"
  width={185}
  height={60}
  style={{
    marginTop: 0,
    marginRight: '2px',
    marginBottom: 0,
    backgroundColor: 'transparent', // Setting background to transparent
    objectFit: 'contain', // If needed to adjust image fit
  }}
/>

            </span>
  </a>
</div>


            {/* Card Body */}
            <div className="card-body mt-1">
              <h4 className="mb-1">Adventure starts here 🚀</h4>
              <p className="mb-5">Make your app management easy and fun!</p>

              {/* Show Success Message */}
              {successMessage && (
                <div className="alert alert-success">
                  {successMessage} <a href="/login">Login here</a>
                </div>
              )}

              {/* Display Error Message */}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

              <form id="formAuthentication" onSubmit={handleSubmit}>
                {/* Username Field */}
                <div className="form-floating form-floating-outline mb-5">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                    required
                  />
                  <label htmlFor="username">Username</label>
                </div>

              {/* Password Field */}
             
              <div className="mb-5 form-floating form-floating-outline">
      <input
        type={showPassword ? 'text' : 'password'} // Toggle between password and text input
        id="password"
        className="form-control"
        name="password"
        placeholder="············"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label htmlFor="password">Password</label>

      {/* Eye icon for showing/hiding the password */}
      <span
        className="cursor-pointer position-absolute"
        style={{
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          border: 'none', // Remove any border
          background: 'transparent', // Remove background if needed
          padding: 0, // Remove padding to make the icon fit better
        }}
        onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
      >
        <i className={showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} />
      </span>
    </div>





                {/* Terms and Conditions Checkbox */}
                <div className="mb-5">
  <div className="form-check mt-2">
    <input className="form-check-input" type="checkbox" id="terms-conditions" required />
    <label className="form-check-label" htmlFor="terms-conditions">
      I agree to
      <a
        href="https://www.zencia.ai/privacy-policy.html"
        target="_blank" // This makes it open in a new tab
        rel="noopener noreferrer" // For security reasons, especially when using target="_blank"
        className="text-decoration-none text-blue"
      >
        privacy policy & terms
      </a>
    </label>
  </div>
</div>


                {/* Submit Button */}
                <div className="mb-5">
                  <button className="btn btn-primary d-grid w-100" type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Sign up'}
                  </button>
                </div>
              </form>

              {/* Link to Login Page */}
              <p className="text-center">
                <span>Already have an account?</span>
                <a href="/login">
                  <span>Sign in instead</span>
                </a>
              </p>
            </div>
          </div>
          {/* Register Card */}

          {/* Image */}
          <img
            alt="mask"
            src="../../assets/img/illustrations/auth-basic-register-mask-light.png"
            className="authentication-image d-none d-lg-block"
            data-app-light-img="illustrations/auth-basic-register-mask-light.png"
            data-app-dark-img="illustrations/auth-basic-register-mask-dark.html"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
