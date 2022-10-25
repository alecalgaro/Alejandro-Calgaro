import React from "react";
import styled from "styled-components";

function BurguerButton(props) {
	// Hay varias opciones, en el tutorial se uso el "5":
	// https://codepen.io/ahmadbassamemran/pen/VQwPGr

	return (
		<Burguer>
			<div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? "open" : ""}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</Burguer>
	);
}

export default BurguerButton;

// El botón y los estilos son sacados de la página que deje arriba de codepen
const Burguer = styled.div`
	/* nav-icon-5 */
	.nav-icon-5 {
		width: 30px;
		height: 30px;
		margin: 10px 15px;
		position: relative;
		cursor: pointer;
		display: inline-block;
	}
	.nav-icon-5 span {
		background-color: var(--primary);
		position: absolute;
		border-radius: 2px;
		transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
		width: 100%;
		height: 4px;
		transition-duration: 500ms;
	}
	.nav-icon-5 span:nth-child(1) {
		top: 0px;
		left: 0px;
	}
	.nav-icon-5 span:nth-child(2) {
		top: 13px;
		left: 0px;
		opacity: 1;
	}
	.nav-icon-5 span:nth-child(3) {
		bottom: 0px;
		left: 0px;
	}
	.nav-icon-5:not(.open):hover span:nth-child(1) {
		transform: rotate(-3deg) scaleY(1.1);
	}
	.nav-icon-5:not(.open):hover span:nth-child(2) {
		transform: rotate(3deg) scaleY(1.1);
	}
	.nav-icon-5:not(.open):hover span:nth-child(3) {
		transform: rotate(-4deg) scaleY(1.1);
	}
	.nav-icon-5.open span:nth-child(1) {
		transform: rotate(45deg);
		top: 13px;
	}
	.nav-icon-5.open span:nth-child(2) {
		opacity: 0;
	}
	.nav-icon-5.open span:nth-child(3) {
		transform: rotate(-45deg);
		top: 13px;
	}
`;
