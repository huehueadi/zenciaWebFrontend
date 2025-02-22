import React from 'react'

function CreateRole() {
  return (
   <div className="content-wrapper">
  {/* Content */}
  <div className="container-xxl flex-grow-1 container-p-y">
    <h4 className="mb-1">Roles List</h4>
    <p className="mb-6">A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what user needs.</p>
    {/* Role cards */}
    <div className="row g-6">
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="mb-0">Total 4 users</p>
              <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Vinnie Mostowy" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/5.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Allen Rieske" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/12.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Julee Rossignol" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/6.png" alt="Avatar" />
                </li>
                <li className="avatar">
                  <span className="avatar-initial rounded-circle pull-up bg-lighter text-body" data-bs-toggle="tooltip" data-bs-placement="bottom" title="3 more">+3</span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="role-heading">
                <h5 className="mb-1">Administrator</h5>
                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#addRoleModal" className="role-edit-modal">
                  <p className="mb-0">Edit Role</p>
                </a>
              </div>
              <a href="javascript:void(0);" className="text-secondary"><i className="ri-file-copy-line ri-22px" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="mb-0">Total 7 users</p>
              <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Jimmy Ressula" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/4.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="John Doe" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/1.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kristi Lawker" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/2.png" alt="Avatar" />
                </li>
                <li className="avatar">
                  <span className="avatar-initial rounded-circle pull-up bg-lighter text-body" data-bs-toggle="tooltip" data-bs-placement="bottom" title="3 more">+3</span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="role-heading">
                <h5 className="mb-1">Editor</h5>
                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#addRoleModal" className="role-edit-modal">
                  <p className="mb-0">Edit Role</p>
                </a>
              </div>
              <a href="javascript:void(0);" className="text-secondary"><i className="ri-file-copy-line ri-22px" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="mb-0">Total 5 users</p>
              <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Andrew Tye" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/6.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Rishi Swaat" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/9.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Rossie Kim" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/12.png" alt="Avatar" />
                </li>
                <li className="avatar">
                  <span className="avatar-initial rounded-circle pull-up bg-lighter text-body" data-bs-toggle="tooltip" data-bs-placement="bottom" title="3 more">+3</span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="role-heading">
                <h5 className="mb-1">Users</h5>
                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#addRoleModal" className="role-edit-modal">
                  <p className="mb-0">Edit Role</p>
                </a>
              </div>
              <a href="javascript:void(0);" className="text-secondary"><i className="ri-file-copy-line ri-22px" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="mb-0">Total 3 users</p>
              <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Karlos" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/3.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Katy Turner" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/9.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Peter Adward" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/15.png" alt="Avatar" />
                </li>
                <li className="avatar">
                  <span className="avatar-initial rounded-circle pull-up bg-lighter text-body" data-bs-toggle="tooltip" data-bs-placement="bottom" title="3 more">+3</span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="role-heading">
                <h5 className="mb-1">Support</h5>
                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#addRoleModal" className="role-edit-modal">
                  <p className="mb-0">Edit Role</p>
                </a>
              </div>
              <a href="javascript:void(0);" className="text-secondary"><i className="ri-file-copy-line ri-22px" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="mb-0">Total 2 users</p>
              <ul className="list-unstyled d-flex align-items-center avatar-group mb-0">
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Kim Merchent" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/10.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Sam D'souza" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/13.png" alt="Avatar" />
                </li>
                <li data-bs-toggle="tooltip" data-popup="tooltip-custom" data-bs-placement="top" title="Nurvi Karlos" className="avatar pull-up">
                  <img className="rounded-circle" src="../../assets/img/avatars/15.png" alt="Avatar" />
                </li>
                <li className="avatar">
                  <span className="avatar-initial rounded-circle pull-up bg-lighter text-body" data-bs-toggle="tooltip" data-bs-placement="bottom" title="3 more">+3</span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="role-heading">
                <h5 className="mb-1">Restricted User</h5>
                <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#addRoleModal" className="role-edit-modal">
                  <p className="mb-0">Edit Role</p>
                </a>
              </div>
              <a href="javascript:void(0);" className="text-secondary"><i className="ri-file-copy-line ri-22px" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-6">
        <div className="card h-100">
          <div className="row h-100">
            <div className="col-5">
              <div className="d-flex align-items-end h-100 justify-content-center">
                <img src="../../assets/img/illustrations/add-new-role-illustration.png" className="img-fluid" alt="Image" width={68} />
              </div>
            </div>
            <div className="col-7">
              <div className="card-body text-sm-end text-center ps-sm-0">
                <button data-bs-target="#addRoleModal" data-bs-toggle="modal" className="btn btn-sm btn-primary mb-4 text-nowrap add-new-role">Add Role</button>
                <p className="mb-0">Add new role,<br /> if it doesn't exist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <h4 className="mt-6 mb-1">Total users with their roles</h4>
        <p className="mb-0">Find all of your company’s administrator accounts and their associate roles.</p>
      </div>
      <div className="col-12">
        {/* Role Table */}
        <div className="card">
          <div className="card-datatable table-responsive">
            <table className="datatables-users table">
              <thead>
                <tr>
                  <th />
                  <th />
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        {/*/ Role Table */}
      </div>
    </div>
    {/*/ Role cards */}
    {/* Add Role Modal */}
    {/* Add Role Modal */}
    <div className="modal fade" id="addRoleModal" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-lg modal-simple modal-dialog-centered modal-add-new-role">
        <div className="modal-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          <div className="modal-body p-0">
            <div className="text-center mb-6">
              <h4 className="role-title mb-2 pb-0">Add New Role</h4>
              <p>Set role permissions</p>
            </div>
            {/* Add role form */}
            <form id="addRoleForm" className="row g-3" onsubmit="return false">
              <div className="col-12 mb-3">
                <div className="form-floating form-floating-outline">
                  <input type="text" id="modalRoleName" name="modalRoleName" className="form-control" placeholder="Enter a role name" tabIndex={-1} />
                  <label htmlFor="modalRoleName">Role Name</label>
                </div>
              </div>
              <div className="col-12">
                <h5 className="mb-6">Role Permissions</h5>
                {/* Permission table */}
                <div className="table-responsive">
                  <table className="table table-flush-spacing">
                    <tbody>
                      <tr>
                        <td className="text-nowrap fw-medium">Administrator Access <i className="ri-information-line" data-bs-toggle="tooltip" data-bs-placement="top" title="Allows a full access to the system" /></td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="selectAll" />
                              <label className="form-check-label" htmlFor="selectAll">
                                Select All
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">User Management</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="userManagementRead" />
                              <label className="form-check-label" htmlFor="userManagementRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="userManagementWrite" />
                              <label className="form-check-label" htmlFor="userManagementWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="userManagementCreate" />
                              <label className="form-check-label" htmlFor="userManagementCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">Content Management</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="contentManagementRead" />
                              <label className="form-check-label" htmlFor="contentManagementRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="contentManagementWrite" />
                              <label className="form-check-label" htmlFor="contentManagementWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="contentManagementCreate" />
                              <label className="form-check-label" htmlFor="contentManagementCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">Disputes Management</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="dispManagementRead" />
                              <label className="form-check-label" htmlFor="dispManagementRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="dispManagementWrite" />
                              <label className="form-check-label" htmlFor="dispManagementWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="dispManagementCreate" />
                              <label className="form-check-label" htmlFor="dispManagementCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">Database Management</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="dbManagementRead" />
                              <label className="form-check-label" htmlFor="dbManagementRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="dbManagementWrite" />
                              <label className="form-check-label" htmlFor="dbManagementWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="dbManagementCreate" />
                              <label className="form-check-label" htmlFor="dbManagementCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">Financial Management</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="finManagementRead" />
                              <label className="form-check-label" htmlFor="finManagementRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="finManagementWrite" />
                              <label className="form-check-label" htmlFor="finManagementWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="finManagementCreate" />
                              <label className="form-check-label" htmlFor="finManagementCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">Reporting</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="reportingRead" />
                              <label className="form-check-label" htmlFor="reportingRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="reportingWrite" />
                              <label className="form-check-label" htmlFor="reportingWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="reportingCreate" />
                              <label className="form-check-label" htmlFor="reportingCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">API Control</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="apiRead" />
                              <label className="form-check-label" htmlFor="apiRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="apiWrite" />
                              <label className="form-check-label" htmlFor="apiWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="apiCreate" />
                              <label className="form-check-label" htmlFor="apiCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">Repository Management</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="repoRead" />
                              <label className="form-check-label" htmlFor="repoRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="repoWrite" />
                              <label className="form-check-label" htmlFor="repoWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="repoCreate" />
                              <label className="form-check-label" htmlFor="repoCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-nowrap fw-medium">Payroll</td>
                        <td>
                          <div className="d-flex justify-content-end">
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="payrollRead" />
                              <label className="form-check-label" htmlFor="payrollRead">
                                Read
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                              <input className="form-check-input" type="checkbox" id="payrollWrite" />
                              <label className="form-check-label" htmlFor="payrollWrite">
                                Write
                              </label>
                            </div>
                            <div className="form-check mb-0 mt-1">
                              <input className="form-check-input" type="checkbox" id="payrollCreate" />
                              <label className="form-check-label" htmlFor="payrollCreate">
                                Create
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Permission table */}
              </div>
              <div className="col-12 d-flex flex-wrap justify-content-center gap-4 row-gap-4">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="reset" className="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
              </div>
            </form>
            {/*/ Add role form */}
          </div>
        </div>
      </div>
    </div>
    {/*/ Add Role Modal */}
    {/* / Add Role Modal */}
  </div>
  {/* / Content */}
  {/* Footer */}
  <footer className="content-footer footer bg-footer-theme">
    <div className="container-xxl">
      <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
        <div className="text-body mb-2 mb-md-0">
          © , made with <span className="text-danger"><i className="tf-icons ri-heart-fill" /></span> by <a href="https://pixinvent.com/" target="_blank" className="footer-link">Pixinvent</a>
        </div>
        <div className="d-none d-lg-inline-block">
          <a href="https://themeforest.net/licenses/standard" className="footer-link me-4" target="_blank">License</a>
          <a href="https://1.envato.market/pixinvent_portfolio" target="_blank" className="footer-link me-4">More Themes</a>
          <a href="https://demos.pixinvent.com/materialize-html-admin-template/documentation/" target="_blank" className="footer-link me-4">Documentation</a>
          <a href="https://pixinvent.ticksy.com/" target="_blank" className="footer-link d-none d-sm-inline-block">Support</a>
        </div>
      </div>
    </div>
  </footer>
  {/* / Footer */}
  <div className="content-backdrop fade" />
</div>

  )
}

export default CreateRole
