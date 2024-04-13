import React from 'react';
import './searchTaskRooms.css';

const SearchTaskRooms = () => {
  return (
    <div className="search-task-rooms">
      <h2>All Your Rooms and Tasks</h2>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      <div className="filter">
        <select>
          <option value="">Filter</option>
          <option value="room">Room</option>
          <option value="task">Task</option>
        </select>
      </div>

      <div className="activities-container">
        <div className="activity-row">
          {/* Placeholder cards for recent activity */}
          <div className="activity-card"></div>
          <div className="activity-card"></div>
          <div className="activity-card"></div>
          <div className="activity-card"></div>
          <div className="activity-card"></div>
        </div>

        {/* More activity rows can be added here */}

      </div>
    </div>
  );
}

export default SearchTaskRooms;
