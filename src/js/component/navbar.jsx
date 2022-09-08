import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <div>
      <a className="navbar-brand text-secondary"  href="#">Start Bootstrap</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
     <div className="d-flex justify-content-end">
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-end">
        <li className="nav-item">
            <a className="nav-link text-secondary" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active text-secondary" aria-current="page" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary">Contact</a>
          </li>
        </ul>
      </div>
     </div>
    </div>
  </nav>
	);
};

export default Navbar;