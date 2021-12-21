import React from 'react'
import styles from '../styles/Technologies.module.css'

export const Technologies = () => {
    return (
        <section className={styles.container_technologies} id='technologies'>
            <h2 className={styles.subtitle}>Tecnologías<br/>utilizadas</h2>

            <div className={styles.content}>
                <img src="../assets/icons/icon-html.png" alt="icon-html" className={styles.icon}/>
                <img src="../assets/icons/icon-css.png" alt="icon-css" className={styles.icon}/>
                <img src="../assets/icons/icon-bootstrap.png" alt="icon-bootstrap" className={styles.icon}/>
                <img src="../assets/icons/icon-js.png" alt="icon-js" className={styles.icon}/>
                <img src="../assets/icons/icon-react.png" alt="icon-react" className={styles.icon}/>
                <img src="../assets/icons/icon-java.png" alt="icon-java" className={styles.icon}/>
                <img src="../assets/icons/icon-android.png" alt="icon-android" className={styles.icon}/>
                <img src="../assets/icons/icon-react-native.png" alt="icon-react-native" className={styles.icon}/>
                <img src="../assets/icons/icon-mysql.png" alt="icon-mysql" className={styles.icon}/>
                <img src="../assets/icons/icon-firebase.png" alt="icon-firebase" className={styles.icon}/>
                <img src="../assets/icons/icon-github.png" alt="icon-github" className={styles.icon}/>
                <img src="../assets/icons/icon-figma.png" alt="icon-figma" className={styles.icon}/>
            </div>
        </section>
    )
}
