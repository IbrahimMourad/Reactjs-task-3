import React from "react";

const Profile = ({ fullName, bio, profession, children, handleName }) => {
  handleName(fullName);
  return (
    <div>
      <img src={children} alt="profile" />
      <p>{fullName}</p>
      <span>{profession}</span>
      <p>{bio}</p>
    </div>
  );
};

// Set default props
Profile.defaultProps = {
  fullName: "John Doe",
  bio: "zzz",
  profession: "ccc",
  children: " https://via.placeholder.com/150C/O https://placeholder.com/",
};

export default Profile;
