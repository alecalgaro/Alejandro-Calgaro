import React from "react";
import styles from "../styles/Social_medias.module.css";
import iconLinkedin from "../img/icons/icon-linkedin.svg";
import iconGithub from "../img/icons/icon-github.svg";
import iconCV from "../img/icons/icon-cv.svg";
import pdfCV from "../img/cv.pdf";
import { motion } from "framer-motion";

const container = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	},
};

const item = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
};

export const Social_medias = () => {
	return (
		<motion.div
			className={styles.container}
			variants={container}
			initial="hidden"
			animate="visible"
		>
			<motion.a
				variants={item}
				href="https://www.linkedin.com/in/alejandrocalgaro/"
				target="_blank"
			>
				<img src={iconLinkedin} alt="Icono de Linkedin" className={styles.icon} />
			</motion.a>
			<motion.a variants={item} href="https://github.com/alecalgaro" target="_blank">
				<img src={iconGithub} alt="Icono de Github" className={styles.icon} />
			</motion.a>
			<motion.a variants={item} href={pdfCV} download="Calgaro Alejandro - CV.pdf">
				<img src={iconCV} alt="Icono de CV" className={styles.icon} />
			</motion.a>
		</motion.div>
	);
};
