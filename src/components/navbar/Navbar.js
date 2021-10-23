import React from 'react'
import "./Navbar.css";

const Navbar =({isScrolling}) => {
	const toAbout = () => {
		window.scrollTo({ top: 750, left: 0, behaviour: "smooth"});
	}
	const toProyects = () => {
		window.scrollTo({ top: 1400, left: 0, behaviour: "smooth"});
	}
	const toContact = () => {
		window.scrollTo({ top: 2200, left: 0, behaviour: "smooth"});
	}

	return (
		<nav className={`navbar ${isScrolling >= 0 ? "scrolling" : null}`}>
			<li class="nav-item ms-auto" >
					<a className="navbar-logo" onClick={toAbout}> Información |</a>
					<a className="navbar-logo" onClick={toProyects}> Proyectos |</a>
					<a className="navbar-logo" onClick={toContact}> Contacto |</a>
			</li>
		</nav>

	);
};

export default Navbar;