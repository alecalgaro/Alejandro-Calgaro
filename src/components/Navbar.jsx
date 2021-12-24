import React from 'react'

import styles from '../styles/Navbar.module.css'
import { Social_medias } from './Social_medias'

export const Navbar = () => {
    return (
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a  href="#home"> <img src="../img/logo-ca.png" alt="logo-ca" className={styles.ac}/> </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Alejandro Calgaro</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex align-items-center">
                            <ul className="navbar-nav align-items-center flex-grow-1 pe-3">
                                <img src="../img/img-perfil.webp" alt="foto de perfil" className={styles.img_profile} width="100" height="100"/>
                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                    <a className="nav-link active" aria-current="page" href="#home">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">Sobre mi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#education">Educación</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#technologies">Tecnologías</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects">Proyectos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#cv">CV</a>
                                </li>
                                <div className="mt-5">
                                    <Social_medias />
                                </div>
                            </ul>  
                        </div>
                    </div>
                </div>
            </nav>
    )
}
