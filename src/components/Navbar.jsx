import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import imgLogo from "../img/logo-ca.webp";

export const Navbar = () => {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		setClicked(!clicked);
	};
	const handleClickLink = () => {
		setClicked(!clicked);
	};
	return (
		<>
			<NavContainer>
				<a href="#home">
					{" "}
					<Logo src={imgLogo} alt="logo-ca" />{" "}
				</a>
				<div className={`links ${clicked ? "active" : ""}`}>
					<a onClick={handleClickLink} href="#home">
						Inicio
					</a>
					<a onClick={handleClickLink} href="#about">
						Sobre mí
					</a>
					<a onClick={handleClickLink} href="#education">
						Educación
					</a>
					<a onClick={handleClickLink} href="#technologies">
						Tecnologías
					</a>
					<a onClick={handleClickLink} href="#projects">
						Proyectos
					</a>
					<a onClick={handleClickLink} href="#cv">
						CV
					</a>
				</div>
				<div className="burguer">
					<BurguerButton clicked={clicked} handleClick={handleClick} />
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
	background-color: var(--bg_grey);
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	z-index: 10;

	.links {
		position: absolute;
		top: -700px;
		left: -1000px;
		right: 0; /* es para cuando se cierra el menu, para que se vaya hacia la izquierda y arriba */
		text-align: center;
		transition: all 0.5s ease;
	}

	.links.active {
		width: 100%;
		position: absolute;
		margin-left: auto;
		margin-right: auto;
		top: 200px;
		left: 0;
		right: 0;
		text-align: center;

		a {
			display: block;
			font-size: 3.5rem;
			margin-bottom: 2rem;
			color: #fff;
			text-decoration: none;
			font-weight: 700;
			letter-spacing: 2px;
			text-transform: uppercase;
			transition: all 0.3s;

			&:hover {
				letter-spacing: 4px;
				opacity: 0.8;
			}
		}
	}
`;

const Logo = styled.img`
	width: 4rem;
	height: 4rem;
	margin-left: 1.5rem;
`;

const BgDiv = styled.div`
	background-color: var(--blue);
	position: fixed;
	top: -1000px;
	left: -1000px;
	width: 100%;
	height: 100%;
	transition: all 0.6s ease;
	z-index: 1;

	&.active {
		/* border-radius: 0 0 50% 0; */
		top: 51px;
		left: 0;
	}
`;
