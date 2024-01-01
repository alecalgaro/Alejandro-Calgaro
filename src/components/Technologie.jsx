import React from "react";
import styles from "../styles/Technologie.module.css";

const Technologie = ({ icon, alt, name }) => {
	return (
		<div className={styles.technologie}>
			<img src={icon} alt={alt} className={styles.technologie_img} loading="lazy" />
			<p>{name}</p>
		</div>
	);
};

export default Technologie;
