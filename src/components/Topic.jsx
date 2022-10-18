import React from "react";
import styles from "../styles/Topic.module.css";

const Topic = ({ text }) => {
	return (
		<>
			<p className={styles.topic_text}>{text}</p>
		</>
	);
};

export default Topic;
