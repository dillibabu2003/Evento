import React from "react";

import proimg from "./noprofil.jpg";
import "./Profile.css";

import { useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Kanna",
    userId: "sece001",
    email: "kanna.radha@gmail.com",
    password: "kanna@radha@321",
    phoneNo: "9389207463",
  });
  const [editable, setEditable] = useState(false);

  const handleEditClick = () => {
    setEditable(true);
  };

  const handleSaveClick = () => {
    setEditable(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
    
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
         
        </div>
        <div className="details-right">
          <div className="details">
            <br />
            <div className="user-pro">
              <h3>User Id</h3>
              <dic className="id">
                {editable ? (
                  <input
                    type="text"
                    id="userId"
                    name="userId"
                    value={userData.userId}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.userId}</span>
                )}
              </dic>
            </div>
            <hr/>
            <div className="user-pro">
              <h3>User Name</h3>
              <div className="name">
                {editable ? (
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.name}</span>
                )}
              </div>
            </div>
           <hr/>
            <div className="user-pro">
              <h3>E-mail</h3>
              <div className="mail">
                {editable ? (
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.email}</span>
                )}
              </div>
            </div>
            <hr/>
            <div className="user-pro">
              <h3>Password</h3>
              <div className="pass">
                {editable ? (
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.password}</span>
                )}
              </div>
            </div>
            <hr/>
            <div className="user-pro">
              <h3>Phone No</h3>
              <div className="number">
                {editable ? (
                  <input
                    type="text"
                    id="phoneNo"
                    name="phoneNo"
                    value={userData.phoneNo}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{userData.phoneNo}</span>
                )}
              </div>
            </div>
            <hr/>
          </div>
        </div>
                  <br/>
        <div className="edit">
            {editable ? (
              <button className="edit-button" onClick={handleSaveClick}>
                SAVE
              </button>
            ) : (
              <button className="edit-button" onClick={handleEditClick}>
                UPDATE PROFILE
              </button>
            )}
          </div>

      </div>
    </div>
  );
};

export default Profile;
