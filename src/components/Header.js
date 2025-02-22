import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Link } from 'react-router-dom'; // Import Link for routing

function Header() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate(); // Use useNavigate for navigation

  // Function to extract username from localStorage
  const getUsernameFromLocalStorage = () => {
    const user = localStorage.getItem('user'); // Retrieve user object from localStorage
    if (user) {
      const parsedUser = JSON.parse(user);
      return parsedUser.username; // Extract username from the parsed object
    }
    return 'John Doe'; // Fallback if no user is found
  };

  // Set the username from localStorage when the component mounts
  useEffect(() => {
    const user = getUsernameFromLocalStorage();
    setUsername(user); // Update the state with the username
  }, []); // Empty array ensures this effect runs once when the component mounts

  // Logout function
  const handleLogout = () => {
    // Remove token, user data, and chatbotId from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    localStorage.removeItem('chatbotId'); // Remove chatbotId from localStorage

    // Redirect to the lock screen (login page)
    navigate('/login'); // Change '/login' to the correct route for your lock screen
  };

  return (
    <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
          <i className="ri-menu-fill ri-22px" />
        </a>
      </div>
      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* User */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
              <div className="avatar avatar-online">
                <img src="../../assets/img/avatars/1.png" alt className="rounded-circle" />
              </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="pages-account-settings-account.html">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar avatar-online">
                        <img src="../../assets/img/avatars/1.png" alt className="rounded-circle" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      {/* Replace hardcoded "John Doe" with dynamic username */}
                      <span className="fw-medium d-block small">{username}</span>
                      <small className="text-muted">Admin</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider" />
              </li>
              <li>
                {/* My Profile Link - updated */}
                <Link className="dropdown-item" to="/user-profile">
                  <i className="ri-user-3-line ri-22px me-3" /><span className="align-middle">My Profile</span>
                </Link>
              </li>
              <li>
                <a className="dropdown-item" href="pages-account-settings-account.html">
                  <i className="ri-settings-4-line ri-22px me-3" /><span className="align-middle">Settings</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages-account-settings-billing.html">
                  <span className="d-flex align-items-center align-middle">
                    <i className="flex-shrink-0 ri-file-text-line ri-22px me-3" />
                    <span className="flex-grow-1 align-middle">Billing</span>
                    <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger">4</span>
                  </span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="pages-pricing.html">
                  <i className="ri-money-dollar-circle-line ri-22px me-3" /><span className="align-middle">Pricing</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="pages-faq.html">
                  <i className="ri-question-line ri-22px me-3" /><span className="align-middle">FAQ</span>
                </a>
              </li>
              {/* Logout option */}
              <li>
                <div className="d-grid px-4 pt-2 pb-1">
                  <button
                    className="btn btn-sm btn-danger d-flex"
                    onClick={handleLogout} // Handle logout on click
                  >
                    <small className="align-middle">Logout</small>
                    <i className="ri-logout-box-r-line ms-2 ri-16px" />
                  </button>
                </div>
              </li>
            </ul>
          </li>
          {/*/ User */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
