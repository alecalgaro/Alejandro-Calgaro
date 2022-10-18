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
						Tengo 26 años, soy de la ciudad de Chajari (Entre Ríos). Me recibí de Analista en
						Informática Aplicada en la Universidad Nacional del Litoral de Santa Fe Capital (FICH -
						UNL), y actualmente continúo estudiando Ingeniería en Informática en la misma
						universidad. Además de eso, he realizado cursos online sobre distintas tecnologías
						relacionadas al desarrollo web y desarrollo móvil.
					</p>
				</div>
			</div>
		</section>
	);
};
