import gsap from 'gsap'
import React, { useEffect } from 'react'

export default function HeroHeader() {
  useEffect(() => { 
    gsap.fromTo(
			"#hero-text",
			{
        opacity: 0,
			},
			{
				duration: 1,
        opacity: 1,
			}
		);
  }, [])
  return (
		<div className="hero-text-section">
			<h1 id="hero-text">
				Stories meet their <span style={{whiteSpace: "nowrap"}}>widest audience ever</span>
			</h1>
		</div>
	);
}
