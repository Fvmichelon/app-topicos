import React, { useState } from 'react';

const NotificationCenter = ({ notifications }) => {
  const [settings, setSettings] = useState({
    newTasks: true,
    comments: true,
    updates: true,
  });

  const handleSettingsChange = (e) => {
    const { name, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  return (
    <div className="notification-center">
      <h2>Notification Center</h2>
      <div className="notification-settings">
        <h3>Notification Settings</h3>
        <label>
          <input
            type="checkbox"
            name="newTasks"
            checked={settings.newTasks}
            onChange={handleSettingsChange}
          />
          New Tasks
        </label>
        <label>
          <input
            type="checkbox"
            name="comments"
            checked={settings.comments}
            onChange={handleSettingsChange}
          />
          Comments
        </label>
        <label>
          <input
            type="checkbox"
            name="updates"
            checked={settings.updates}
            onChange={handleSettingsChange}
          />
          Updates
        </label>
      </div>
      <div className="notifications">
        <h3>Notifications</h3>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>
              <span>{notification.timestamp}: </span>
              <span>{notification.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NotificationCenter;
