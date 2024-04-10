import React, { useState } from 'react';

const DiscussionSection = ({ discussions }) => {
  const [newDiscussion, setNewDiscussion] = useState('');

  const handleNewDiscussionChange = (e) => {
    setNewDiscussion(e.target.value);
  };

  const handleNewDiscussionSubmit = (e) => {
    e.preventDefault();
    // Implement functionality to add new discussion
    // Reset the input field after submitting
    setNewDiscussion('');
  };

  return (
    <div className="discussion-section">
      <h2>Discussion Section</h2>
      <div className="discussion-list">
        {discussions.map((discussion, index) => (
          <div key={index} className="discussion">
            <p>{discussion}</p>
            {/* Add replies here if needed */}
          </div>
        ))}
      </div>
      <form onSubmit={handleNewDiscussionSubmit}>
        <textarea
          value={newDiscussion}
          onChange={handleNewDiscussionChange}
          placeholder="Start a new discussion..."
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default DiscussionSection;
