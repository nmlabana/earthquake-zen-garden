import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

export default function ProfileView() {
  const { state } = useLocation();
  const { profile } = state;
  const { pageTitle } = state;

  useEffect(() => {
    document.title =  "User Profile - " + pageTitle;  
  }, []);

  return (
    <div>
      <h3>Profile</h3>
      <div className="profile-wrapper">
          <span className="image-wrapper">
              <img className="profile-image" src={profile.avatarImage}/>
          </span>
          <span>
            <div className="profile-info">
              <span className="profile-left">First name </span>
              <span className="profile-right">{profile.firstName}</span>
            </div>
            <div className="profile-info">
              <span className="profile-left">Last name </span>
              <span className="profile-right">{profile.lastName}</span>
            </div>
            <div className="profile-info">
              <span className="profile-left">Phone </span>
              <span className="profile-right">{profile.phone}</span>
            </div>
            <div className="profile-info">
              <span className="profile-left">Email </span>
              <span className="profile-right">{profile.email}</span>
            </div>
            <div className="profile-info">
              <span className="profile-left">Bio </span>
              <span className="bio-text profile-right">{profile.bio}</span>
            </div>
          </span>
      </div>
    </div>
  );
}
