import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const User = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="userWrapper">
      <div
        className="userContainer"
        onClick={() => {
          setShow(!show);
        }}
      >
        <img
          className="userImage"
          src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png"
        />
      </div>
      {show && (
        <div className="dropdown" onClick={handleLogout}>
          <p>logout</p>
        </div>
      )}
    </div>
  );
};

export default User;
