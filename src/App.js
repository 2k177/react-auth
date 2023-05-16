import "./App.css";
import LoginButton from "./components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <Router>
      <div>
        <div className="topnav">
          <Link to="/">Home</Link>
          <Link to="/userinfo">Userinfo</Link>
          <div className="topnav-right">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>

        <Routes>
          <Route
            path="/userinfo"
            element={<UserInfo isAuthenticated={isAuthenticated} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <p>Home Page</p>;
}

function UserInfo(isAuthenticated) {
  console.log(isAuthenticated);
  if (isAuthenticated.isAuthenticated) {
    return <Profile />;
  } else {
    return <p>Please login to view userinfo...</p>;
  }
}
