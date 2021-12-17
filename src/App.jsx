import './styles/global.module.css'

import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { About } from './components/About'
import { CV } from './components/CV'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />

      <CV />
    </div>
  )
}

export default App
