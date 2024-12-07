import React, { useState } from 'react';
import './pagesStyle.css';
const TermsOfUse = () => {
  const [expanded, setExpanded] = useState({});

  const toggleTile = (index) => {
    setExpanded(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="container">
      <h1>Terms of Use</h1>

      <div className="title-head">
        These Terms and Conditions (“Terms”) govern your use of [App Name] (“App”). By using the App, you agree to these Terms. If you do not agree, please do not use the App.
      </div>

      <div className="tile">
        <div className="tile-header" onClick={() => toggleTile(1)}>
          <span>1. What This Policy Covers</span>
          <span className="arrow">{expanded[1] ? '▲' : '▼'}</span>
        </div>
        {expanded[1] && (
          <div className="tile-content">
            <p>This privacy policy covers the information collection, use, sharing, and disclosure practices of our company.</p>
          </div>
        )}
      </div>

      <div className="tile">
        <div className="tile-header" onClick={() => toggleTile(2)}>
          <span>2. Information Collection and Use</span>
          <span className="arrow">{expanded[2] ? '▲' : '▼'}</span>
        </div>
        {expanded[2] && (
          <div className="tile-content">
            <p>We collect and use personal data to enhance our services and your experience.</p>
          </div>
        )}
      </div>

      <div className="tile">
        <div className="tile-header" onClick={() => toggleTile(3)}>
          <span>3. Information Sharing and Disclosure</span>
          <span className="arrow">{expanded[3] ? '▲' : '▼'}</span>
        </div>
        {expanded[3] && (
          <div className="tile-content">
            <p>We may share your personal information only under specific circumstances, as outlined in this policy.</p>
          </div>
        )}
      </div>

      <div className="tile">
        <div className="tile-header" onClick={() => toggleTile(4)}>
          <span>4. Accessing Your Own Personal Information</span>
          <span className="arrow">{expanded[4] ? '▲' : '▼'}</span>
        </div>
        {expanded[4] && (
          <div className="tile-content">
            <p>You have the right to access and manage your personal data in accordance with the law.</p>
          </div>
        )}
      </div>

      <div className="tile">
        <div className="tile-header" onClick={() => toggleTile(5)}>
          <span>5. Cookies</span>
          <span className="arrow">{expanded[5] ? '▲' : '▼'}</span>
        </div>
        {expanded[5] && (
          <div className="tile-content">
            <p>The Company may place text files, known as cookies, in your browser to personalize your experience. A cookie itself does not contain personal information, and it only enables the Company to relate your use of the website/app to the information you have provided.</p>
            <p>Cookies help track user behavior on our platform but do not extend to third-party websites. The Company does not control cookie usage by third parties.</p>
            <p className="cookie-note">Please note: The Company may place both permanent and temporary cookies on your system. Permanent cookies will remain until their expiry.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermsOfUse;
