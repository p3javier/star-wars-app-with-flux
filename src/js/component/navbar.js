import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3" style={{ flexDirection: "row-reverse"}}>
			<button class="btn btn-primary dropdown-toggle me-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
		</nav>
	);
};
