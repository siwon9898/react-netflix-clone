import React, { useEffect, useState } from "react";
import "./Nav.css";
export default function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = () => {};

  return (
    <nav className={`nav ${show && "nav_black"}`}>
      <img
        alt="Netflix Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        className="nav_logo"
        onClick={() => window.location.reload()}
      />

      <input
        value={searchValue}
        onChange={handleChange}
        className="nav_input"
        type="text"
        placeholder="영화를 검색해 주세요"
      />

      <img
        alt="User logged"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav_avatar"
      />
    </nav>
  );
}
