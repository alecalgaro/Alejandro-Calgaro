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
						Me recibí como Analista en Informática Aplicada (FICH - UNL). Actualmente, soy
						estudiante avanzado de Ingeniería en Informática y formo parte de la cátedra de Proyecto
						Final de Carrera de Analista en Informática Aplicada. Me apasiona el desarrollo web y
						móvil, por lo que continúo ampliando mis conocimientos a través de cursos en línea y
						realizando proyectos freelance.
					</p>
				</div>
			</div>
		</section>
	);
};
