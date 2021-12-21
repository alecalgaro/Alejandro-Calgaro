import React from 'react'
import styles from '../styles/Social_medias.module.css'

export const Social_medias = () => {
    return (
        <div>
            <a href="https://www.instagram.com/alecalgaro/" target="_blank"> <img src="../assets/icons/icon-instagram.png" alt="icon-instagram" className={styles.icon}/> </a>
            <a href="https://www.facebook.com/AlejandroCalgaro/" target="_blank"> <img src="../assets/icons/icon-facebook.png" alt="icon-facebook" className={styles.icon}/> </a>
            <a href="https://www.linkedin.com/in/alejandrocalgaro/" target="_blank"> <img src="../assets/icons/icon-linkedin.png" alt="icon-linkedin" className={styles.icon}/> </a>
            <a href="https://github.com/alecalgaro" target="_blank"> <img src="../assets/icons/icon-github.png" alt="icon-github" className={styles.icon}/> </a>
        </div>
    )
}
