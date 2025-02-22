import React from 'react';

function Leads() {
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card">
          <h5 className="card-header">Leads</h5>
          <div className="table-responsive text-nowrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Client</th>
                  <th>Users</th>
                  <th>Username</th> {/* Added Username column */}
                  <th>Email</th> {/* Added Email column */}
                  <th>Contact</th> {/* Added Contact column */}
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="table-border-bottom-0">
                <tr>
                  <td>Albert Cook</td>
                  <td>
                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                        <img src="../../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                        <img src="../../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                        <img src="../../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td>albert_cook01</td> {/* Added Username */}
                  <td>albert.cook@example.com</td> {/* Added Email */}
                  <td>(123) 456-7890</td> {/* Added Contact */}
                  <td><span className="badge rounded-pill bg-label-primary me-1">Active</span></td>
                </tr>
                <tr>
                  <td>Barry Hunter</td>
                  <td>
                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Lilian Fuller">
                        <img src="../../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Sophia Wilkerson">
                        <img src="../../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                      </li>
                      <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" className="avatar avatar-xs pull-up" title="Christina Parker">
                        <img src="../../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                      </li>
                    </ul>
                  </td>
                  <td>barry_hunter98</td> {/* Added Username */}
                  <td>barry.hunter@example.com</td> {/* Added Email */}
                  <td>(234) 567-8901</td> {/* Added Contact */}
                  <td><span className="badge rounded-pill bg-label-success me-1">Completed</span></td>
                </tr>
                {/* Repeat for other rows */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="content-footer footer bg-footer-theme">
  <div className="container-xxl">
    <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
      <div className="text-body mb-2 mb-md-0">
        © 2025, All rights reserved to <strong>Zencia</strong>
      </div>
      <div className="d-none d-lg-inline-block">
        <a href="#" className="footer-link me-4" target="_blank">Terms & Contions</a>
        <a href="https://pixinvent.ticksy.com/" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Leads;
