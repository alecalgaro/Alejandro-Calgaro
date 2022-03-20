import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import styles from "../styles/Projects.module.css";
import { Project } from "./Project";
import projects from './projects.json'

export const Projects = () => {
  const [category, setCategory] = useState("all");

  return (
    <section className={styles.container_projects} id="projects">
      <SectionTitle title="Proyectos"/>

      <div className={styles.category}>
        <button className={styles.btn_category} onClick={() => setCategory("all")}>Todos</button>
        <button className={styles.btn_category} onClick={() => setCategory("web")}>Web</button>
        <button className={styles.btn_category} onClick={() => setCategory("movil")}>Móvil</button>
        <button className={styles.btn_category} onClick={() => setCategory("games")}>Juegos</button>
        <button className={styles.btn_category} onClick={() => setCategory("desktop")}>Escritorio</button>
      </div>

      <div className={styles.content}>
        { category != "all" ?
            projects.filter(project => project.category == category).map((project) => (
              <Project
                key={project.id_project}
                title={project.title}
                description={project.description}
                github={project.github}
                web={project.web}
                url_img={"https://drive.google.com/uc?export=view&id="+project.img}   
              />                       
            )) 
          :
            projects.map((project) => (
              <Project
                key={project.id_project}
                title={project.title}
                description={project.description}
                github={project.github}
                web={project.web}
                url_img={"https://drive.google.com/uc?export=view&id="+project.img}   
            />                       
            ))
        }
      </div>
    </section>
  );
};