import React from 'react'
import styles from '../styles/Technologies.module.css'

export const Technologies = () => {
    return (
        <section className={styles.container_technologies} id='technologies'>
            <h2 className={styles.subtitle}>Tecnologías<br/>utilizadas</h2>

            <div className={styles.content}>
                <img src="../img/icons/icon-html.webp" alt="icon-html" className={styles.icon}/>
                <img src="../img/icons/icon-css.webp" alt="icon-css" className={styles.icon}/>
                <img src="../img/icons/icon-bootstrap.webp" alt="icon-bootstrap" className={styles.icon}/>
                <img src="../img/icons/icon-js.webp" alt="icon-js" className={styles.icon}/>
                <img src="../img/icons/icon-react.webp" alt="icon-react" className={styles.icon}/>
                <img src="../img/icons/icon-java.webp" alt="icon-java" className={styles.icon}/>
                <img src="../img/icons/icon-android.webp" alt="icon-android" className={styles.icon}/>
                <img src="../img/icons/icon-mysql.webp" alt="icon-mysql" className={styles.icon}/>
                <img src="../img/icons/icon-firebase.webp" alt="icon-firebase" className={styles.icon}/>
                <img src="../img/icons/icon-git.webp" alt="icon-git" className={styles.icon}/>
                <img src="../img/icons/icon-github.webp" alt="icon-github" className={styles.icon}/>
                <img src="../img/icons/icon-figma.webp" alt="icon-figma" className={styles.icon}/>
            </div>
        </section>
    )
}
