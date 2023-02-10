import React from "react";
import Image from "next/image";

export default function index({ news: { id, title, excerpt, img } }) {
	return (
		<section className="blogNews">
			<div className="img">
				<Image src={img} />
			</div>
			<div className="content">
				<span> 0{id}</span>
				<h3>{title}</h3>
				<p>{excerpt}</p>
			</div>
			<style jsx>{`
				.blogNews {
					display: flex;

					margin-top: 2rem;
				}
				.blogNews .img {
					width: 100%;
					height: 100%;
				}

				.blogNews span {
					font-size: 2.5rem;
					font-weight: bold;
					color: var(--bg-color-2);
				}

				.blogNews h3 {
					font-weight: 800;
					color: var(--text-color-2);
				}
				.blogNews p {
					color: var(--text-color);
				}
				@media (min-width: 992px) {
					.blogNews {
						gap: 1rem;
					}
				}
			`}</style>
		</section>
	);
}
