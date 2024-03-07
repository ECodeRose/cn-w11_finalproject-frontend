import React from 'react';
import './UserInfo.css';

const UserInfo = ({ name, surname, user, profilePicture }) => {
    const handleLogout = () => {
        // Add logout logic here
        alert('Logged out!');
    };

    return (
        <div className="user-info-container">
            <div className="user-info-left">
                {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />}
                <div>
                    <p className="user-greeting">Welcome, {name} {surname}!</p>
                    <p className="logged-in-as">Logged in as: {user}</p>
                </div>
            </div>
            <div className="user-info-right">
                <button className="user-info-button" onClick={handleLogout}>Logout</button>
                <button className="user-info-button">Profile</button>
                <button className="user-info-button">Settings</button>
            </div>
        </div>
    );
};

export default UserInfo;

