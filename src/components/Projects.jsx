import React from 'react'
import styles from '../styles/Projects.module.css'
import { Project } from './Project'

export const Projects = () => {
    return (
        <section className={styles.container_projects} id='projects'>
            <h2 className={styles.subtitle}>Proyectos</h2>

            <div className={styles.content}>

                <Project 
                    title="Página web personal"
                    description="Página web personal para contar sobre mi, mis estudios, experiencia, conocimientos y proyectos realizados. Fue realizada utilizando React, CSS y Bootstrap."
                    github="https://github.com/alecalgaro/Alejandro-Calgaro"
                    web="https://enbuscadelasantidad.com.ar/"
                    url_img="../assets/enbuscadelasantidad-web.png"
                />

                <Project 
                    title="Página web - En busca de la santidad"
                    description="Página web para el videojuego 'En busca de la santidad', creado para la Infancia y Adolescencia Misionera. Fue realizada utilizando HTML, CSS, Bootstrap y JS."
                    github="https://github.com/alecalgaro/enbuscadelasantidad"
                    web="https://enbuscadelasantidad.com.ar/"
                    url_img="../assets/enbuscadelasantidad-web.png"
                />

                <Project 
                    title="Videojuego - En busca de la santidad"
                    description="Videojuego 'En busca de la santidad', creado para la Infancia y Adolescencia Misionera. El mismo puede ser jugado de forma online o descargándolo en dispositivos móviles android y computadoras."
                    web="http://enbuscadelasantidad.itch.io/juego"
                    url_img="../assets/enbuscadelasantidad-juego.png"
                />

                <Project 
                    title="VSM"
                    description="Software destinado a la gestión de viviendas sociales en madera y automatización de la tarea de diseño de las mismas en AutoCAD. Contiene una interfaz gráfica desarrollada en Java y la automatización en AutoLISP."
                    github="https://github.com/alecalgaro/vsm"
                    url_img="../assets/vsm1.png"
                />

                <Project 
                    title="ClimApp"
                    description="ClimApp es una aplicación del clima creada en React Native para el proyecto grupal del curso de especialización en desarrollo mobile realizado en conjunto por IBM y Codo a Codo."
                    github="https://github.com/alecalgaro/App-Clima-IBM"
                    url_img="../assets/app-clima.png"
                />

            </div>
        </section>
    )
}
