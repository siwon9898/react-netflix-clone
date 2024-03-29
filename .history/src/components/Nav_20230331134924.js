import React from "react";

export default function Nav() {
  return (
    <nav>
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
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
