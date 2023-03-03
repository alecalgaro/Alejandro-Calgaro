import React from "react";
import useIntersection from "../hooks/useIntersection";
import styles from "../styles/Technologie.module.css";

const Technologie = ({ icon, alt, name }) => {
	const [elementRef2, isIntersecting] = useIntersection({
		threshold: 0.1,
	});

	return (
		<div
			className={`${styles.technologie} ${isIntersecting ? styles.visible : ""}`}
			ref={elementRef2}
		>
			<img src={icon} alt={alt} />
			<p>{name}</p>
		</div>
	);
};

export default Technologie;
