import React from 'react';
import './roomRegister.css';

const RoomRegister = () => {
  return (
    <div className="room-register">
      <h2>Create New Task Room</h2>
      <form className="register-form">
        <label htmlFor="nickname">Nickname:</label>
        <input type="text" id="nickname" name="nickname" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <input type="checkbox" id="invite-only" name="invite-only" />
        <label htmlFor="invite-only">Invite Only</label>

        <label htmlFor="description">Short Description:</label>
        <textarea id="description" name="description"></textarea>

        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default RoomRegister;
