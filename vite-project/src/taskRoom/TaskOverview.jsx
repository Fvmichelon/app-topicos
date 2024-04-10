import React from 'react';

const TaskOverview = ({ pendingTasks, completedTasks, discussions, addTask }) => {
  return (
    <div className="task-overview">
      <h2>Task Overview</h2>
      <div className="summary">
        <div className="summary-item">
          <h3>Pending Tasks</h3>
          <p>{pendingTasks.length}</p>
        </div>
        <div className="summary-item">
          <h3>Completed Tasks</h3>
          <p>{completedTasks.length}</p>
        </div>
        <div className="summary-item">
          <h3>Ongoing Discussions</h3>
          <p>{discussions.length}</p>
        </div>
      </div>
      <button onClick={addTask}>Add New Task</button>
    </div>
  );
}

export default TaskOverview;
