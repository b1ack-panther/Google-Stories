
// import React, { useEffect, useState } from 'react'

// function useOnScreen(ref, rootMargin = '0px') {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   useEffect(() => {
//     ([entry]) => {
//       setIsIntersecting(entry?.isIntersecting ?? false)
//     }, { rootMargin, thresold: 0.5 }
    
//     const currentRef = ref.current;
//     if (currentRef) {
//       Observer.observe(currentRef)
//     }
//     return () => {
//       if (currentRef) {
//         Observer.unobserve(currentRef)
//       }
//     }
//   }, [ref, rootMargin])

//   return isIntersecting;
// }

// export default useOnScreen


import { useState, useEffect } from "react";

function useOnScreen(ref, rootMargin = "0px") {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const Observer = new IntersectionObserver(
			([entry]) => {
				setIsIntersecting(entry?.isIntersecting ?? false);
			},
			{ rootMargin, threshold: 0.5 }
		); 

		const currentRef = ref.current;
		if (currentRef) {
			Observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				Observer.unobserve(currentRef);
			}
		};
	}, [ref, rootMargin]);

	return isIntersecting;
}

export default useOnScreen;
