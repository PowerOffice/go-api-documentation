import React from 'react';

const BackendChangesNotice = () => {
  return (
    <section className="backend-changes-notice">
      <div className="notice-container">
        <div className="notice-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L1 21h22L12 2zm0 3.83L19.53 19H4.47L12 5.83zM11 16v2h2v-2h-2zm0-6v4h2v-4h-2z"/>
          </svg>
        </div>
        <div className="notice-content">
          <h2>Important Changes</h2>
          <p>
            MIGRATION COMPLETE!
            ----
            We have important updates regarding our backend that may include breaking changes. 
            Please review this information before continuing with your integration.
          </p>
          <a href="/backend-changes.html" className="notice-button">
            View changes
          </a>
        </div>
      </div>
    </section>
  );
};

export default BackendChangesNotice;
