import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const Technologie = ({icon, alt, name}) => {
  return (
    <Container initial={{ opacity: 0 }} whileInView={{ opacity: 1}} viewport={{ once: true , margin: "-10%" }}>
        <img src={icon} alt={alt}/>
        <p>{name}</p>
    </Container>
  )
}

export default Technologie

const Container = styled(motion.div)`
    width: 8rem;    
    display: inline-block;
    margin: 2rem 3rem;
    transition: all .3s;

    img {
        width: 6rem; 
    }

    p {
        font-size: 1.2rem;
    }

    &:hover {
        transform: scale(1.2);
    }

    @media (min-width: 992px) { 
        margin: 2rem 4rem;
    }
`