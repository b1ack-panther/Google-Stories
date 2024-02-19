import React, { useLayoutEffect, useRef } from "react";
import imgsrc from "../../assets/phone-frame.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const video_url =
	"https://storage.googleapis.com/creators-media/media/web-stories-hero-video-center-2.mp4";

export default function HeroPhoneBlock() {
	const phoneRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			setTimeout(() => {
				gsap.from(phoneRef.current, { y: 100, duration: 1 });
			}, 0);
			// gsap.to(phoneRef.current, { y: 0, duration: 0 });

			const tl = gsap.timeline({
				delay: 1,
				scrollTrigger: {
					trigger: phoneRef.current,
					start: "top 10%",
					end: "+=1200",
					pin: true,
					scrub: true,
					pinSpacing: false,
				},
			});
			tl.to(phoneRef.current, { scale: 0.8 }, "+=0.2");
			tl.to(
				document.querySelector(".hero-container"),
				{ backgroundColor: "black", duration: 0.25 },
				"-=0.5"
			);
		}, phoneRef);

		return () => ctx.revert();
	}, []);

	return (
		<div className="hero-phone-block" ref={phoneRef}>
			<div
				className="hero-phone-template"
				style={{ backgroundImage: `url(${imgsrc})` }}
			>
				<video
					src={video_url}
					loop
					playsInline
					autoPlay
					muted
					className="collage-element"
				></video>
			</div>
		</div>
	);
}
