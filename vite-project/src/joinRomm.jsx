import React from 'react';
import './joinRoom.css';

const JoinRoom = () => {
  return (
    <div className="join-room">
      <h2>Join Task Room</h2>
      <form className="join-form">
        <label htmlFor="code">Room Code:</label>
        <input type="text" id="code" name="code" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Join</button>
      </form>
    </div>
  );
}

export default JoinRoom;
