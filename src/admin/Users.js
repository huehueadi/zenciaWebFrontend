import React, { useEffect, useState } from "react";
import axios from "axios";

function UserRoles() {
  // State to store user data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalMessages: 0,
    totalSessions: 0,
    totalChatbots: 0,
  });

  useEffect(() => {
    // Function to fetch user data and stats
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");

        if (!token) {
          console.error("No token found!");
          return;
        }

        // Fetch users data
        const userResponse = await axios.get(
          "https://vercel-bot-0ias.onrender.com/v1/admin/users",
          {
            headers: {
              Authorization: `${token}`, // Attach token in Authorization header
            },
          }
        );

        if (userResponse.data.success) {
          setUsers(userResponse.data.users);
        }

        // Fetch stats data
        const statsResponse = await axios.get(
          "https://vercel-bot-0ias.onrender.com/v1/admin/getstats",
          {
            headers: {
              Authorization: `${token}`, // Attach token in Authorization header
            },
          }
        );

        if (statsResponse.data) {
          setStats({
            totalMessages: statsResponse.data.totalMessages,
            totalSessions: statsResponse.data.totalSessions,
            totalChatbots: statsResponse.data.totalChatbots,
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop loading once the request completes
      }
    };

    fetchData();
  }, []);

  // Function to render user rows dynamically
  const renderUserRows = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.username}</td> {/* Username */}
        <td>{user.userid}</td> {/* Chatbot ID */}
        <td>{user.email || "N/A"}</td> {/* Email */}
        <td>{user.role}</td> {/* Role */}
        <td>{new Date(user.createdAt).toLocaleDateString()}</td>{" "}
        {/* Created At */}
      </tr>
    ));
  };

  return (
    <div className="content-wrapper">
      {/* Content */}
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row g-6 mb-6">
          <div className="row g-6 mb-6">
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="me-1">
                      <p className="text-heading mb-1">Session</p>
                      <div className="d-flex align-items-center">
                        <h4 className="mb-1 me-2">
                          {loading ? "Loading..." : stats.totalSessions}
                        </h4>
                      </div>
                      <small className="mb-0">Total Sessions</small>
                    </div>
                    <div className="avatar">
                      <div className="avatar-initial bg-label-primary rounded-3">
                        <div className="ri-group-line ri-26px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="me-1">
                      <p className="text-heading mb-1">Messages</p>
                      <div className="d-flex align-items-center">
                        <h4 className="mb-1 me-1">
                          {loading ? "Loading..." : stats.totalMessages}
                        </h4>
                      </div>
                      <small className="mb-0">Total Messages</small>
                    </div>
                    <div className="avatar">
                      <div className="avatar-initial bg-label-danger rounded-3">
                        <div className="ri-user-add-line ri-26px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="me-1">
                      <p className="text-heading mb-1">Users</p>
                      <div className="d-flex align-items-center">
                        <h4 className="mb-1 me-1">
                          {loading ? "Loading..." : users.length}
                        </h4>
                      </div>
                      <small className="mb-0">Total Users</small>
                    </div>
                    <div className="avatar">
                      <div className="avatar-initial bg-label-success rounded-3">
                        <div className="ri-user-follow-line ri-26px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="me-1">
                      <p className="text-heading mb-1">Chatbots</p>
                      <div className="d-flex align-items-center">
                        <h4 className="mb-1 me-1">
                          {loading ? "Loading..." : stats.totalChatbots}
                        </h4>
                      </div>
                      <small className="mb-0">Total Chatbots</small>
                    </div>
                    <div className="avatar">
                      <div className="avatar-initial bg-label-warning rounded-3">
                        <div className="ri-user-search-line ri-26px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>

        {/* Users List Table */}
        <div className="card">
          <div className="card-header border-bottom">
            <h5 className="card-title mb-0">Filters</h5>
            <div className="d-flex justify-content-between align-items-center row gx-5 pt-4 gap-5 gap-md-0">
              <div className="col-md-4 user_role" />
              <div className="col-md-4 user_plan" />
              <div className="col-md-4 user_status" />
            </div>
          </div>

          <div className="card-datatable table-responsive">
            <table className="datatables-users table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Chatbot ID</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" className="text-center">
                      Loading...
                    </td>
                  </tr>
                ) : (
                  renderUserRows() // Render the rows dynamically
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Offcanvas to add new user */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasAddUser"
          aria-labelledby="offcanvasAddUserLabel"
        >
          <div className="offcanvas-header border-bottom">
            <h5 id="offcanvasAddUserLabel" className="offcanvas-title">
              Add User
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body mx-0 flex-grow-0 h-100">
            <form
              className="add-new-user pt-0"
              id="addNewUserForm"
              onsubmit="return false"
            >
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="text"
                  className="form-control"
                  id="add-user-fullname"
                  placeholder="John Doe"
                  name="userFullname"
                  aria-label="John Doe"
                />
                <label htmlFor="add-user-fullname">Full Name</label>
              </div>
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="text"
                  id="add-user-email"
                  className="form-control"
                  placeholder="john.doe@example.com"
                  aria-label="john.doe@example.com"
                  name="userEmail"
                />
                <label htmlFor="add-user-email">Email</label>
              </div>
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="text"
                  id="add-user-contact"
                  className="form-control phone-mask"
                  placeholder="+1 (609) 988-44-11"
                  aria-label="john.doe@example.com"
                  name="userContact"
                />
                <label htmlFor="add-user-contact">Contact</label>
              </div>
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="text"
                  id="add-user-company"
                  className="form-control"
                  placeholder="Web Developer"
                  aria-label="jdoe1"
                  name="companyName"
                />
                <label htmlFor="add-user-company">Company</label>
              </div>

              <div className="form-floating form-floating-outline mb-5">
                <select id="user-role" className="form-select">
                  <option value="subscriber">Subscriber</option>
                  <option value="editor">Editor</option>
                  <option value="maintainer">Maintainer</option>
                  <option value="author">Author</option>
                  <option value="admin">Admin</option>
                </select>
                <label htmlFor="user-role">User Role</label>
              </div>
              <div className="form-floating form-floating-outline mb-5">
                <select id="user-plan" className="form-select">
                  <option value="basic">Basic</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="company">Company</option>
                  <option value="team">Team</option>
                </select>
                <label htmlFor="user-plan">Select Plan</label>
              </div>
              <button
                type="submit"
                className="btn btn-primary me-sm-3 me-1 data-submit"
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-outline-secondary"
                data-bs-dismiss="offcanvas"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
        {/* Add Offcanvas component here */}
      </div>
      {/* / Content */}
      <div className="content-backdrop fade" />
    </div>
  );
}

export default UserRoles;
