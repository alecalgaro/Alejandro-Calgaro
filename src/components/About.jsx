import React from "react";
import SectionTitle from "./SectionTitle";
import styles from "../styles/About.module.css";

export const About = () => {
	return (
		<section className={styles.container_about} id="about">
			<div className={styles.content}>
				<SectionTitle title="Sobre mí" />
				<p className={styles.paragraph}>
					{" "}
					Tengo 26 años, soy de la ciudad de Chajari (Entre Ríos). Me recibí de Analista en
					Informática Aplicada en la Universidad Nacional del Litoral de Santa Fe Capital (FICH -
					UNL), y actualmente continúo estudiando Ingeniería en Informática en la misma universidad.
					Además de eso, he realizado cursos online sobre distintas tecnologías relacionadas al
					desarrollo web y desarrollo móvil.
				</p>
			</div>
		</section>
	);
};
