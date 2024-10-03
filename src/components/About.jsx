import React from "react";
import SectionTitle from "./SectionTitle";
import styles from "../styles/About.module.css";
import imgPerfil from "../img/img-perfil.webp";

export const About = () => {
	return (
		<section className={styles.container_about} id="about">
			<div className={styles.content}>
				<SectionTitle title="Sobre mí" />
				<div className={styles.subcontent}>
					<img
						src={imgPerfil}
						alt="foto de perfil"
						className={styles.img_profile}
						width="140"
						height="140"
					/>
					<p className={styles.paragraph}>
						Soy Analista en Informática Aplicada y estudiante avanzado de Ingeniería en Informática
						en la Facultad de Ingeniería y Ciencias Hídricas, Universidad Nacional del Litoral
						(Santa Fe). Actualmente, soy docente en la carrera de Analista en Informática Aplicada y
						en la Tecnicatura Universitaria en Informática Aplicada al Diseño Multimedia y de Sitios
						Web. Además, realizo proyectos web de manera freelance.
					</p>
				</div>
			</div>
		</section>
	);
};
