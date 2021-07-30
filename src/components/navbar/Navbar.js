import React from 'react'
import "./Navbar.css";

const Navbar =({isScrolling}) => {
	const toTheTop = () => {
		window.scrollTo({ top: 0, left: 0, behaviour: "smooth"});
	}
	return (
		<nav className={`navbar ${isScrolling > 10 ? "scrolling" : null}`}>
			<div className="navbar-logo" onClick={toTheTop}>
				Informacion
			</div>
		</nav>

	);
};

export default Navbar;