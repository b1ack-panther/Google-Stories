import React, { useEffect, useRef, useState } from "react";
import { featureSlides } from "../../assets/data";
import cn from "classnames";
import FeatureSlide from "./FeatureSlide";
import "./FeatureSlide.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FeatureSlides() {
	const [activeFeatureIndex, setFeatureIndex] = useState(0);
	const featureSliderRef = useRef();
	const featureSlidesRightRef = useRef();
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
	  const ctx = gsap.context(() => {
	    function stopTrigger() {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: featureSlidesRightRef.current,
						start: "top top",
						end: `+=${featureSliderRef.current.offsetHeight-600}`,
						scrub: 5,
						pin: true,
	        },

	      });
	      return tl;
			}

			const masterTimeline = gsap.timeline();
			masterTimeline.add(stopTrigger());
	  }, featureSliderRef)
	  return ()=>ctx.revert()
	}, [])


	return (
		<div ref={featureSliderRef} className="feature-slides-container">
			<div className="feature-slides-left">
				{featureSlides.map((feature, index) => (
					<FeatureSlide
						key={feature.imageUrl}
						title={feature.title}
						description={feature.description}
						updateActiveImage={setFeatureIndex}
						index={index}
					/>
				))}
			</div>
			<div ref={featureSlidesRightRef} className="feature-slides-right">
				{
					featureSlides.map(({ imageUrl }, index) => {
						return (
							<img
								className={activeFeatureIndex === index ? "as-primary" : ""}
								key={imageUrl}
								style={{ backgroundImage: `url(${imageUrl})` }}
							/>
						);
					})
				}
			</div>
		</div>
	);
}

export default FeatureSlides;
