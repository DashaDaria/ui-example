import React from 'react';
import mount from '../images/background/mount.jpg';
import city from '../images/background/city.jpg';
import road from '../images/background/road.jpg';

const ProfileList = () => {
  return (
    <div className="profile-container">
      <div className="profile1">
      <div className="name1">John Doe</div>
      <div className="position1">Marketing</div>
      <div className="image1"> {mount}</div>
      </div>

      <div className="profile2">
      <div className="name2">Sally</div>
      <div className="position2">Engineer/div>
      <div className="image2"></div>

      <div className="profile3">
      <div className="name3">John Doe</div>
      <div className="position3">John Doe</div>
      <div className="image3"></div>

    </div>
  )
}


export default ProfileList;
