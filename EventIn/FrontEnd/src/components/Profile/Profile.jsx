import React from "react";

import proimg from "./noprofil.jpg";
import "./Profile.css";


const Profile = () => {
  const name="ram"
  const userId="sece001"
  const email="ram@gmail.com"
  const  password="ram@123"
  const phoneNo="9999988888"
  return (
    <div>
      <h1>Profile</h1>
      <div className="whole-container">
        <div className="profile-left">
          <div className="profile-container">
            <img
              src={proimg}
              alt="profile_pic"
              className="profile-container-proimg"
            />
          </div>
          <br />
          <div className="edit">
            <button className="edit-button">Edit</button>
          </div>
        </div>
        <div className="details-right">
          <div className="details">
            <br />
            <div className="user-pro">
              <h3>User Id</h3>
              <div className="id">
                <h4>{userId}</h4>
              </div>
            </div>
            <br />
            <div className="user-pro">
              <h3>User Name</h3>
              <div className="name">
                <h4>{name}</h4>
              </div>
            </div>
            <br />
            <div className="user-pro">
              <h3>E-mail</h3>
              <div className="mail">
                <h4>{email}</h4>
              </div>
            </div>
            <br />
            <div className="user-pro">
              <h3>Password</h3>
              <div className="pass">
                <h4>{password}</h4>
              </div>
            </div>
            <br />
            <div className="user-pro">
              <h3>Phone No</h3>
              <div className="number">
                <h4>{phoneNo}</h4>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
