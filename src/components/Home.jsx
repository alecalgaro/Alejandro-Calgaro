import React from "react";
import styles from "../styles/Home.module.css";
import { Social_medias } from "./Social_medias";
import imgPerfil from "../img/img-perfil.webp";
import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export const Home = () => {
	return (
		<motion.section
			className={styles.container_home}
			id="home"
			initial="hidden"
			animate="visible"
			variants={variants}
		>
			<h1 className={styles.title}>Alejandro Calgaro</h1>
			<p className={styles.description}>Desarrollador frontend</p>
			<img
				src={imgPerfil}
				alt="foto de perfil"
				className={styles.img_profile}
				width="140"
				height="140"
			/>
			<Social_medias />
		</motion.section>
	);
};
