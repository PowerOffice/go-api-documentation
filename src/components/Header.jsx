import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/po_logo.png" alt="PowerOffice Go logo" />
        </div>
        <nav className="nav">
          <a href="/docs/index.html#Welcome.md">Documentation</a>
          <a href="https://github.com/PowerOffice/go-api/issues">Issue Tracker</a>
          <a href="mailto:go-api@poweroffice.no">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
