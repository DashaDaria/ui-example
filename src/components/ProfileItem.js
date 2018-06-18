import React from 'react';
import './ProfileItem.css';




const ProfileItem = ({name, position, background}) => {

  var divStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(2px)',
  }

  return (
    <div className="profile-item" style={divStyle}>
      <div className="name">{name}</div>
      <div className="position">{position}</div>
    </div>
  )
}


export default ProfileItem;
