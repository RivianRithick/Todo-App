import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid bg-dark">
          <span class="headNav navbar-brand mb-0 h1 bg-dark">To-Do List</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
