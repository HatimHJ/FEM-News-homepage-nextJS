import React from "react";
import styles from "../../styles/News.module.css";

export default function index({ news }) {
	return (
		<section className={styles.newNews}>
			<h3>{news.title}</h3>
			<p>{news.excerpt}</p>
		</section>
	);
}
