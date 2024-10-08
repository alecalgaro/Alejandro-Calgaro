import React from "react";
import SectionTitle from "./SectionTitle";
import styles from "../styles/Technologies.module.css";
import iconHTML from "../img/icons/icon-html.webp";
import iconCSS from "../img/icons/icon-css.webp";
import iconBootstrap from "../img/icons/icon-bootstrap.webp";
import iconTailwind from "../img/icons/icon-tailwind.webp";
import iconJS from "../img/icons/icon-js.webp";
import iconReact from "../img/icons/icon-react.webp";
import iconJava from "../img/icons/icon-java.webp";
import iconAndroid from "../img/icons/icon-android.webp";
import iconPython from "../img/icons/icon-python.webp";
import iconOdoo from "../img/icons/icon-odoo.webp";
import iconOpenCV from "../img/icons/icon-opencv.webp";
import iconMySQL from "../img/icons/icon-mysql.webp";
import iconFirebase from "../img/icons/icon-firebase.webp";
import iconGit from "../img/icons/icon-git.webp";
import iconGithub from "../img/icons/icon-github.webp";
import iconCopilot from "../img/icons/icon-copilot.webp";
import iconPlaywright from "../img/icons/icon-playwright.webp";
import iconFigma from "../img/icons/icon-figma.webp";
import Technologie from "./Technologie";

export const Technologies = () => {
	return (
		<section className={styles.container_technologies} id="technologies">
			<SectionTitle title="Tecnologías" />
			<div className={styles.content}>
				<Technologie icon={iconHTML} alt="icon-html" name="HTML" />
				<Technologie icon={iconCSS} alt="icon-css" name="CSS" />
				<Technologie icon={iconBootstrap} alt="icon-bootstrap" name="BOOTSTRAP" />
				<Technologie icon={iconTailwind} alt="icon-tailwind" name="TAILWIND" />
				<Technologie icon={iconJS} alt="icon-js" name="JS" />
				<Technologie icon={iconReact} alt="icon-react" name="REACT" />
				<Technologie icon={iconJava} alt="icon-java" name="JAVA" />
				<Technologie icon={iconAndroid} alt="icon-android" name="ANDROID" />
				<Technologie icon={iconPython} alt="icon-python" name="PYTHON" />
				<Technologie icon={iconOdoo} alt="icon-odoo" name="ODOO" />
				<Technologie icon={iconOpenCV} alt="icon-opencv" name="OPENCV" />
				<Technologie icon={iconMySQL} alt="icon-mysql" name="MYSQL" />
				<Technologie icon={iconFirebase} alt="icon-firebase" name="FIREBASE" />
				<Technologie icon={iconGit} alt="icon-git" name="GIT" />
				<Technologie icon={iconGithub} alt="icon-github" name="GITHUB" />
				<Technologie icon={iconCopilot} alt="icon-copilot" name="COPILOT" />
				<Technologie icon={iconPlaywright} alt="icon-playwright" name="PLAYWRIGHT" />
				<Technologie icon={iconFigma} alt="icon-figma" name="FIGMA" />
			</div>
		</section>
	);
};
