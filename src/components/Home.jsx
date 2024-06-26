import React from "react";
import styles from "../styles/Home.module.css";
import { Social_medias } from "./Social_medias";
import imgLogo from "../img/logo_ac.webp";

export const Home = () => {
	return (
		<section className={styles.container_home} id="home">
			<h1 className={styles.title}>Alejandro Calgaro</h1>
			<p className={styles.description}>Desarrollador Web y Móvil</p>
			<img
				src={imgLogo}
				alt="foto de perfil"
				className={styles.img_profile}
				width="140"
				height="140"
			/>
			<Social_medias />
		</section>
	);
};
