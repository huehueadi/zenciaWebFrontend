import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API requests
import {
  FaTachometerAlt,
  FaChartBar,
  FaComments,
  FaGlobeAmericas,
} from "react-icons/fa"; // Importing icons from react-icons/fa
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom

function Sidebar() {
  const [sidebarOptions, setSidebarOptions] = useState([]);

  // Fetch the dashboard options from the backend
  useEffect(() => {
    const fetchSidebarOptions = async () => {
      try {
        // Get the token from localStorage or cookies
        const token = localStorage.getItem("authToken");  // Example: Get token from localStorage

        if (token) {
          // Send the token in Authorization header automatically using axios
          const response = await axios.get("https://vercel-bot-0ias.onrender.com/v1/dashboard/options", {
            headers: {
              Authorization: token, // Simply send the token directly
            },
          });

          // If the request is successful, update the sidebar options state
          if (response.data.success) {
            setSidebarOptions(response.data.options);
          }
        } else {
          console.log("No token found");
        }
      } catch (error) {
        console.error("Error fetching sidebar options:", error);
      }
    };

    fetchSidebarOptions();
  }, []);  // Empty array means this effect runs once when the component mounts

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <a
          href="index.html"
          className="app-brand-link"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span
            className="app-brand-logo demo"
            style={{
              marginTop: "20px",
              marginRight: "10px", // Reduced marginRight to decrease space between logo and text
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "var(--bs-primary)" }}>
              <img
                src="/assets/img/zenlogo.png" // Path to your image
                alt="Zencia Logo"
                width={60} // Width of the logo
                height={60} // Height of the logo
                style={{
                  marginTop: "0", // Removed marginTop to reduce space
                  marginRight: "2px", // Reduced marginRight for tighter space
                  marginBottom: "0", // Removed marginBottom to reduce space
                }}
              />
            </span>
          </span>
          <span
            className="app-brand-text demo menu-text fw-semibold ms-2"
            style={{
              marginLeft: "0", // Ensuring no extra space on the left
              marginTop: "0", // Ensuring no extra space on the top
              marginRight: "0px", // This could be further reduced if needed
            }}
          >
            Zencia
          </span>
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {/* Render dynamic sidebar items */}
        {sidebarOptions.map((option, index) => (
          <>
            {/* Render option */}
            <li key={index} className="menu-item">
              <Link to={option.link} className="menu-link">
                {/* Conditionally render icons */}
                {option.name === "Dashboards" && <FaTachometerAlt className="menu-icon" />}
                {option.name === "Chats" && <FaComments className="menu-icon" />}
                {option.name === "Analytics" && <FaChartBar className="menu-icon" />}
                {option.name === "Agent Training" && <FaGlobeAmericas className="menu-icon" />}
                <div data-i18n={option.name}>
                  {option.name} {/* Display the option name */}
                </div>
              </Link>
            </li>

            {/* Insert header after every 3 items */}
            {(index + 1) % 3 === 0 && index + 1 < sidebarOptions.length && (
              <li className="menu-header mt-5">
                <span className="menu-header-text" data-i18n="ChatBot & Training">
                  Others 
                </span>
              </li>
            )}
          </>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;