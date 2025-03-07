import React, { useState } from 'react';
import './Homepage.css'; // Add your custom styles for the page here.

function WebScraping() {
  // State for URL and scraping option
  const [url, setUrl] = useState('');
  const [scrapeOption, setScrapeOption] = useState('current');
  const [loading, setLoading] = useState(false); // For loading state
  const [errorMessage, setErrorMessage] = useState('');
  const [scrapedData, setScrapedData] = useState(null); // For storing scraped data

  // Handle URL change
  const handleUrlChange = (e) => setUrl(e.target.value);

  // Handle dropdown option change
  const handleOptionChange = (e) => setScrapeOption(e.target.value);

  // Handle form submission
  const handleScrapeSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); // Reset error message on each submission
    setScrapedData(null); // Clear previous scraped data

    // Retrieve the auth token from localStorage
    const authToken = localStorage.getItem('authToken');
    
    if (!authToken) {
      setErrorMessage('Authorization token is missing. Please log in first.');
      setLoading(false);
      return;
    }


    try {
      // Send POST request to the scraping API with Authorization token
      const response = await fetch('https://zencia-web-zeta.vercel.app/v1/cheerio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${authToken}`, // Add the token here
        },
        body: JSON.stringify({
          url: url,  // URL entered by the user
        }),
      });

      const data = await response.json();

      // Handle response from the API
      if (data.success) {
        // If the scrape was successful, display the results
        setScrapedData(data.result || 'Scraping completed successfully.');
      } else {
        // Handle failure
        setErrorMessage(data.message || 'Failed to start scraping.');
      }
    } catch (error) {
      // Handle network or other errors
      setErrorMessage('An error occurred while scraping. Please try again.');
      console.error('Error scraping:', error);
    }

    setLoading(false);
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="app-chat card overflow-hidden">
          <div className="row g-0">
            {/* Sidebar is removed for simplicity */}
            
            {/* Main Content Area */}
            <div className="col app-chat-history full-width-chat">
              <div className="">
                <h3>Enter URL to Scrape</h3>

                {/* Display error message if there's any */}
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                {/* Scraping Form */}
                <form onSubmit={handleScrapeSubmit}>
                  <div className="form-group">
                    <label htmlFor="url">Website URL</label>
                    <input
                      type="url"
                      id="url"
                      value={url}
                      onChange={handleUrlChange}
                      placeholder="Enter website URL"
                      required
                      className="form-control short-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="scrapeOption">Choose Scraping Option</label>
                    <select
                      id="scrapeOption"
                      value={scrapeOption}
                      onChange={handleOptionChange}
                      className="form-control short-input"
                    >
                      <option value="current">Current Page</option>
                      <option value="all">All Pages</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary short-btn" disabled={loading}>
                    {loading ? (
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    ) : (
                      'Start Scraping'
                    )}
                  </button>
                </form>

                {/* Display loader or scraping results */}
                {loading && (
                  <div className="loader-container">
                    <div className="spinner"></div>
                    <p>Scraping in progress...</p>
                  </div>
                )}

                {/* Display scraped data if available */}
                {scrapedData && (
                  <div className="scraping-result">
                    <h4>Scraping Results:</h4>
                    <pre>{JSON.stringify(scrapedData, null, 2)}</pre>
                  </div>
                )}
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
    </div>
  );
}

export default WebScraping;
