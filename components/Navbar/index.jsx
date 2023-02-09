import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo, iconMenuClose, iconMenu } from "../../images";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<nav className={styles.nav}>
			{/* logo */}
			<div className="logo">
				<Image src={logo} alt="logo" />
			</div>
			{/* open toggler */}
			<div className="toggler-links">
				<Image
					className={styles.open_toggler}
					src={iconMenu}
					alt="open toggler"
					onClick={() => setIsOpen(true)}
				/>
			</div>
			{/* menu links */}
			<div
				className={`${isOpen ? styles.show : ""} ${styles.menu_close_wrapper}`}
			>
				<div className={`${styles.menu_close}`}>
					<Image
						className={styles.close_toggler}
						src={iconMenuClose}
						alt="close toggler"
						onClick={() => setIsOpen(false)}
					/>
					<ul className={`${isOpen ? styles.show : ""}`}>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/">New</Link>
						</li>
						<li>
							<Link href="/">Popular</Link>
						</li>
						<li>
							<Link href="/">Trending</Link>
						</li>
						<li>
							<Link href="/">Categories</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
