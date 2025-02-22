import React, { useState } from 'react';

function FeedbackForm({ onFeedbackSubmit }) {
  // State to store feedback data
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    mobile: '',
    rating: 0,
    message: '',
    category: 'general',
    project: 'Tours Project', // Example project, can be dynamic
    status: 'Active',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onFeedbackSubmit(feedback); // Send the feedback data to the parent component
    setFeedback({
      name: '',
      email: '',
      mobile: '',
      rating: 0,
      message: '',
      category: 'general',
      project: 'Tours Project',
      status: 'Active',
    });
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
    <div className="card">
      <h5 className="card-header">Submit Your Feedback</h5>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              value={feedback.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              value={feedback.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Mobile Field */}
          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Your Mobile</label>
            <input
              id="mobile"
              name="mobile"
              type="text"
              className="form-control"
              value={feedback.mobile}
              onChange={handleChange}
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Rating Field */}
          <div className="mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <select
              id="rating"
              name="rating"
              className="form-select"
              value={feedback.rating}
              onChange={handleChange}
            >
              <option value={0}>Select Rating</option>
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          {/* Feedback Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Feedback</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              value={feedback.message}
              onChange={handleChange}
              placeholder="Tell us your thoughts..."
            />
          </div>

          {/* Feedback Category Field */}
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Feedback Category</label>
            <select
              id="category"
              name="category"
              className="form-select"
              value={feedback.category}
              onChange={handleChange}
            >
              <option value="general">General</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature Request</option>
            </select>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Submit Feedback</button>
        </form>
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

export default FeedbackForm;
