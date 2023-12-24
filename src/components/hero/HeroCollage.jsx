import React, { useEffect } from "react";
import { photos, videos } from "../../assets/data.js";
import gsap from "gsap";

function VideoElement({ src }) {
	return (
		<div className="hero-element">
			<video
				src={src}
				className="collage-element"
				playsInline=""
				autoPlay
				loop
				muted
			></video>
		</div>
	);
}

function ImageElement({ src }) {
	return (
		<div className="hero-element">
			<img src={src} alt="" className="collage-element" />
		</div>
	);
}

export default function HeroCollage() {

	useEffect(() => {
		const tl = gsap.timeline({
			delay: 0.3,
		});
		tl.fromTo(".hero-element", { y: 300, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2 });
	}, []);

	const leftImages = photos.slice(0, 2);
	const rightImages = photos.slice(2, photos.length);
	const [leftVideo, rightVideo] = videos;

	return (
		<div className="hero-collage">
			<div className="left-column">
				{leftImages.map((src) => (
					<ImageElement src={src} key={Math.random() * 1000} />
				))}
				<VideoElement src={leftVideo} />
			</div>
			<div className="right-column">
				{rightImages.map((src) => (
					<ImageElement src={src} key={Math.random() * 1000} />
				))}
				<VideoElement src={rightVideo} />
			</div>
		</div>
	);
}
