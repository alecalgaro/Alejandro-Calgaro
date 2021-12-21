import React from 'react'
import styles from '../styles/Home.module.css'
import { Social_medias } from './Social_medias'

export const Home = () => {
    return (
        <section className={styles.container_home} id='home'>
            <h1 className={styles.title}>Alejandro Calgaro</h1>
            <p className={styles.description}>Desarrollo web y desarrollo móvil</p>
            <img src="../img/img-perfil.webp" alt="foto de perfil" className={styles.img_profile}/>
            
            <Social_medias />
        </section>
    )
}
