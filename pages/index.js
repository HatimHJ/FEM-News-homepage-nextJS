import Head from "next/head";
import Navbar from "../components/Navbar";
import { AppProvider } from "../context";
import styles from "../styles/Home.module.css";
import { favicon32x32 } from "../images";

export default function Home() {
	return (
		<AppProvider>
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
			<div className={styles.container}>
				<Navbar />
				<div className={styles.content}></div>
			</div>
		</AppProvider>
	);
}
