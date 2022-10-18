import React from "react";
import styled from "styled-components";

const SectionTitle = ({ title }) => {
	return <Title>{title}</Title>;
};

export default SectionTitle;

const Title = styled.div`
	font-size: 3rem;
	font-weight: 900;
	text-transform: uppercase;
	position: relative;
	margin-bottom: 3rem;
	letter-spacing: 0.2rem;
	border-bottom: 4px solid var(--primary);
	color: var(--black);
`;
