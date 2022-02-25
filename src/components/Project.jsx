import React from 'react'
import styles from '../styles/Project.module.css'
import iconGithub from '../img/icons/icon-github.webp'
import iconWeb from '../img/icons/icon-web.webp'

export const Project = ({title, description, url_img, github, web}) => {
    return (
        <>
            <div className={styles.project}>
                <div className={styles.column1}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className={styles.links}>
                        { github 
                            ? <a href={github} target="_blank"> <img src={iconGithub} alt="icon-github" className={styles.icon}/> </a> 
                            : null
                        }
                        { web 
                            ? <a href={web} target="_blank"> <img src={iconWeb} alt="icon-web" className={styles.icon}/> </a>
                            : null
                        }
                    </div>
                </div>
                <img src={url_img} alt="imagen proyecto" className={styles.img_project}/>
            </div>
        </>
    )
}