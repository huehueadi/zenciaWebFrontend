import React from 'react'

function TestSidebar() {
  return (
  <div class="layout-container">
  <div id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
  <div className="app-brand demo ">
    <a href="index.html" className="app-brand-link">
      <span className="app-brand-logo demo">
        <span style={{color: 'var(--bs-primary)'}}>
          <svg width={268} height={150} viewBox="0 0 38 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.0944 2.22569C29.0511 0.444187 26.7508 -0.172113 24.9566 0.849138C23.1623 1.87039 22.5536 4.14247 23.5969 5.92397L30.5368 17.7743C31.5801 19.5558 33.8804 20.1721 35.6746 19.1509C37.4689 18.1296 38.0776 15.8575 37.0343 14.076L30.0944 2.22569Z" fill="currentColor" />
            <path d="M30.171 2.22569C29.1277 0.444187 26.8274 -0.172113 25.0332 0.849138C23.2389 1.87039 22.6302 4.14247 23.6735 5.92397L30.6134 17.7743C31.6567 19.5558 33.957 20.1721 35.7512 19.1509C37.5455 18.1296 38.1542 15.8575 37.1109 14.076L30.171 2.22569Z" fill="url(#paint0_linear_2989_100980)" fillOpacity="0.4" />
            <path d="M22.9676 2.22569C24.0109 0.444187 26.3112 -0.172113 28.1054 0.849138C29.8996 1.87039 30.5084 4.14247 29.4651 5.92397L22.5251 17.7743C21.4818 19.5558 19.1816 20.1721 17.3873 19.1509C15.5931 18.1296 14.9843 15.8575 16.0276 14.076L22.9676 2.22569Z" fill="currentColor" />
            <path d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z" fill="currentColor" />
            <path d="M14.9558 2.22569C13.9125 0.444187 11.6122 -0.172113 9.818 0.849138C8.02377 1.87039 7.41502 4.14247 8.45833 5.92397L15.3983 17.7743C16.4416 19.5558 18.7418 20.1721 20.5361 19.1509C22.3303 18.1296 22.9391 15.8575 21.8958 14.076L14.9558 2.22569Z" fill="url(#paint1_linear_2989_100980)" fillOpacity="0.4" />
            <path d="M7.82901 2.22569C8.87231 0.444187 11.1726 -0.172113 12.9668 0.849138C14.7611 1.87039 15.3698 4.14247 14.3265 5.92397L7.38656 17.7743C6.34325 19.5558 4.04298 20.1721 2.24875 19.1509C0.454514 18.1296 -0.154233 15.8575 0.88907 14.076L7.82901 2.22569Z" fill="currentColor" />
            <defs>
              <linearGradient id="paint0_linear_2989_100980" x1="5.36642" y1="0.849138" x2="10.532" y2="24.104" gradientUnits="userSpaceOnUse">
                <stop offset={0} stopOpacity={1} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
              <linearGradient id="paint1_linear_2989_100980" x1="5.19475" y1="0.849139" x2="10.3357" y2="24.1155" gradientUnits="userSpaceOnUse">
                <stop offset={0} stopOpacity={1} />
                <stop offset={1} stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </span>
      <span className="app-brand-text demo menu-text fw-semibold ms-2">Materialize</span>
    </a>
    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
      <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.47365 11.7183C8.11707 12.0749 8.11707 12.6531 8.47365 13.0097L12.071 16.607C12.4615 16.9975 12.4615 17.6305 12.071 18.021C11.6805 18.4115 11.0475 18.4115 10.657 18.021L5.83009 13.1941C5.37164 12.7356 5.37164 11.9924 5.83009 11.5339L10.657 6.707C11.0475 6.31653 11.6805 6.31653 12.071 6.707C12.4615 7.09747 12.4615 7.73053 12.071 8.121L8.47365 11.7183Z" fillOpacity="0.9" />
        <path d="M14.3584 11.8336C14.0654 12.1266 14.0654 12.6014 14.3584 12.8944L18.071 16.607C18.4615 16.9975 18.4615 17.6305 18.071 18.021C17.6805 18.4115 17.0475 18.4115 16.657 18.021L11.6819 13.0459C11.3053 12.6693 11.3053 12.0587 11.6819 11.6821L16.657 6.707C17.0475 6.31653 17.6805 6.31653 18.071 6.707C18.4615 7.09747 18.4615 7.73053 18.071 8.121L14.3584 11.8336Z" fillOpacity="0.4" />
      </svg>
    </a>
  </div>
  <div className="menu-inner-shadow" />
  <ul className="menu-inner py-1">
    {/* Dashboards */}
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-home-smile-line" />
        <div data-i18n="Dashboards">Dashboards</div>
        <div className="badge bg-danger rounded-pill ms-auto">5</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-ecommerce-dashboard.html" className="menu-link">
            <div data-i18n="eCommerce">eCommerce</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="dashboards-crm.html" className="menu-link">
            <div data-i18n="CRM">CRM</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="index.html" className="menu-link">
            <div data-i18n="Analytics">Analytics</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-logistics-dashboard.html" className="menu-link">
            <div data-i18n="Logistics">Logistics</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-academy-dashboard.html" className="menu-link">
            <div data-i18n="Academy">Academy</div>
          </a>
        </li>
      </ul>
    </li>
    {/* Layouts */}
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-layout-2-line" />
        <div data-i18n="Layouts">Layouts</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="layouts-collapsed-menu.html" className="menu-link">
            <div data-i18n="Collapsed menu">Collapsed menu</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-content-navbar.html" className="menu-link">
            <div data-i18n="Content navbar">Content navbar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-content-navbar-with-sidebar.html" className="menu-link">
            <div data-i18n="Content nav + Sidebar">Content nav + Sidebar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://demos.pixinvent.com/materialize-html-admin-template/html/horizontal-menu-template" className="menu-link" target="_blank">
            <div data-i18n="Horizontal">Horizontal</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-without-menu.html" className="menu-link">
            <div data-i18n="Without menu">Without menu</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-without-navbar.html" className="menu-link">
            <div data-i18n="Without navbar">Without navbar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-fluid.html" className="menu-link">
            <div data-i18n="Fluid">Fluid</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-container.html" className="menu-link">
            <div data-i18n="Container">Container</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="layouts-blank.html" className="menu-link">
            <div data-i18n="Blank">Blank</div>
          </a>
        </li>
      </ul>
    </li>
    {/* Front Pages */}
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-file-copy-line" />
        <div data-i18n="Front Pages">Front Pages</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="https://demos.pixinvent.com/materialize-html-admin-template/html/front-pages/landing-page.html" className="menu-link" target="_blank">
            <div data-i18n="Landing">Landing</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://demos.pixinvent.com/materialize-html-admin-template/html/front-pages/pricing-page.html" className="menu-link" target="_blank">
            <div data-i18n="Pricing">Pricing</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://demos.pixinvent.com/materialize-html-admin-template/html/front-pages/payment-page.html" className="menu-link" target="_blank">
            <div data-i18n="Payment">Payment</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://demos.pixinvent.com/materialize-html-admin-template/html/front-pages/checkout-page.html" className="menu-link" target="_blank">
            <div data-i18n="Checkout">Checkout</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="https://demos.pixinvent.com/materialize-html-admin-template/html/front-pages/help-center-landing.html" className="menu-link" target="_blank">
            <div data-i18n="Help Center">Help Center</div>
          </a>
        </li>
      </ul>
    </li>
    {/* Apps & Pages */}
    <li className="menu-header mt-5">
      <span className="menu-header-text" data-i18n="Apps & Pages">Apps &amp; Pages</span>
    </li>
    <li className="menu-item">
      <a href="app-email.html" className="menu-link">
        <i className="menu-icon tf-icons ri-mail-open-line" />
        <div data-i18n="Email">Email</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="app-chat.html" className="menu-link">
        <i className="menu-icon tf-icons ri-wechat-line" />
        <div data-i18n="Chat">Chat</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="app-calendar.html" className="menu-link">
        <i className="menu-icon tf-icons ri-calendar-line" />
        <div data-i18n="Calendar">Calendar</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="app-kanban.html" className="menu-link">
        <i className="menu-icon tf-icons ri-drag-drop-line" />
        <div data-i18n="Kanban">Kanban</div>
      </a>
    </li>
    {/* e-commerce-app menu start */}
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-shopping-bag-3-line" />
        <div data-i18n="eCommerce">eCommerce</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-ecommerce-dashboard.html" className="menu-link">
            <div data-i18n="Dashboard">Dashboard</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Products">Products</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-ecommerce-product-list.html" className="menu-link">
                <div data-i18n="Product List">Product List</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-product-add.html" className="menu-link">
                <div data-i18n="Add Product">Add Product</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-category-list.html" className="menu-link">
                <div data-i18n="Category List">Category List</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Order">Order</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-ecommerce-order-list.html" className="menu-link">
                <div data-i18n="Order List">Order List</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-order-details.html" className="menu-link">
                <div data-i18n="Order Details">Order Details</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Customer">Customer</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-ecommerce-customer-all.html" className="menu-link">
                <div data-i18n="All Customers">All Customers</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);" className="menu-link menu-toggle">
                <div data-i18n="Customer Details">Customer Details</div>
              </a>
              <ul className="menu-sub">
                <li className="menu-item">
                  <a href="app-ecommerce-customer-details-overview.html" className="menu-link">
                    <div data-i18n="Overview">Overview</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-ecommerce-customer-details-security.html" className="menu-link">
                    <div data-i18n="Security">Security</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-ecommerce-customer-details-billing.html" className="menu-link">
                    <div data-i18n="Address & Billing">Address &amp; Billing</div>
                  </a>
                </li>
                <li className="menu-item">
                  <a href="app-ecommerce-customer-details-notifications.html" className="menu-link">
                    <div data-i18n="Notifications">Notifications</div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="app-ecommerce-manage-reviews.html" className="menu-link">
            <div data-i18n="Manage Reviews">Manage Reviews</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-ecommerce-referral.html" className="menu-link">
            <div data-i18n="Referrals">Referrals</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Settings">Settings</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-ecommerce-settings-detail.html" className="menu-link">
                <div data-i18n="Store Details">Store Details</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-payments.html" className="menu-link">
                <div data-i18n="Payments">Payments</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-checkout.html" className="menu-link">
                <div data-i18n="Checkout">Checkout</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-shipping.html" className="menu-link">
                <div data-i18n="Shipping & Delivery">Shipping &amp; Delivery</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-locations.html" className="menu-link">
                <div data-i18n="Locations">Locations</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-ecommerce-settings-notifications.html" className="menu-link">
                <div data-i18n="Notifications">Notifications</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    {/* e-commerce-app menu end */}
    {/* Academy menu start */}
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-graduation-cap-line" />
        <div data-i18n="Academy">Academy</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-academy-dashboard.html" className="menu-link">
            <div data-i18n="Dashboard">Dashboard</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-academy-course.html" className="menu-link">
            <div data-i18n="My Course">My Course</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-academy-course-details.html" className="menu-link">
            <div data-i18n="Course Details">Course Details</div>
          </a>
        </li>
      </ul>
    </li>
    {/* Academy menu end */}
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-car-line" />
        <div data-i18n="Logistics">Logistics</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-logistics-dashboard.html" className="menu-link">
            <div data-i18n="Dashboard">Dashboard</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-logistics-fleet.html" className="menu-link">
            <div data-i18n="Fleet">Fleet</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-bill-line" />
        <div data-i18n="Invoice">Invoice</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-invoice-list.html" className="menu-link">
            <div data-i18n="List">List</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-invoice-preview.html" className="menu-link">
            <div data-i18n="Preview">Preview</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-invoice-edit.html" className="menu-link">
            <div data-i18n="Edit">Edit</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-invoice-add.html" className="menu-link">
            <div data-i18n="Add">Add</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-user-line" />
        <div data-i18n="Users">Users</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="app-user-list.html" className="menu-link">
            <div data-i18n="List">List</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="View">View</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="app-user-view-account.html" className="menu-link">
                <div data-i18n="Account">Account</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-user-view-security.html" className="menu-link">
                <div data-i18n="Security">Security</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-user-view-billing.html" className="menu-link">
                <div data-i18n="Billing & Plans">Billing &amp; Plans</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-user-view-notifications.html" className="menu-link">
                <div data-i18n="Notifications">Notifications</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="app-user-view-connections.html" className="menu-link">
                <div data-i18n="Connections">Connections</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="menu-item active open">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-lock-2-line" />
        <div data-i18n="Roles & Permissions">Roles &amp; Permissions</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item active">
          <a href="app-access-roles.html" className="menu-link">
            <div data-i18n="Roles">Roles</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="app-access-permission.html" className="menu-link">
            <div data-i18n="Permission">Permission</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-layout-left-line" />
        <div data-i18n="Pages">Pages</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="User Profile">User Profile</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-profile-user.html" className="menu-link">
                <div data-i18n="Profile">Profile</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-profile-teams.html" className="menu-link">
                <div data-i18n="Teams">Teams</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-profile-projects.html" className="menu-link">
                <div data-i18n="Projects">Projects</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-profile-connections.html" className="menu-link">
                <div data-i18n="Connections">Connections</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Account Settings">Account Settings</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-account-settings-account.html" className="menu-link">
                <div data-i18n="Account">Account</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-security.html" className="menu-link">
                <div data-i18n="Security">Security</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-billing.html" className="menu-link">
                <div data-i18n="Billing & Plans">Billing &amp; Plans</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-notifications.html" className="menu-link">
                <div data-i18n="Notifications">Notifications</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-account-settings-connections.html" className="menu-link">
                <div data-i18n="Connections">Connections</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="pages-faq.html" className="menu-link">
            <div data-i18n="FAQ">FAQ</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="pages-pricing.html" className="menu-link">
            <div data-i18n="Pricing">Pricing</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Misc">Misc</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="pages-misc-error.html" className="menu-link" target="_blank">
                <div data-i18n="Error">Error</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-under-maintenance.html" className="menu-link" target="_blank">
                <div data-i18n="Under Maintenance">Under Maintenance</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-comingsoon.html" className="menu-link" target="_blank">
                <div data-i18n="Coming Soon">Coming Soon</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-not-authorized.html" className="menu-link" target="_blank">
                <div data-i18n="Not Authorized">Not Authorized</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="pages-misc-server-error.html" className="menu-link" target="_blank">
                <div data-i18n="Server Error">Server Error</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-shield-keyhole-line" />
        <div data-i18n="Authentications">Authentications</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Login">Login</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-login-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-login-cover.html" className="menu-link" target="_blank">
                <div data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Register">Register</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-register-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-register-cover.html" className="menu-link" target="_blank">
                <div data-i18n="Cover">Cover</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-register-multisteps.html" className="menu-link" target="_blank">
                <div data-i18n="Multi-steps">Multi-steps</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Verify Email">Verify Email</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-verify-email-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-verify-email-cover.html" className="menu-link" target="_blank">
                <div data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Reset Password">Reset Password</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-reset-password-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-reset-password-cover.html" className="menu-link" target="_blank">
                <div data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Forgot Password">Forgot Password</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-forgot-password-cover.html" className="menu-link" target="_blank">
                <div data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Two Steps">Two Steps</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="auth-two-steps-basic.html" className="menu-link" target="_blank">
                <div data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="auth-two-steps-cover.html" className="menu-link" target="_blank">
                <div data-i18n="Cover">Cover</div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-git-commit-line" />
        <div data-i18n="Wizard Examples">Wizard Examples</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="wizard-ex-checkout.html" className="menu-link">
            <div data-i18n="Checkout">Checkout</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="wizard-ex-property-listing.html" className="menu-link">
            <div data-i18n="Property Listing">Property Listing</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="wizard-ex-create-deal.html" className="menu-link">
            <div data-i18n="Create Deal">Create Deal</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="modal-examples.html" className="menu-link">
        <i className="menu-icon tf-icons ri-tv-2-line" />
        <div data-i18n="Modal Examples">Modal Examples</div>
      </a>
    </li>
    {/* Components */}
    <li className="menu-header mt-5">
      <span className="menu-header-text" data-i18n="Components">Components</span>
    </li>
    {/* Cards */}
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-bank-card-2-line" />
        <div data-i18n="Cards">Cards</div>
        <div className="badge bg-primary rounded-pill ms-auto">6</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="cards-basic.html" className="menu-link">
            <div data-i18n="Basic">Basic</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-advance.html" className="menu-link">
            <div data-i18n="Advance">Advance</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-statistics.html" className="menu-link">
            <div data-i18n="Statistics">Statistics</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-analytics.html" className="menu-link">
            <div data-i18n="Analytics">Analytics</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-gamifications.html" className="menu-link">
            <div data-i18n="Gamifications">Gamifications</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="cards-actions.html" className="menu-link">
            <div data-i18n="Actions">Actions</div>
          </a>
        </li>
      </ul>
    </li>
    {/* User interface */}
    <li className="menu-item">
      <a href="javascript:void(0)" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-toggle-line" />
        <div data-i18n="User interface">User interface</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="ui-accordion.html" className="menu-link">
            <div data-i18n="Accordion">Accordion</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-alerts.html" className="menu-link">
            <div data-i18n="Alerts">Alerts</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-badges.html" className="menu-link">
            <div data-i18n="Badges">Badges</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-buttons.html" className="menu-link">
            <div data-i18n="Buttons">Buttons</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-carousel.html" className="menu-link">
            <div data-i18n="Carousel">Carousel</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-collapse.html" className="menu-link">
            <div data-i18n="Collapse">Collapse</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-dropdowns.html" className="menu-link">
            <div data-i18n="Dropdowns">Dropdowns</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-footer.html" className="menu-link">
            <div data-i18n="Footer">Footer</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-list-groups.html" className="menu-link">
            <div data-i18n="List Groups">List Groups</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-modals.html" className="menu-link">
            <div data-i18n="Modals">Modals</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-navbar.html" className="menu-link">
            <div data-i18n="Navbar">Navbar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-offcanvas.html" className="menu-link">
            <div data-i18n="Offcanvas">Offcanvas</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-pagination-breadcrumbs.html" className="menu-link">
            <div data-i18n="Pagination & Breadcrumbs">Pagination &amp; Breadcrumbs</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-progress.html" className="menu-link">
            <div data-i18n="Progress">Progress</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-spinners.html" className="menu-link">
            <div data-i18n="Spinners">Spinners</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-tabs-pills.html" className="menu-link">
            <div data-i18n="Tabs & Pills">Tabs &amp; Pills</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-toasts.html" className="menu-link">
            <div data-i18n="Toasts">Toasts</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-tooltips-popovers.html" className="menu-link">
            <div data-i18n="Tooltips & Popovers">Tooltips &amp; Popovers</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="ui-typography.html" className="menu-link">
            <div data-i18n="Typography">Typography</div>
          </a>
        </li>
      </ul>
    </li>
    {/* Extended components */}
    <li className="menu-item">
      <a href="javascript:void(0)" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-box-3-line" />
        <div data-i18n="Extended UI">Extended UI</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="extended-ui-avatar.html" className="menu-link">
            <div data-i18n="Avatar">Avatar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-blockui.html" className="menu-link">
            <div data-i18n="BlockUI">BlockUI</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-drag-and-drop.html" className="menu-link">
            <div data-i18n="Drag & Drop">Drag &amp; Drop</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-media-player.html" className="menu-link">
            <div data-i18n="Media Player">Media Player</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-perfect-scrollbar.html" className="menu-link">
            <div data-i18n="Perfect Scrollbar">Perfect Scrollbar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-star-ratings.html" className="menu-link">
            <div data-i18n="Star Ratings">Star Ratings</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-sweetalert2.html" className="menu-link">
            <div data-i18n="SweetAlert2">SweetAlert2</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-text-divider.html" className="menu-link">
            <div data-i18n="Text Divider">Text Divider</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link menu-toggle">
            <div data-i18n="Timeline">Timeline</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <a href="extended-ui-timeline-basic.html" className="menu-link">
                <div data-i18n="Basic">Basic</div>
              </a>
            </li>
            <li className="menu-item">
              <a href="extended-ui-timeline-fullscreen.html" className="menu-link">
                <div data-i18n="Fullscreen">Fullscreen</div>
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-item">
          <a href="extended-ui-tour.html" className="menu-link">
            <div data-i18n="Tour">Tour</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-treeview.html" className="menu-link">
            <div data-i18n="Treeview">Treeview</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="extended-ui-misc.html" className="menu-link">
            <div data-i18n="Miscellaneous">Miscellaneous</div>
          </a>
        </li>
      </ul>
    </li>
    {/* Icons */}
    <li className="menu-item">
      <a href="icons-ri.html" className="menu-link">
        <i className="menu-icon tf-icons ri-remixicon-line" />
        <div data-i18n="Icons">Icons</div>
      </a>
    </li>
    {/* Forms & Tables */}
    <li className="menu-header mt-5">
      <span className="menu-header-text" data-i18n="Forms & Tables">Forms &amp; Tables</span>
    </li>
    {/* Forms */}
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-radio-button-line" />
        <div data-i18n="Form Elements">Form Elements</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="forms-basic-inputs.html" className="menu-link">
            <div data-i18n="Basic Inputs">Basic Inputs</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-input-groups.html" className="menu-link">
            <div data-i18n="Input groups">Input groups</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-custom-options.html" className="menu-link">
            <div data-i18n="Custom Options">Custom Options</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-editors.html" className="menu-link">
            <div data-i18n="Editors">Editors</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-file-upload.html" className="menu-link">
            <div data-i18n="File Upload">File Upload</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-pickers.html" className="menu-link">
            <div data-i18n="Pickers">Pickers</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-selects.html" className="menu-link">
            <div data-i18n="Select & Tags">Select &amp; Tags</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-sliders.html" className="menu-link">
            <div data-i18n="Sliders">Sliders</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-switches.html" className="menu-link">
            <div data-i18n="Switches">Switches</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="forms-extras.html" className="menu-link">
            <div data-i18n="Extras">Extras</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-box-3-line" />
        <div data-i18n="Form Layouts">Form Layouts</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="form-layouts-vertical.html" className="menu-link">
            <div data-i18n="Vertical Form">Vertical Form</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="form-layouts-horizontal.html" className="menu-link">
            <div data-i18n="Horizontal Form">Horizontal Form</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="form-layouts-sticky.html" className="menu-link">
            <div data-i18n="Sticky Actions">Sticky Actions</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-git-commit-line" />
        <div data-i18n="Form Wizard">Form Wizard</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="form-wizard-numbered.html" className="menu-link">
            <div data-i18n="Numbered">Numbered</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="form-wizard-icons.html" className="menu-link">
            <div data-i18n="Icons">Icons</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="form-validation.html" className="menu-link">
        <i className="menu-icon tf-icons ri-checkbox-multiple-line" />
        <div data-i18n="Form Validation">Form Validation</div>
      </a>
    </li>
    {/* Tables */}
    <li className="menu-item">
      <a href="tables-basic.html" className="menu-link">
        <i className="menu-icon tf-icons ri-table-alt-line" />
        <div data-i18n="Tables">Tables</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-grid-line" />
        <div data-i18n="Datatables">Datatables</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="tables-datatables-basic.html" className="menu-link">
            <div data-i18n="Basic">Basic</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="tables-datatables-advanced.html" className="menu-link">
            <div data-i18n="Advanced">Advanced</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="tables-datatables-extensions.html" className="menu-link">
            <div data-i18n="Extensions">Extensions</div>
          </a>
        </li>
      </ul>
    </li>
    {/* Charts & Maps */}
    <li className="menu-header mt-5">
      <span className="menu-header-text" data-i18n="Charts & Maps">Charts &amp; Maps</span>
    </li>
    <li className="menu-item">
      <a href="javascript:void(0);" className="menu-link menu-toggle">
        <i className="menu-icon tf-icons ri-bar-chart-2-line" />
        <div data-i18n="Charts">Charts</div>
      </a>
      <ul className="menu-sub">
        <li className="menu-item">
          <a href="charts-apex.html" className="menu-link">
            <div data-i18n="Apex Charts">Apex Charts</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="charts-chartjs.html" className="menu-link">
            <div data-i18n="ChartJS">ChartJS</div>
          </a>
        </li>
      </ul>
    </li>
    <li className="menu-item">
      <a href="maps-leaflet.html" className="menu-link">
        <i className="menu-icon tf-icons ri-map-2-line" />
        <div data-i18n="Leaflet Maps">Leaflet Maps</div>
      </a>
    </li>
    {/* Misc */}
    <li className="menu-header mt-5">
      <span className="menu-header-text" data-i18n="Misc">Misc</span>
    </li>
    <li className="menu-item">
      <a href="https://pixinvent.ticksy.com/" target="_blank" className="menu-link">
        <i className="menu-icon tf-icons ri-lifebuoy-line" />
        <div data-i18n="Support">Support</div>
      </a>
    </li>
    <li className="menu-item">
      <a href="https://demos.pixinvent.com/materialize-html-admin-template/documentation/" target="_blank" className="menu-link">
        <i className="menu-icon tf-icons ri-article-line" />
        <div data-i18n="Documentation">Documentation</div>
      </a>
    </li>
  </ul>
</div>
</div>
  )
}

export default TestSidebar
