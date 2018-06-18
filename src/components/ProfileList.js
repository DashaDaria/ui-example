import React from 'react';
import mount from '../images/background/mount.jpg';

const ProfileList = () => {
  return (
    <div className="profile-container">
      <img src={mount} className="background" alt="mount"/>
      <p>John Doe</p>
    </div>
  )
}


export default ProfileList;
