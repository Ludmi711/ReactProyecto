import React from "react";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
	return (
		<div className="container">
			<nav className="nav">
				<div className="nav__brand">
					<NavLink className="nav__link" to="/">
						<h1>GUAMI TIENDA ONLINE</h1>
					</NavLink>
				</div>
				<ul className="nav__list">
					<li>
						<NavLink className="nav__link" to="/categoria/clases">
							Clases
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="/categoria/productos">
							Productos
						</NavLink>
					</li>
					<li>
						<NavLink className="nav__link" to="cart">
							<CartWidget />
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
