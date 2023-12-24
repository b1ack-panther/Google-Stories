import React, { useEffect } from "react";
import "./App.css";
import Hero from "./components/hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureSlides from "./components/Featureslides";

function App() {
	
	return (
		<div>
			<Hero />
			<FeatureSlides />
			<div className="footer">Buid your Ideal story today</div>
		</div>
	);
}

export default App;
