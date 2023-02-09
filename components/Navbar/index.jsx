import Image from "next/image";
import Link from "next/link";
import React from "react";
import { logo, iconMenuClose, iconMenu } from "../../images";
import styles from "../../styles/Navbar.module.css";
import { useGlobalContext } from "../../context";
import { Moon, Sun, Menu, X } from "react-feather";

export default function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);
	const { isNight, setIsNight } = useGlobalContext();
	return (
		<nav className={`${styles.nav} ${isNight ? styles.dark : ""}`}>
			{/* logo */}
			<div>
				<Image src={logo} alt="logo" />
			</div>
			{/* open toggler */}
			<div className="toggler-links">
				<Menu
					className={styles.open_toggler}
					size="35"
					color={isNight ? "#fff" : "#222"}
					onClick={() => setIsOpen(true)}
				/>
			</div>
			{/* menu links */}
			<div
				className={`${isOpen ? styles.show : ""} ${styles.menu_close_wrapper}`}
			>
				<div className={`${styles.menu_close}`}>
					<X
						size="35"
						color={isNight ? "#fff" : "#222"}
						className={styles.close_toggler}
						onClick={() => setIsOpen(false)}
					/>
					<ul className={`${isOpen ? styles.show : ""}`}>
						<li className={styles.theme} onClick={() => setIsNight(!isNight)}>
							{isNight ? <Sun color="#fff" /> : <Moon />}
						</li>
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
