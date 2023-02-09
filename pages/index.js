import Head from "next/head";
import Navbar from "../components/Navbar";

import styles from "../styles/Home.module.css";
import { favicon32x32 } from "../images";
import { useGlobalContext } from "../context";

export default function Home() {
	const { isNight, setIsNight } = useGlobalContext();

	return (
		<>
			<Head>
				<title>Frontend Mentor | News homepage</title>
				<link rel="icon" href={favicon32x32} />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className={`root ${isNight ? "night" : ""}`}>
				<div className={`${styles.container}`}>
					<Navbar />
					<div className={styles.content}></div>
				</div>
			</div>
		</>
	);
}
