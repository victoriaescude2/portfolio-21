import React from 'react';
import "./About.css"; 

import imagenPerfil from "../../media/imagenPerfil.jpg";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-desc">
				<h3> </h3>
				<p>Me llamo Victoria Escudero tengo 21 años. Nací el 29 de Agosto de 1999 en Ayacucho 
				Provincia de Buenos Aires. Soy estudiante de Licenciatura en Sistemas en la Facultad de Informatica 
				de la Universidad Nacional de La Plata.</p>
		    </div>
		    <div className="about-img">
				<img src={imagenPerfil} />
		    </div>
		</div>
	);
};

export default About