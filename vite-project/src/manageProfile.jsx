import React from 'react';
import './manageProfile.css';

const ManageProfile = () => {
  return (
    <div className="manage-profile">
      <h2>Manage Profile</h2>
      <form className="profile-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" />

        <button type="submit">Save Changes</button>
      </form>

      <button className="add-friend-button">Add Friends</button>
    </div>
  );
}

export default ManageProfile;
