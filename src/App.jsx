import React from 'react'
import styles from './styles/global.module.css'   // estilos globales
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { Education } from './components/Education'
import { Technologies } from './components/Technologies'
import { Projects } from './components/Projects'
import { CV } from './components/CV'

function App() {

  return (
    <div className={styles.container_app}>
      <header>
        <Navbar />
        <Home />
      </header>
      <main> 
        <About />
        <Education />
        <Technologies />
        <Projects />
      </main>
      <footer>
        <CV />
      </footer>  
    </div>
  )
}

export default App
