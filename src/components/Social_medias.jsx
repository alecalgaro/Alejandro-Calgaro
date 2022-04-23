import React from 'react'
import styles from '../styles/Social_medias.module.css'
import iconInstagram from '../img/icons/icon-instagram.webp'
import iconFacebook from '../img/icons/icon-facebook.webp'
import iconLinkedin from '../img/icons/icon-linkedin.webp'
import iconGithub from '../img/icons/icon-github.webp'

import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

export const Social_medias = () => {
    return (
        <motion.div 
            className={styles.container}
            variants={container}
            initial="hidden"
            animate="visible"
            >
            <motion.a variants={item} href="https://www.instagram.com/alecalgaro/" target="_blank"> <img src={iconInstagram} alt="icon-instagram" className={styles.icon}/> </motion.a>
            <motion.a variants={item} href="https://www.facebook.com/AlejandroCalgaro/" target="_blank"> <img src={iconFacebook} alt="icon-facebook" className={styles.icon}/> </motion.a>
            <motion.a variants={item} href="https://www.linkedin.com/in/alejandrocalgaro/" target="_blank"> <img src={iconLinkedin} alt="icon-linkedin" className={styles.icon}/> </motion.a>
            <motion.a variants={item} href="https://github.com/alecalgaro" target="_blank"> <img src={iconGithub} alt="icon-github" className={styles.icon}/> </motion.a>
        </motion.div>
    )
}
