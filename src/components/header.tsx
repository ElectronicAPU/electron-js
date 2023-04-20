import React, { useState } from 'react';

const Header = () => {
  const [message, setMessage] = useState('');

  const showMessage = () => {
    setMessage('Welcome to Codepartner!');
  };

  return (
    <div className="header">
      <div className="header-title">This is Header</div>
      <button 
        className="header-button" 
        onClick={showMessage}
      >
        Click me!
      </button>
      {message && (
        <div className="header-message">{message}</div>
      )}
    </div>
  );
};

export default Header;
