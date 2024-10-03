import React from "react";
import styles from "../styles/Education.module.css";
import SectionTitle from "./SectionTitle";

export const Experience = () => {
	return (
		<section className={styles.container_education} id="experience">
			<SectionTitle title="Experiencia" />
			<div className={styles.content}>
				<p className={styles.year}>2023 - Actualmente</p>
				<p className={styles.title}>Ayudante de cátedra</p>
				<p className={styles.description}>
					Ayudante de Cátedra en Proyecto Final de Carrera de Analista en Informática Aplicada (FICH
					-UNL).
				</p>
			</div>

			<div className={styles.content}>
				<p className={styles.year}>2024 - Actualmente</p>
				<p className={styles.title}>Docente</p>
				<p className={styles.description}>
					Docente responsable de la asignatura “Desarrollo de aplicaciones móviles” en la
					Tecnicatura Universitaria en Informática aplicada al Diseño Multimedia y de Sitios Web
					(FICH - UNL).
				</p>
			</div>

			<div className={styles.content}>
				<p className={styles.year}>Actualmente</p>
				<p className={styles.title}>Desarrollo freelance</p>
				<p className={styles.description}>
					Desarrollo de proyectos personales o para clientes, llevados a cabo de forma individual o
					en equipo, tales como páginas web y aplicaciones web o móviles.
				</p>
			</div>
		</section>
	);
};
