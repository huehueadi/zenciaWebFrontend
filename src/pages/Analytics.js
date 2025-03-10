import React from "react";

function Analytics() {
  return (
    <div className="content-wrapper">
      <div className="card mb-6">
        <div className="card-widget-separator-wrapper">
          <div className="card-body card-widget-separator">
            <div className="row gy-4 gy-sm-1">
              <div className="col-sm-6 col-lg-3">
                <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-4 pb-sm-0">
                  <div>
                    <h4 className="mb-0">56</h4>
                    <p className="mb-0">Pending Payment</p>
                  </div>
                  <div className="avatar me-sm-6">
                    <span className="avatar-initial rounded text-heading">
                      <i className="ri-calendar-2-line ri-26px" />
                    </span>
                  </div>
                </div>
                <hr className="d-none d-sm-block d-lg-none me-6" />
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-4 pb-sm-0">
                  <div>
                    <h4 className="mb-0">12,689</h4>
                    <p className="mb-0">Completed</p>
                  </div>
                  <div className="avatar me-lg-6">
                    <span className="avatar-initial rounded text-heading">
                      <i className="ri-check-double-line ri-26px" />
                    </span>
                  </div>
                </div>
                <hr className="d-none d-sm-block d-lg-none" />
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="d-flex justify-content-between align-items-start border-end pb-4 pb-sm-0 card-widget-3">
                  <div>
                    <h4 className="mb-0">124</h4>
                    <p className="mb-0">Refunded</p>
                  </div>
                  <div className="avatar me-sm-6">
                    <span className="avatar-initial rounded text-heading">
                      <i className="ri-wallet-3-line ri-26px" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <h4 className="mb-0">32</h4>
                    <p className="mb-0">Failed</p>
                  </div>
                  <div className="avatar">
                    <span className="avatar-initial rounded text-heading">
                      <i className="ri-error-warning-line ri-26px" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
