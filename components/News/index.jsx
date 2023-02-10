import Image from "next/image";
import React from "react";
import styles from "../../styles/News.module.css";
import { imageWeb3_DT, imageWeb3_MB } from "../../images";
import NewNews from "../NewNews/index";
import BlogNews from "../BlogNews/index";
import { newNewsData, blogData } from "../../data";

export default function index() {
	return (
		<section className={styles.news}>
			<div className={styles.main_news}>
				<div className={styles.image}>
					<Image src={imageWeb3_DT} />
				</div>
				<h2>The Bright Future of Web 3.0?</h2>
				<div className={styles.content}>
					<p>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button>Read more</button>
				</div>
			</div>
			<div className={styles.side_news}>
				<h2>New</h2>
				<div className={styles.new_News}>
					{newNewsData &&
						newNewsData.map((news) => <NewNews news={news} key={news.id} />)}
				</div>
			</div>
			<div className={styles.blog_news}>
				{blogData &&
					blogData.map((news) => <BlogNews news={news} key={news.id} />)}
			</div>
		</section>
	);
}
