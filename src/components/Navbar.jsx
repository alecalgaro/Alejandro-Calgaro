import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import imgLogo from "../img/logo_navbar.webp";

export const Navbar = () => {
	const [clicked, setClicked] = useState(false);

	const handleClickLink = () => {
		setClicked(false);
	};

	const handleClickBtn = () => {
		setClicked(!clicked);
	};
	return (
		<>
			<NavContainer>
				<a href="#home">
					<img src={imgLogo} alt="logo" />
				</a>
				<div className={`links ${clicked ? "active" : ""}`}>
					<a onClick={handleClickLink} href="#about">
						Sobre mí
					</a>
					<a onClick={handleClickLink} href="#projects">
						Proyectos
					</a>
					<a onClick={handleClickLink} href="#technologies">
						Tecnologías
					</a>
					<a onClick={handleClickLink} href="#experience">
						Experiencia
					</a>
					<a onClick={handleClickLink} href="#cv">
						Contacto
					</a>
				</div>
				<div className="burguer">
					<BurguerButton clicked={clicked} handleClick={handleClickBtn} />
				</div>
			</NavContainer>

			<BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
		</>
	);
};

export default Navbar;

const NavContainer = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	background-color: var(--white);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	z-index: 10;
	padding: 0.5rem;

	@media (min-width: 768px) {
		padding: 0.5rem;
	}

	img {
		width: 4rem;
		margin-left: 1rem;
	}

	.links {
		position: absolute;
		top: -700px;
		left: -1500px;
		right: 0; /* es para cuando se cierra el menu, para que se vaya hacia la izquierda y arriba */
		text-align: center;
		transition: all 0.5s ease;

		a {
			color: var(--white);
			display: block;
			font-size: 3rem;
			text-transform: uppercase;
			font-weight: 800;
			letter-spacing: 2px;
			margin: 1.2rem;
			text-decoration: none;
			transition: color 0.3s;

			&:hover {
				color: var(--black);
			}
		}

		@media (min-width: 768px) {
			position: initial;
			margin: 0;
			padding: 1rem;

			a {
				font-size: 1.6rem;
				letter-spacing: 1px;
				color: var(--black);
				display: inline;
				margin-left: 1rem;
				font-weight: 600;

				&:hover {
					color: var(--secondary);
				}
			}
		}
	}

	.links.active {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 2rem;
		left: 0;
		right: 0;
		text-align: center;
	}

	.burguer {
		@media (min-width: 768px) {
			display: none;
		}
	}
`;

const BgDiv = styled.div`
	background-color: var(--primary);
	position: fixed;
	top: -1000px;
	left: -1500px;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: all 0.6s ease;

	&.active {
		top: 50px;
		left: 0;
	}
`;
