import React, { useState } from 'react';

const TaskList = ({ tasks }) => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(task => task.status === filter);

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <div className="filter">
        <label htmlFor="filter">Filter:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="in-progress">In Progress</option>
        </select>
      </div>
      <ul className="tasks">
        {filteredTasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>Description: {task.description}</p>
            <p>Assigned Members: {task.assignedMembers.join(', ')}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
