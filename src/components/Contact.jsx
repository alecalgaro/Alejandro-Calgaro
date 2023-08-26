import React from "react";
import styles from "../styles/Contact.module.css";
import pdfCV from "../img/cv.pdf";

export const Contact = () => {
	return (
		<>
			<div className={styles.conteiner_cv} id="cv">
				<a href={pdfCV} download="Calgaro Alejandro - CV.pdf" className={styles.cv}>
					Descargar CV
				</a>
			</div>

			<div className={styles.container_contact}>
				<div className={styles.container_svg}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon icon-tabler icon-tabler-mail"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#133757"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<rect x="3" y="5" width="18" height="14" rx="2" />
						<polyline points="3 7 12 13 21 7" />
					</svg>
					<p className={styles.container_p}>alejandrocalgaro@gmail.com</p>
				</div>

				<div className={styles.container_svg}>
					<a
						href="https://wa.me/+5493456474803?text=Hola!%20Te%20escribo%20desde%20alejandrocalgaro.com.ar"
						target="_blank"
						aria-label="Whatsapp"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon icon-tabler icon-tabler-brand-whatsapp"
							width="40"
							height="40"
							viewBox="0 0 24 24"
							strokeWidth="1.2"
							stroke="#133757"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
							<path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
						</svg>
					</a>
					<p className={styles.container_p}>+549 3456 474803</p>
				</div>
			</div>
		</>
	);
};
