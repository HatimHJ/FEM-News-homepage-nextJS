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
			</Head>
			<div className={styles.container}>
				<Navbar />
				<div className={styles.content}>
					<h2>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
						voluptatibus ea perspiciatis, doloribus esse reprehenderit nostrum
						accusantium consectetur nemo. Commodi minus quasi iste unde error
						reprehenderit fuga dicta eius fugiat!
					</h2>
				</div>
			</div>
		</AppProvider>
	);
}
