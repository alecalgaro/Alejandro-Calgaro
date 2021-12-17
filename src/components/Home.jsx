import React from 'react'
import styles from '../styles/Home.module.css'

export const Home = () => {
    return (
        <header className={styles.container_home}>
            <h1 className={styles.title}>ALEJANDRO CALGARO</h1>
            <p className={styles.description}>Desarrollo web y desarrollo móvil</p>
            <img src="../assets/img-perfil.jpg" alt="foto de perfil" className={styles.img_profile}/>
            <div>
                <img src="../assets/icons/icon-instagram.png" alt="logo-instagram" className={styles.logo}/>
                <img src="../assets/icons/icon-facebook.png" alt="logo-facebook" className={styles.logo}/>
                <img src="../assets/icons/icon-linkedin.png" alt="logo-linkedin" className={styles.logo}/>
                <img src="../assets/icons/icon-github.png" alt="logo-github" className={styles.logo}/>
            </div>
        </header>
    )
}
