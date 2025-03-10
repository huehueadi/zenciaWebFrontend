import React, { useState, useEffect } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa"; // Import all FA icons
import { Link } from "react-router-dom";
import "./Sidebar.css"

function Sidebar() {
  const [sidebarOptions, setSidebarOptions] = useState([]);

  useEffect(() => {
    const fetchSidebarOptions = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (token) {
          const response = await axios.get("https://zencia-web-ic1s.vercel.app/v1/dashboard/options", {
            headers: {
              Authorization: token,
            },
          });

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
  }, []);

  // Render the dynamic icon component
  const renderIcon = (iconName) => {
    // If icon name is provided, use it
    if (iconName && FaIcons[iconName]) {
      const IconComponent = FaIcons[iconName];
      return <IconComponent className="menu-icon" />;
    }
    
    // Default icon if none specified
    return <FaIcons.FaTachometerAlt className="menu-icon" />;
  };

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
              marginRight: "10px",
              marginBottom: "20px",
            }}
          >
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
          </span>
        </a>
      </div>

      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {sidebarOptions.map((option, index) => (
          <React.Fragment key={index}>
            <li className="menu-item">
              <Link to={option.link} className="menu-link">
                {renderIcon(option.icon)}
                <div data-i18n={option.name}>
                  {option.name}
                </div>
              </Link>
            </li>

            {(index + 1) % 3 === 0 && index + 1 < sidebarOptions.length && (
              <li className="menu-header mt-5">
                <span className="menu-header-text" data-i18n="ChatBot & Training">
                  Others 
                </span>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;