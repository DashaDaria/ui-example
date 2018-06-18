import React from 'react';
import ProfileItem from './ProfileItem';
import mount from '../images/background/mount.jpg';
import city from '../images/background/city.jpg';
import road from '../images/background/road.jpg';

const ProfileList = () => {
  return (
    <div className="profile-container">
      <ProfileItem name="Joe Doe" position="Marketer" background={mount}/>
      <ProfileItem name="Sally Foo Longname" position="Engineer" background={city}/>
      <ProfileItem name="Carlos Random" position="Devops" background={road}/>
    </div>
  )
}


export default ProfileList;
