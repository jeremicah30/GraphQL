// import React from 'react'
import logo from "./assets/logo.png";

export default function Header() {
  return (
    <div className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} alt="Logo" />
            <div>Project Management</div>
          </div>
        </a>
      </div>
    </div>
  );
}
