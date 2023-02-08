import Image from "next/image";
import React from "react";
import { logo, iconMenuClose, iconMenu } from "../../images";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);
	return (
		<nav className={styles.nav}>
			<div className="logo">
				<Image src={logo} alt="logo" />
			</div>
			<div className="toggler-links">
				<div
					className={`${styles.menuToggle} ${isOpen ? styles.active : ""}`}
					onClick={() => setIsOpen(!isOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className={`${styles.linksWrapper} ${isOpen ? styles.show : ""}`}>
					<ul className={`${isOpen ? styles.show : ""}`}>
						<li> Home </li>
						<li> New </li>
						<li> Popular </li>
						<li> Trending </li>
						<li> Categories </li>
					</ul>
				</div>
			</div>
			{/* <Image
					className={styles.toggler}
					src={isOpen ? iconMenuClose : iconMenu}
					alt="toggler"
					onClick={() => setIsOpen(!isOpen)}
					/> 
				*/}
		</nav>
	);
}
