import React from "react";
import styles from "../styles/Project.module.css";
import Topic from "../components/Topic";
import iconGithub from "../img/icons/icon-github.webp";
import iconWeb from "../img/icons/icon-web.webp";
import { motion } from "framer-motion";

const variants = {
	hidden: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1 },
};

export const Project = ({ title, description, url_img, topics, github, web }) => {
	return (
		<>
			<motion.div className={styles.project} initial="hidden" animate="visible" variants={variants}>
				<div className={styles.column1}>
					<h3>{title}</h3>
					<p>{description}</p>
					<div className={styles.topics}>
						{topics ? topics.map((topic, index) => <Topic text={topic} key={index} />) : null}
					</div>
					<div className={styles.links}>
						{github ? (
							<a href={github} target="_blank">
								<img src={iconGithub} alt="icon-github" className={styles.icon} />
							</a>
						) : null}
						{web ? (
							<a href={web} target="_blank">
								<img src={iconWeb} alt="icon-web" className={styles.icon} />
							</a>
						) : null}
					</div>
				</div>
				<img src={url_img} alt="imagen proyecto" className={styles.img_project} />
			</motion.div>
		</>
	);
};
