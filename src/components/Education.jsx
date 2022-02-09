import React from 'react'
import styles from '../styles/Education.module.css'

export const Education = () => {
    return (
        <section className={styles.container_education} id='education'>
            <h2 className={styles.subtitle}>Educación</h2>

            <div className={styles.content}>
                <hr />
                <p className={styles.year}>Actualmente</p>
                <p className={styles.title}>Ingeniería en Informática</p>
                <p className={styles.description}>Facultad de Ingeniería y Ciencias Hídricas (FICH) - Universidad Nacional del Litoral (UNL)</p>
                <hr />
            </div>

            <div className={styles.content}>
                <p className={styles.year}>2021</p>
                <p className={styles.title}>Analista en Informática Aplicada</p>
                <p className={styles.description}>Facultad de Ingeniería y Ciencias Hídricas (FICH) - Universidad Nacional del Litoral (UNL)</p>
                <hr />
            </div>

            <div className={styles.content}>
                <p className={styles.year}>2015</p>
                <p className={styles.title}>Técnico Mecánico</p>
                <p className={styles.description}>Escuela de Educación Técnica N° 1 "Pablo Stampa" - Chajari, Entre Ríos</p>
                <hr />
            </div>

            <div className={styles.content}>
                <p className={styles.year}>Otros</p>
                <p className={styles.title}>Cursos online</p>
                <p className={styles.description}>Cursos sobre desarrollo web (HTML, CSS, Bootstrap, JS, React), desarrollo móvil (React Native) y otros (Git/Github, Firebase, Figma).</p>
                <hr />
            </div>
            
        </section>
    )
}
