import React from "react";
import useIntersection from "../hooks/useIntersection";

import styles from "../styles/SectionTitle.module.css";

const SectionTitle = ({ title }) => {
	const [elementRef, isIntersecting] = useIntersection({
		threshold: 0.1,
	});

	return (
		<>
			<h3 ref={elementRef} className={`${styles.title} ${isIntersecting ? styles.underline : ""}`}>
				{title}
			</h3>
		</>
	);
};

export default SectionTitle;
