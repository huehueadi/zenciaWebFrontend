import React from 'react'

function UserProfile() {
  return (
<div>
  <br/>  <br/>

  <div className="row gy-6 gy-md-0">
    {/* User Sidebar */}
    <div className="col-xl-4 col-lg-5 col-md-5 order-1 order-md-0">
      {/* User Card */}
      <div className="card mb-6">
        <div className="card-body pt-12">
          <div className="user-avatar-section">
            <div className=" d-flex align-items-center flex-column">
              <img className="img-fluid rounded-3 mb-4" src="../../assets/img/avatars/1.png" height={120} width={120} alt="User avatar" />
              <div className="user-info text-center">
                <h5>Violet Mendoza</h5>
                <span className="badge bg-label-danger rounded-pill">Subscriber</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around flex-wrap my-6 gap-0 gap-md-3 gap-lg-4">
            <div className="d-flex align-items-center me-5 gap-4">
              <div className="avatar">
                <div className="avatar-initial bg-label-primary rounded-3">
                  <i className="ri-check-line ri-24px" />
                </div>
              </div>
              <div>
                <h5 className="mb-0">1.23k</h5>
                <span>Task Done</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-4">
              <div className="avatar">
                <div className="avatar-initial bg-label-primary rounded-3">
                  <i className="ri-briefcase-line ri-24px" />
                </div>
              </div>
              <div>
                <h5 className="mb-0">568</h5>
                <span>Project Done</span>
              </div>
            </div>
          </div>
          <h5 className="pb-4 border-bottom mb-4">Details</h5>
          <div className="info-container">
            <ul className="list-unstyled mb-6">
              <li className="mb-2">
                <span className="fw-medium text-heading me-2">Username:</span>
                <span>violet.dev</span>
              </li>
              <li className="mb-2">
                <span className="fw-medium text-heading me-2">Email:</span>
                <span>vafgot@vultukir.org</span>
              </li>
              <li className="mb-2">
                <span className="fw-medium text-heading me-2">Status:</span>
                <span className="badge bg-label-success rounded-pill">Active</span>
              </li>
              <li className="mb-2">
                <span className="fw-medium text-heading me-2">Role:</span>
                <span>Author</span>
              </li>
              <li className="mb-2">
                <span className="fw-medium text-heading me-2">Tax id:</span>
                <span>Tax-8965</span>
              </li>
              <li className="mb-2">
                <span className="fw-medium text-heading me-2">Contact:</span>
                <span>(123) 456-7890</span>
              </li>
              <li className="mb-2">
                <span className="fw-medium text-heading me-2">Languages:</span>
                <span>French</span>
              </li>
              <li className="mb-2">
                <span className="fw-medium text-heading me-2">Country:</span>
                <span>England</span>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <a href="javascript:;" className="btn btn-primary me-4" data-bs-target="#editUser" data-bs-toggle="modal">Edit</a>
              <a href="javascript:;" className="btn btn-outline-danger suspend-user">Suspend</a>
            </div>
          </div>
        </div>
      </div>
      {/* /User Card */}
      {/* Plan Card */}
      {/* <div className="card mb-6 border border-2 border-primary">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-start">
            <span className="badge bg-label-primary rounded-pill">Standard</span>
            <div className="d-flex justify-content-center">
              <sup className="h5 pricing-currency mt-5 mb-0 me-1 text-primary">$</sup>
              <h1 className="mb-0 text-primary">99</h1>
              <sub className="h6 pricing-duration mt-auto mb-3 fw-normal">month</sub>
            </div>
          </div>
          <ul className="list-unstyled g-2 my-6">
            <li className="mb-2 d-flex align-items-center"><i className="ri-circle-fill text-body ri-10px me-2" /><span>10 Users</span></li>
            <li className="mb-2 d-flex align-items-center"><i className="ri-circle-fill text-body ri-10px me-2" /><span>Up to 10 GB storage</span></li>
            <li className="mb-2 d-flex align-items-center"><i className="ri-circle-fill text-body ri-10px me-2" /><span>Basic Support</span></li>
          </ul>
          <div className="d-flex justify-content-between align-items-center mb-1 fw-medium text-heading">
            <span>Days</span>
            <span>26 of 30 Days</span>
          </div>
          <div className="progress mb-1 rounded">
            <div className="progress-bar rounded" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
          </div>
          <small>4 days remaining</small>
          <div className="d-grid w-100 mt-6">
            <button className="btn btn-primary" data-bs-target="#upgradePlanModal" data-bs-toggle="modal">Upgrade Plan</button>
          </div>
        </div>
      </div> */}
      {/* /Plan Card */}
    </div>
    {/*/ User Sidebar */}
    {/* User Content */}
    <div className="col-xl-8 col-lg-7 col-md-7 order-0 order-md-1">
      {/* User Tabs */}
      <div className="nav-align-top">
        <ul className="nav nav-pills flex-column flex-md-row mb-6 row-gap-2">
          <li className="nav-item"><a className="nav-link active" href="javascript:void(0);"><i className="ri-group-line me-2" />Account</a></li>
          <li className="nav-item"><a className="nav-link" href="app-user-view-security.html"><i className="ri-lock-2-line me-2" />Security</a></li>
          <li className="nav-item"><a className="nav-link" href="app-user-view-billing.html"><i className="ri-bookmark-line me-2" />Billing &amp; Plans</a></li>
          <li className="nav-item"><a className="nav-link" href="app-user-view-notifications.html"><i className="ri-notification-4-line me-2" />Notifications</a></li>
          <li className="nav-item"><a className="nav-link" href="app-user-view-connections.html"><i className="ri-link-m me-2" />Connections</a></li>
        </ul>
      </div>
      {/*/ User Tabs */}
      {/* Project table */}
      <div className="card mb-6">
        <div className="table-responsive">
          <table className="table datatable-project table-border-bottom-0">
            <thead>
              <tr>
                <th />
                <th>Project</th>
                <th className="text-nowrap">Total Task</th>
                <th>Progress</th>
                <th>Hours</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      {/* /Project table */}
      {/* Activity Timeline */}
      <div className="card mb-6">
        <h5 className="card-header">User Activity Timeline</h5>
        <div className="card-body pt-0">
          <ul className="timeline mb-0 mt-2">
            <li className="timeline-item timeline-item-transparent">
              <span className="timeline-point timeline-point-primary" />
              <div className="timeline-event">
                <div className="timeline-header mb-3">
                  <h6 className="mb-0">12 Invoices have been paid</h6>
                  <small className="text-muted">12 min ago</small>
                </div>
                <p className="mb-2">
                  Invoices have been paid to the company
                </p>
                <div className="d-flex align-items-center mb-1">
                  <div className="badge bg-lighter rounded-3 mb-1_5">
                    <img src="../../assets/img/icons/misc/pdf.png" alt="img" width={15} className="me-2" />
                    <span className="h6 mb-0 text-secondary">invoices.pdf</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-item timeline-item-transparent">
              <span className="timeline-point timeline-point-success" />
              <div className="timeline-event">
                <div className="timeline-header mb-3">
                  <h6 className="mb-0">Client Meeting</h6>
                  <small className="text-muted">45 min ago</small>
                </div>
                <p className="mb-2">
                  Project meeting with john @10:15am
                </p>
                <div className="d-flex justify-content-between flex-wrap gap-2 mb-1_5">
                  <div className="d-flex flex-wrap align-items-center">
                    <div className="avatar avatar-sm me-2">
                      <img src="../../assets/img/avatars/4.png" alt="Avatar" className="rounded-circle" />
                    </div>
                    <div>
                      <p className="mb-0 small fw-medium">Lester McCarthy (Client)</p>
                      <small>CEO of Pixinvent</small>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="timeline-item timeline-item-transparent">
              <span className="timeline-point timeline-point-info" />
              <div className="timeline-event">
                <div className="timeline-header mb-3">
                  <h6 className="mb-0">Create a new project for client</h6>
                  <small className="text-muted">2 Day Ago</small>
                </div>
                <p className="mb-2">
                  6 team members in a project
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap border-top-0 p-0">
                    <div className="d-flex flex-wrap align-items-center">
                      <ul className="list-unstyled users-list d-flex align-items-center avatar-group m-0 me-2">
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
                          <span className="avatar-initial rounded-circle pull-up text-heading" data-bs-toggle="tooltip" data-bs-placement="bottom" title="3 more">+3</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* /Activity Timeline */}
      {/* Invoice table */}
      <div className="card">
        <div className="table-responsive mb-4">
          <table className="table datatable-invoice">
            <thead>
              <tr>
                <th />
                <th>#</th>
                <th>Status</th>
                <th>Total</th>
                <th>Issued Date</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      {/* /Invoice table */}
    </div>
    {/*/ User Content */}
  </div>
  {/* Modal */}
  {/* Edit User Modal */}
  <div className="modal fade" id="editUser" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-lg modal-simple modal-edit-user">
      <div className="modal-content">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <div className="modal-body p-0">
          <div className="text-center mb-6">
            <h4 className="mb-2">Edit User Information</h4>
            <p className="mb-6">Updating user details will receive a privacy audit.</p>
          </div>
          <form id="editUserForm" className="row g-5" onsubmit="return false">
            <div className="col-12 col-md-6">
              <div className="form-floating form-floating-outline">
                <input type="text" id="modalEditUserFirstName" name="modalEditUserFirstName" className="form-control" defaultValue="Oliver" placeholder="Oliver" />
                <label htmlFor="modalEditUserFirstName">First Name</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating form-floating-outline">
                <input type="text" id="modalEditUserLastName" name="modalEditUserLastName" className="form-control" defaultValue="Queen" placeholder="Queen" />
                <label htmlFor="modalEditUserLastName">Last Name</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating form-floating-outline">
                <input type="text" id="modalEditUserName" name="modalEditUserName" className="form-control" defaultValue="oliver.queen" placeholder="oliver.queen" />
                <label htmlFor="modalEditUserName">Username</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating form-floating-outline">
                <input type="text" id="modalEditUserEmail" name="modalEditUserEmail" className="form-control" defaultValue="oliverqueen@gmail.com" placeholder="oliverqueen@gmail.com" />
                <label htmlFor="modalEditUserEmail">Email</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating form-floating-outline">
                <select id="modalEditUserStatus" name="modalEditUserStatus" className="form-select" aria-label="Default select example">
                  <option value={1} selected>Active</option>
                  <option value={2}>Inactive</option>
                  <option value={3}>Suspended</option>
                </select>
                <label htmlFor="modalEditUserStatus">Status</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating form-floating-outline">
                <input type="text" id="modalEditTaxID" name="modalEditTaxID" className="form-control modal-edit-tax-id" placeholder="123 456 7890" />
                <label htmlFor="modalEditTaxID">Tax ID</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="input-group input-group-merge">
                <span className="input-group-text">US (+1)</span>
                <div className="form-floating form-floating-outline">
                  <input type="text" id="modalEditUserPhone" name="modalEditUserPhone" className="form-control phone-number-mask" defaultValue="+1 609 933 4422" placeholder="+1 609 933 4422" />
                  <label htmlFor="modalEditUserPhone">Phone Number</label>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating form-floating-outline">
                <input id="TagifyLanguageSuggestion" name="TagifyLanguageSuggestion" className="form-control h-auto" placeholder="select language" defaultValue="English" />
                <label htmlFor="TagifyLanguageSuggestion">Language</label>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-floating form-floating-outline">
                <select id="modalEditUserCountry" name="modalEditUserCountry" className="select2 form-select" data-allow-clear="true">
                  <option value>Select</option>
                  <option value="Australia">Australia</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="India" selected>India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Korea">Korea, Republic of</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Russia">Russian Federation</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                </select>
                <label htmlFor="modalEditUserCountry">Country</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check form-switch">
                <input type="checkbox" className="form-check-input" id="editBillingAddress" />
                <label htmlFor="editBillingAddress" className="text-heading">Use as a billing address?</label>
              </div>
            </div>
            <div className="col-12 text-center d-flex flex-wrap justify-content-center gap-4 row-gap-4">
              <button type="submit" className="btn btn-primary">Submit</button>
              <button type="reset" className="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/*/ Edit User Modal */}
  {/* Upgrade Plan */}
  <div className="modal fade" id="upgradePlanModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
      <div className="modal-content p-8 p-md-12">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        <div className="modal-body pt-md-0 px-0">
          <div className="text-center mb-6">
            <h4 className="mb-2">Upgrade Plan</h4>
            <p className="mb-10">Choose the best plan for user.</p>
          </div>
          <form id="upgradePlanForm" className="row g-4 d-flex align-items-center" onsubmit="return false">
            <div className="col-sm-9">
              <select id="choosePlan" name="choosePlan" className="form-select form-select-sm" aria-label="Choose Plan">
                <option selected>Choose Plan</option>
                <option value="standard">Standard - $99/month</option>
                <option value="exclusive">Exclusive - $249/month</option>
                <option value="Enterprise">Enterprise - $499/month</option>
              </select>
            </div>
            <div className="col-sm-3 d-flex align-items-end">
              <button type="submit" className="btn btn-primary">Upgrade</button>
            </div>
          </form>
        </div>
        <hr className="my-1" />
        <div className="modal-body pb-md-0 px-0">
          <p className="mb-1">User current plan is standard plan</p>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="d-flex justify-content-center me-2 mt-4">
              <sup className="h5 pricing-currency mt-5 mb-0 me-1 text-primary">$</sup>
              <h1 className="mb-0 text-primary">99</h1>
              <sub className="h5 pricing-duration mt-auto mb-3 small fw-normal">/month</sub>
            </div>
            <button className="btn btn-outline-danger cancel-subscription mt-4">Cancel Subscription</button>
          </div>
        </div>
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
  {/*/ Upgrade Plan */}
</div>

  )
}

export default UserProfile
