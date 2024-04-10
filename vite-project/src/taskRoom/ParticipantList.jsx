import React from 'react';

const ParticipantList = ({ participants }) => {
  return (
    <div className="participant-list">
      <h2>Participant List</h2>
      <ul>
        {participants.map((participant, index) => (
          <li key={index}>
            <span>{participant.name}</span>
            <button>View Profile</button>
            <button>Send Message</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ParticipantList;
