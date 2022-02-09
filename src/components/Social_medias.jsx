import React from 'react'
import styles from '../styles/Social_medias.module.css'
import iconInstagram from '../img/icons/icon-instagram.webp'
import iconFacebook from '../img/icons/icon-facebook.webp'
import iconLinkedin from '../img/icons/icon-linkedin.webp'
import iconGithub from '../img/icons/icon-github.webp'

export const Social_medias = () => {
    return (
        <div className={styles.container}>
            <a href="https://www.instagram.com/alecalgaro/" target="_blank"> <img src={iconInstagram} alt="icon-instagram" className={styles.icon}/> </a>
            <a href="https://www.facebook.com/AlejandroCalgaro/" target="_blank"> <img src={iconFacebook} alt="icon-facebook" className={styles.icon}/> </a>
            <a href="https://www.linkedin.com/in/alejandrocalgaro/" target="_blank"> <img src={iconLinkedin} alt="icon-linkedin" className={styles.icon}/> </a>
            <a href="https://github.com/alecalgaro" target="_blank"> <img src={iconGithub} alt="icon-github" className={styles.icon}/> </a>
        </div>
    )
}
