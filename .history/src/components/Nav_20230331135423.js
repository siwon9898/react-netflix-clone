import React from "react";
import "./Nav.css";
export default function Nav() {
  return (
    <nav className="Nav">
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        className="nav_lgoo"
        onClick={() => window.location.reload()}
      />

      <img
        alt="User logged"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav_avatar"
      />
    </nav>
  );
}
