import React from "react";
import styled from "styled-components";

const SectionTitle = ({ title }) => {
	return (
		<>
			<Title>{title}</Title>
			{/* <div></div> */}
		</>
	);
};

export default SectionTitle;

const Title = styled.div`
	font-size: 3rem;
	font-weight: 900;
	text-transform: uppercase;
	position: relative;
	margin-bottom: 3rem;
	letter-spacing: 0.2rem;
	color: var(--black);

	&:after {
		content: "";
		display: block; // para que aparezca abajo
		background-color: var(--primary);
		height: 8px;
		margin: -1.8rem 0 0 0;
	}
`;
