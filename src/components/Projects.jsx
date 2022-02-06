import React, { useState } from "react";
import styles from "../styles/Projects.module.css";
import { Project } from "./Project";

export const Projects = () => {
  const [category, setCategory] = useState("all");

  return (
    <section className={styles.container_projects} id="projects">
      <h2 className={styles.subtitle}>Proyectos</h2>

      <div className={styles.category}>
        <button className={styles.btn_category} onClick={() => setCategory("all")}>Todos</button>
        <button className={styles.btn_category} onClick={() => setCategory("web")}>Web</button>
        <button className={styles.btn_category} onClick={() => setCategory("movil")}>Móvil</button>
        <button className={styles.btn_category} onClick={() => setCategory("juegos")}>Juegos</button>
        <button className={styles.btn_category} onClick={() => setCategory("desktop")}>Escritorio</button>
      </div>

      <div className={styles.content}>
        {category == "web" ?
          <>
            <Project
              title="Página web personal"
              description="Página web personal para contar sobre mi, mis estudios, experiencia, conocimientos y proyectos realizados. Fue realizada utilizando React, CSS y Bootstrap."
              github="https://github.com/alecalgaro/Alejandro-Calgaro"
              web="https://alejandrocalgaro.netlify.app/"
              url_img="../img/pagina-personal.webp"
            />

            <Project
              title="Página web - En busca de la santidad"
              description="Página web para el videojuego 'En busca de la santidad', creado para la Infancia y Adolescencia Misionera. Fue realizada utilizando HTML, CSS, Bootstrap y JS."
              github="https://github.com/alecalgaro/enbuscadelasantidad"
              web="https://enbuscadelasantidad.com.ar/"
              url_img="../img/enbuscadelasantidad-web.webp"
            />

            <Project
              title="Tus links"
              description="Aplicación web creada como práctica de React y Firebase. La misma permite ingresar un titulo, descripción, categoría y link para guardarlos en una base de datos y poder acceder a ellos de forma remota."
              github="https://github.com/alecalgaro/tus-links"
              url_img="../img/tus-links.webp"
              vertical="true"
            />
          </>

            : (category == "movil") ?
                <>
                    <Project
                        title="ClimApp"
                        description="ClimApp es una aplicación del clima creada en React Native para el proyecto grupal del curso de especialización en desarrollo mobile realizado en conjunto por IBM y Codo a Codo."
                        github="https://github.com/alecalgaro/App-Clima-IBM"
                        url_img="../img/app-clima.webp"
                        vertical="true"
                    />
                </>

            : (category == "juegos") ?
                <>
                    <Project
                        title="Videojuego - En busca de la santidad"
                        description="Videojuego 'En busca de la santidad', creado para la Infancia y Adolescencia Misionera. El mismo puede ser jugado de forma online o descargándolo en dispositivos móviles android y computadoras."
                        web="http://enbuscadelasantidad.itch.io/juego"
                        url_img="../img/enbuscadelasantidad-juego.webp"
                    />
                </>

            : (category == "desktop") ?
                <>
                    <Project
                    title="VSM"
                    description="Software destinado a la gestión de viviendas sociales en madera y automatización de la tarea de diseño de las mismas en AutoCAD. Contiene una interfaz gráfica desarrollada en Java y la automatización en AutoLISP."
                    github="https://github.com/alecalgaro/vsm"
                    url_img="../img/vsm.webp"
                    />
                </>

            :   // todos:
            <>
                <Project
                    title="Página web personal"
                    description="Página web personal para contar sobre mi, mis estudios, experiencia, conocimientos y proyectos realizados. Fue realizada utilizando React, CSS y Bootstrap."
                    github="https://github.com/alecalgaro/Alejandro-Calgaro"
                    web="https://alejandrocalgaro.netlify.app/"
                    url_img="../img/pagina-personal.webp"
                />

                <Project
                    title="Página web - En busca de la santidad"
                    description="Página web para el videojuego 'En busca de la santidad', creado para la Infancia y Adolescencia Misionera. Fue realizada utilizando HTML, CSS, Bootstrap y JS."
                    github="https://github.com/alecalgaro/enbuscadelasantidad"
                    web="https://enbuscadelasantidad.com.ar/"
                    url_img="../img/enbuscadelasantidad-web.webp"
                />

                <Project
                    title="Videojuego - En busca de la santidad"
                    description="Videojuego 'En busca de la santidad', creado para la Infancia y Adolescencia Misionera. El mismo puede ser jugado de forma online o descargándolo en dispositivos móviles android y computadoras."
                    web="http://enbuscadelasantidad.itch.io/juego"
                    url_img="../img/enbuscadelasantidad-juego.webp"
                />

                <Project
                    title="VSM"
                    description="Software destinado a la gestión de viviendas sociales en madera y automatización de la tarea de diseño de las mismas en AutoCAD. Contiene una interfaz gráfica desarrollada en Java y la automatización en AutoLISP."
                    github="https://github.com/alecalgaro/vsm"
                    url_img="../img/vsm.webp"
                />

                <Project
                    title="ClimApp"
                    description="ClimApp es una aplicación del clima creada en React Native para el proyecto grupal del curso de especialización en desarrollo mobile realizado en conjunto por IBM y Codo a Codo."
                    github="https://github.com/alecalgaro/App-Clima-IBM"
                    url_img="../img/app-clima.webp"
                    vertical="true"
                />

                <Project
                    title="Tus links"
                    description="Aplicación web creada como práctica de React y Firebase. La misma permite ingresar un titulo, descripción, categoría y link para guardarlos en una base de datos y poder acceder a ellos de forma remota."
                    github="https://github.com/alecalgaro/tus-links"
                    url_img="../img/tus-links.webp"
                    vertical="true"
                />
            </>
    }
      </div>
    </section>
  );
};
