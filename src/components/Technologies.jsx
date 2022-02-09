import React from 'react'
import styles from '../styles/Technologies.module.css'
import iconHTML from '../img/icons/icon-html.webp'
import iconCSS from '../img/icons/icon-css.webp'
import iconBootstrap from '../img/icons/icon-bootstrap.webp'
import iconJS from '../img/icons/icon-js.webp'
import iconReact from '../img/icons/icon-react.webp'
import iconJava from '../img/icons/icon-java.webp'
import iconAndroid from '../img/icons/icon-android.webp'
import iconMySQL from '../img/icons/icon-mysql.webp'
import iconFirebase from '../img/icons/icon-firebase.webp'
import iconGit from '../img/icons/icon-git.webp'
import iconGithub from '../img/icons/icon-github.webp'
import iconFigma from '../img/icons/icon-figma.webp'

export const Technologies = () => {
    return (
        <section className={styles.container_technologies} id='technologies'>
            <h2 className={styles.subtitle}>Tecnologías<br/>utilizadas</h2>

            <div className={styles.content}>
                <img src={iconHTML} alt="icon-html" className={styles.icon}/>
                <img src={iconCSS} alt="icon-css" className={styles.icon}/>
                <img src={iconBootstrap} alt="icon-bootstrap" className={styles.icon}/>
                <img src={iconJS} alt="icon-js" className={styles.icon}/>
                <img src={iconReact} alt="icon-react" className={styles.icon}/>
                <img src={iconJava} alt="icon-java" className={styles.icon}/>
                <img src={iconAndroid} alt="icon-android" className={styles.icon}/>
                <img src={iconMySQL} alt="icon-mysql" className={styles.icon}/>
                <img src={iconFirebase} alt="icon-firebase" className={styles.icon}/>
                <img src={iconGit} alt="icon-git" className={styles.icon}/>
                <img src={iconGithub} alt="icon-github" className={styles.icon}/>
                <img src={iconFigma} alt="icon-figma" className={styles.icon}/>
            </div>
        </section>
    )
}
