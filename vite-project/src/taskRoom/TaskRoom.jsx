import React from 'react';
import Header from './Header';
import TaskOverview from './TaskOverview';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import DiscussionSection from './DiscussionSection';
import FilesSection from './FilesSection';
import ParticipantList from './ParticipantList';
import ActionsLog from './ActionsLog'; 

const TaskRoom = () => {
  return (
    <div className="task-room">
      <Header />
      <div className="content">
        <div className="left-column">
          <TaskOverview />
          <TaskList />
        </div>
        <div className="right-column">
          <TaskDetails />
          <DiscussionSection />
          <FilesSection />
          <ParticipantList />
          <ActionsLog />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TaskRoom;
