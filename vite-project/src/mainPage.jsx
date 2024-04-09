import React from 'react';
import './mainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <h1 className="title">i Tasks</h1>

      <p className="recent-activity-text">Recent Activity</p>

      <div className="activity-row">
        {/* Placeholder cards for recent activity */}
        <div className="activity-card"></div>
        <div className="activity-card"></div>
        <div className="activity-card"></div>
      </div>

      <div className="activity-row">
        {/* Placeholder cards for recent activity */}
        <div className="activity-card"></div>
        <div className="activity-card"></div>
        <div className="activity-card"></div>
      </div>

      <div className="action-buttons">
        <button className="action-button">Create Task Room</button>
        <button className="action-button">Enter Task Room</button>
      </div>

      <div className="action-buttons">
        <button className="action-button">Access All Task Rooms</button>
        <button className="action-button">Manage Profile</button>
      </div>

      <div className="faq-support-buttons">
        <button className="hyperlink-button">FAQ</button>
        <button className="hyperlink-button">Support & Suggestions</button>
      </div>
    </div>
  );
}

export default MainPage;
