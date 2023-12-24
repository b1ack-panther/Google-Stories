import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroFooter() {
	gsap.registerPlugin(ScrollTrigger);
	const ref = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ref.current,
					start: "top 60%",
					end: "+=500",
					scrub: true,
				},
			});
			tl.to(
				document.querySelector(".hero-container"),
				{
					// backgroundColor: "white",
					color: "white",
					duration: 0.8,
				},
				
			);
		}, document.querySelector(".hero-container"));
		return () => ctx.revert();
	}, []);

	return (
		<div ref={ref} className="hero-text-section">
			<h1>Visual stories that feel like your, because they are.</h1>
		</div>
	);
}
