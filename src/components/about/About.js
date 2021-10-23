import React from 'react';
import "./About.css"; 
import imagenPerfil from "../../media/imagenPerfil.jpg";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-desc">
				<h3> </h3>
				<p>Tengo 22 años. Nací el 29 de Agosto de 1999 en Ayacucho, 
				Provincia de Buenos Aires. Desde el 2018, soy estudiante de Licenciatura en Sistemas en la Facultad de Informática 
				de la Universidad Nacional de La Plata, actualmente cursando 4to año. También, me encuentro trabajando en la Contaduria de la 
				Provincia de Buenos Aires y en algunos proyectos personales.</p>
		    </div>
		    <div className="about-img">
				<img src={imagenPerfil} alt="description"/>
		    </div>
		</div>
	);
};

export default About