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
						Tengo 26 años y nací en la ciudad de Chajarí, Entre Ríos. Me gradué como Analista en
						Informática Aplicada (FICH - UNL - Santa Fe Capital). Actualmente, soy estudiante
						avanzado de Ingeniería en Informática y también formo parte de la cátedra de Proyecto
						Final de Carrera de Analista en Informática Aplicada, donde desempeño el rol de Ayudante
						Alumno. Además, me apasiona el desarrollo web y móvil, por lo que continúo ampliando mis
						conocimientos en desarrollo front-end a través de cursos en línea y realizando proyectos
						personales u ofreciendo mis servicios como freelance para clientes.
					</p>
				</div>
			</div>
		</section>
	);
};
