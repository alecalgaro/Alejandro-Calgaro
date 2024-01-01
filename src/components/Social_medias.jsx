import React from "react";
import styles from "../styles/Social_medias.module.css";
import iconLinkedin from "../img/icons/icon-linkedin.svg";
import iconGithub from "../img/icons/icon-github.svg";
import iconCV from "../img/icons/icon-cv.svg";
import pdfCV from "../img/cv.pdf";

export const Social_medias = () => {
	return (
		<div className={styles.container}>
			<a href="https://www.linkedin.com/in/alejandrocalgaro/" target="_blank">
				<img src={iconLinkedin} alt="Icono de Linkedin" className={styles.icon} />
			</a>
			<a href="https://github.com/alecalgaro" target="_blank">
				<img src={iconGithub} alt="Icono de Github" className={styles.icon} />
			</a>
			<a href={pdfCV} download="Calgaro Alejandro - CV.pdf">
				<img src={iconCV} alt="Icono de CV" className={styles.icon} />
			</a>
		</div>
	);
};
