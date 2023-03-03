import React from "react";
import useIntersection from "../hooks/useIntersection";
import styles from "../styles/Technologie.module.css";

const Technologie = ({ icon, alt, name }) => {
	const [elementRef2, isIntersecting] = useIntersection({});

	return (
		<div
			className={`${styles.technologie} ${isIntersecting ? styles.visible : ""}`}
			ref={elementRef2}
		>
			<img src={icon} alt={alt} className={styles.technologie_img} />
			<p>{name}</p>
		</div>
	);
};

export default Technologie;
