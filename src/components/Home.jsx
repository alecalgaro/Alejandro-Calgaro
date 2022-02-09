import React from 'react'
import styles from '../styles/Home.module.css'
import { Social_medias } from './Social_medias'

import imgPerfil from '../img/img-perfil.webp'

export const Home = () => {
    return (
        <section className={styles.container_home} id='home'>
            <h1 className={styles.title}>Alejandro Calgaro</h1>
            <p className={styles.description}>Desarrollador frontend</p>
            <img src={imgPerfil} alt="foto de perfil" className={styles.img_profile} width="140" height="140"/>
            
            <Social_medias />
        </section>
    )
}
