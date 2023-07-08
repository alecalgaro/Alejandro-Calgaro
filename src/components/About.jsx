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
						Tengo 26 años y soy de la ciudad de Chajari (Entre Ríos). Me recibí de Analista en
						Informática Aplicada (FICH - UNL), en Santa Fe Capital, y continúo estudiando Ingeniería
						en Informática. Además de eso, me interesa desarrollarme en el área del desarrollo web y
						móvil.
					</p>
				</div>
			</div>
		</section>
	);
};
