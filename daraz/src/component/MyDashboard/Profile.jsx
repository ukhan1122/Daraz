import React from "react";
import { useSelector } from "react-redux";
import './Myprofile.css'; 

const Profile = () => {
    const { user } = useSelector((state) => state.user);

    return (
        <div className="profile-container">
            <div className="profile-card">
                <h2 className="profile-title">User Profile</h2>
                <div className="profile-info">
                    <div className="profile-item">
                        <span className="profile-label">Name:</span>
                        <span className="profile-value">{user?.name || "No name available"}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Role:</span>
                        <span className="profile-value">{user?.role || "No role available"}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Email:</span>
                        <span className="profile-value">{user?.email || "No email available"}</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-label">Date of Birth:</span>
                        <span className="profile-value">{user?.dob || "No date of birth available"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
