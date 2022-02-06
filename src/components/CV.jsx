import React from 'react'
import styles from '../styles/CV.module.css'

export const CV = () => {
    return (
        <section className={styles.conteiner_cv} id='cv'>
            <a href='../img/cv.pdf' 
                download="Calgaro Alejandro - CV.pdf"
                className={styles.cv}>Descargar CV</a> 
        </section>
    )
}