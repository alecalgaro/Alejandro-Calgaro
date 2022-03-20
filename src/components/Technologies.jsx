import React from 'react'
import SectionTitle from './SectionTitle'
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
import Technologie from './Technologie'

export const Technologies = () => {
    return (
        <section className={styles.container_technologies} id='technologies'>
            <SectionTitle title="Tecnologías"/>
            <div className={styles.content}>
                <Technologie icon={iconHTML} alt="icon-html" name="HTML"/>
                <Technologie icon={iconCSS} alt="icon-css" name="CSS"/>
                <Technologie icon={iconBootstrap} alt="icon-bootstrap" name="BOOTSTRAP"/>
                <Technologie icon={iconJS} alt="icon-js" name="JS"/>
                <Technologie icon={iconReact} alt="icon-react" name="REACT"/>
                <Technologie icon={iconJava} alt="icon-java" name="JAVA"/>
                <Technologie icon={iconAndroid} alt="icon-android" name="ANDROID"/>
                <Technologie icon={iconMySQL} alt="icon-mysql" name="MYSQL"/>
                <Technologie icon={iconFirebase} alt="icon-firebase" name="FIREBASE"/>
                <Technologie icon={iconGit} alt="icon-git" name="GIT"/>
                <Technologie icon={iconGithub} alt="icon-github" name="GITHUB"/>
                <Technologie icon={iconFigma} alt="icon-figma" name="FIGMA"/>
            </div>
        </section>
    )
}
