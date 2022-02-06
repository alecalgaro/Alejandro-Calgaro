import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { Social_medias } from './Social_medias'

export const Navbar2 = () => {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <a  href="#home"> <Logo src="../img/logo-ca.png" alt="logo-ca"/> </a>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#home">Inicio</a>
          <a onClick={handleClick} href="#about">Sobre mí</a>
          <a onClick={handleClick} href="#education">Educación</a>
          <a onClick={handleClick} href="#technologies">Tecnologías</a>
          <a onClick={handleClick} href="#projects">Proyectos</a>
          <a onClick={handleClick} href="#cv">CV</a>
          <Social_medias />
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
      
    </>
  )
}

export default Navbar2

const NavContainer = styled.nav`
  background-color: #f3f4f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  a{
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 2px;
    margin-right: 1rem;
    transition: letter-spacing .3s;
    
    &:hover{
      letter-spacing: 4px;
    }
  }

  .links{
    position: absolute;
    top: -700px;
    left: -1000px;
    right: 0;    /* es para cuando se cierra el menu, para que se vaya hacia la izquierda y arriba */
    text-align: center;
    transition: all .5s ease;
    z-index: 10;
  }

  .links.active{
    width: 100%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 200px;
    left: 0;
    right: 0;
    text-align: center;
    a{
      display: block;
      font-size: 2.5rem;
      margin-top: 1rem;
      color: #fff;
    }
  }
`

const Logo = styled.img` 
    width: 4.5rem;
    height: 4.5rem;
    margin-left: 2rem;
`

const BgDiv = styled.div`
  background-color: #0976B2;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 50% 0;
    top: 54px;
    left: 0;
  }
`