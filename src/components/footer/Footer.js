import React from 'react'
import "./Footer.css";

const Footer = () => {
	return (
		<footer className="footer">
		    <div className="footer-info">
		  		<h1>Victoria Escudero</h1>
		  		<p>La Plata | Buenos Aires | Argentina</p>
		    </div>
		    <div className="footer-contact">
		    	<h3> Contact me </h3>
		    	<p> And let's get down to work </p>		  
		    </div>
		    <div className="footer-sns">
		  		<div className="design-by">
		  				Design by me.
		  		</div>
		  		<div className="sns-links">
		  			<a href="https://ar.linkedin.com/in/victoria-escudero-905896164" target="_blank" rel="noreferrer">
		  				<i className="fab fa-linkedin linkedin"></i>
		  			</a>
		  			<a href="https://github.com/victoriaescude2" target="_blank" rel="noreferrer">
		  				<i className="fab fa-github github"></i>
		  			</a>	
					<a href="https://api.whatsapp.com/send?phone=542296421027" target="_blank" rel="noreferrer">
		  				<i className="fab fa-whatsapp whatsapp"></i>
		  			</a>  
		  			<a href="mailto:victoriaescudero99@gmail.com" target="_blank" rel="noreferrer">
		  				<i className="far fa-envelope gmail"></i>
		  			</a>
		  		</div>		
			</div>
		</footer>
	)
};

export default Footer;