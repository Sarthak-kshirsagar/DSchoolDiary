import React, { useState } from 'react';
import './pagesStyle.css';

const UserConsentForm = () => {
  const [expanded, setExpanded] = useState({});

  const toggleTile = (index) => {
    setExpanded(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="container">
      <h1>User Consent Form</h1>

      <div className="tile">
        <div className="tile-header" onClick={() => toggleTile(1)}>
          <span>1. Personal Data Collection:</span>
          <span className="arrow">{expanded[1] ? '▲' : '▼'}</span>
        </div>
        {expanded[1] && (
          <div className="tile-content">
            <p>
              By registering and using the App, you consent to the collection of your personal and educational data as described in our Privacy Policy.
            </p>
          </div>
        )}
      </div>

      <div className="tile">
        <div className="tile-header" onClick={() => toggleTile(2)}>
          <span>2. Parental Consent for Children:</span>
          <span className="arrow">{expanded[2] ? '▲' : '▼'}</span>
        </div>
        {expanded[2] && (
          <div className="tile-content">
            <p>If you are under 13, you will need parental consent to use the App. A parent or guardian must verify consent via email or mobile verification.</p>
          </div>
        )}
      </div>

      <div className="tile">
        <div className="tile-header" onClick={() => toggleTile(3)}>
          <span>3. Revocation of Consent:</span>
          <span className="arrow">{expanded[3] ? '▲' : '▼'}</span>
        </div>
        {expanded[3] && (
          <div className="tile-content">
            <p>You may withdraw your consent at any time by accessing your account settings or contacting us directly. Upon withdrawal of consent, we will cease processing your personal data, subject to any legal retention requirements.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserConsentForm;
