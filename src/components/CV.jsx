import React from "react";
import styles from "../styles/CV.module.css";
import pdfCV from "../img/cv.pdf";

export const CV = () => {
	return (
		<section className={styles.conteiner_cv} id="cv">
			<a href={pdfCV} download="Calgaro Alejandro - CV.pdf" className={styles.cv}>
				Descargar CV
			</a>
		</section>
	);
};
