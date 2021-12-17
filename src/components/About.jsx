import React from 'react'

import styles from '../styles/About.module.css'

export const About = () => {
    return (
        <div className={styles.container_about}>
            <div className={styles.content}>
                <h2 className={styles.subtitle}>SOBRE MI</h2>
                <p className={styles.paragraph}> Tengo 25 años, soy de la ciudad de Chajari (Entre Ríos).
                    Me recibí de Analista en Informática Aplicada en la Universidad Nacional del Litoral de Santa Fe Capital (FICH - UNL), y actualmente continúo estudiando Ingeniería en Informática en la misma universidad.
                    Además de eso, he realizado cursos online sobre distintas tecnologías relacionadas al desarrollo web y desarrollo móvil.
                </p>
            </div>
        </div>
    )
}
