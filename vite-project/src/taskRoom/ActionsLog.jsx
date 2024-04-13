import React, { useState } from 'react';

const ActivityLog = ({ activities }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredActivities = filter === 'all' ? activities : activities.filter(activity => activity.type === filter);

  return (
    <div className="activity-log">
      <h2>Activity Log</h2>
      <div className="filter">
        <label htmlFor="filter">Filter:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="task-update">Task Update</option>
          <option value="comment">Comment</option>
          <option value="file-upload">File Upload</option>
        </select>
      </div>
      <ul className="activities">
        {filteredActivities.map((activity, index) => (
          <li key={index}>
            <span>{activity.timestamp}: </span>
            <span>{activity.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActionsLog;
