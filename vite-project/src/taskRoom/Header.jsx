import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = ({ roomName }) => {
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/">Back to Main Page</Link>
      </div>
      <div className="header-center">
        <h1>{roomName}</h1>
      </div>
      <div className="header-right">
        <Link to="/room-settings">Manage Room Settings</Link>
        <Link to="/logout">Log Out</Link>
      </div>
    </div>
  );
}

export default Header;
