import React from 'react';
import ProfileItem from './ProfileItem';
import mount from '../images/background/mount.jpg';

const ProfileList = () => {
  return (
    <div className="profile-container">
      <ProfileItem name={"Joe Doe"} position="Marketer"/>
      <ProfileItem name={"Sally Foo Longname"} position="Engineer"/>
      <ProfileItem name={"Carlos Random"} position="Devops"/>
    </div>
  )
}


export default ProfileList;
