import React from "react";
import styles from "./styles/global.module.css"; // estilos globales
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
	return (
		<div className={styles.container_app}>
			<header>
				<Navbar />
				<Home />
			</header>
			<main>
				<About />
				<Projects />
				<Technologies />
				<Experience />
				<Education />
			</main>
			<footer>
				<Contact />
			</footer>
		</div>
	);
}

export default App;
