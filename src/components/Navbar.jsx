import React from 'react'

import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
    return (
            <nav className="navbar navbar-light bg-light fixed-top">
                <div className="container-fluid">
                    <a className={styles.ac} href="#">AC</a>
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
                                <img src="../assets/img-perfil.jpg" alt="foto de perfil" className={styles.img_profile}/>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sobre mi</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Educación</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Experiencia</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Proyectos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">CV</a>
                                </li>
                                <div className="mt-5">
                                    <img src="../assets/icons/icon-instagram.png" alt="logo-instagram" className={styles.logo}/>
                                    <img src="../assets/icons/icon-facebook.png" alt="logo-facebook" className={styles.logo}/>
                                    <img src="../assets/icons/icon-linkedin.png" alt="logo-linkedin" className={styles.logo}/>
                                    <img src="../assets/icons/icon-github.png" alt="logo-github" className={styles.logo}/>
                                </div>
                            </ul>  
                        </div>
                    </div>
                </div>
            </nav>
    )
}
