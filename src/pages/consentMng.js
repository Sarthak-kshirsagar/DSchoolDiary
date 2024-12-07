import React, { useState } from 'react';
import './pagesStyle.css';
const ConsentManagement = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleTile = () => {
    setExpanded(prevState => !prevState);
  };

  return (
    <div className="container">
      <h1>Consent Management</h1>

      <div className="tile">
        <div className="tile-header" onClick={toggleTile}>
          <span>Consent Management</span>
          <span className="arrow">{expanded ? '▲' : '▼'}</span>
        </div>
        {expanded && (
          <div className="tile-content">
            <p>
              By using the App, you consent to the collection, storage, and use of your personal and educational data as outlined in our Privacy Policy. You may withdraw consent at any time by contacting us or using the in-app settings.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConsentManagement;
