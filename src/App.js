import "./App.css";
import LoginButton from "./components/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

// function App() {
//   const { isLoading } = useAuth0();

//   if (isLoading) return <div>Loading...</div>;
//   return (
//     <div className="App">
//       <LoginButton />
//       <LogoutButton />
//       <Profile />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

export default function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return (
    <Router>
      <div>
        <div class="topnav">
          <Link to="/">Home</Link>
          <Link to="/userinfo">Userinfo</Link>
          <div class="topnav-right">
            <LoginButton />
          </div>
        </div>

        <Routes>
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <p>Home Page</p>;
}

function UserInfo() {
  return <p>User info</p>;
}
