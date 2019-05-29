import React from 'react';

import './styles.css';

import pic from '../../assets/pic.jpg';

export const Profile = () => {
  return (
    <div className="Profile">
      <div className="user-profile">
        <img src={pic} alt="user headshot" className="user-photo" />
        <div className="user-bio-section">
          <div className="bio-header">
            <h1 className="user-name">User Name</h1>
            <button className="edit-profile-button">Edit Profile</button>
            <button className="logout-button">Logout</button>
          </div>
          <p className="user-about-me">ABOUT ME</p>

          <p className="user-bio">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, minima at!
            Voluptate animi, nemo reprehenderit, impedit nisi commodi repellat sed rerum quam,
            libero sapiente eveniet non neque delectus nesciunt autem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
