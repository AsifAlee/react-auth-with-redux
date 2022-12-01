import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.auth);
  // debugger;
  // if (!currentUser) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{user?.user?.username}</strong> Profile Profile
        </h3>
      </header>
      {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> */}
      <p>{/* <strong>Id:</strong> {currentUser.id} */}</p>
      <p>
        <strong>Email:</strong> {user?.user?.email}
      </p>
      <p>{/* <strong>{currentUser.role}</strong> */}</p>
      {/* <strong>Authorities:</strong> */}
      {/* <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> */}
      {/* Profile */}
    </div>
  );
};

export default Profile;
