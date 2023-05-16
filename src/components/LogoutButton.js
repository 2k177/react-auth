import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="logbutton" onClick={() => logout()}>
        Log Out
      </button>
    )
  );
};

export default LogoutButton;
