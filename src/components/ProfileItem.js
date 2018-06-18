import React from 'react';
import mount from '../images/background/mount.jpg';
import './ProfileItem.css';

const ProfileItem = ({name, position}) => {
  return (
    <div className="profile-item">
      <div className="name">{name}</div>
      <div className="position">{position}</div>
    </div>
  )
}


export default ProfileItem;
