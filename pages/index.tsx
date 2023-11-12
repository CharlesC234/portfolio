

import React, { useState, useEffect } from 'react';
import colors from '../src/content/index/_colors.json';
import TitleIndex from './title.index';
import { useRouter } from 'next/router';

// Import your components with dynamic import
import dynamic from 'next/dynamic';
import LoadingAnim from "../src/components/intro/loadinganim";
import TimeLine from "../src/components/sections/index/timeline";
const Hero = dynamic(() => import('../src/components/sections/index/hero'));
const Looking = dynamic(() => import('../src/components/sections/index/looking'));
const About = dynamic(() => import('../src/components/sections/index/home'));
const Technical = dynamic(() => import('../src/components/sections/index/technical'));
const Career = dynamic(() => import('../src/components/sections/index/optional/career'));
const FeaturedProjects = dynamic(() => import('../src/components/sections/projects/featured'));
const QnA = dynamic(() => import('../src/components/sections/index/qna'));
const Color = dynamic(() => import('../src/components/utils/page.colors'));

interface HomePageProps {
	spacing: string[]
}

export default function HomePage({spacing}: HomePageProps) {
	// Use a state variable to track whether components are loaded
	const router = useRouter()
	const [componentsLoaded, setComponentsLoaded] = useState(false);

	// Simulate a loading delay
	useEffect(() => {
		const timer = setTimeout(() => {
			setComponentsLoaded(true);
		}, 0);

		return () => clearTimeout(timer);
	}, []);

	if(router.query.projects != null){
		router.replace( // or push or whatever you want
		{
		  pathname: window.location.pathname,
		  hash: "projects",
		  query: "",
		}
	  )
	  .catch((e) => {
		// workaround for https://github.com/vercel/next.js/issues/37362
		if (!e.cancelled) {
		  throw e
		}
	  })
	}

	return (
		<div>
			<TitleIndex />
			<Color colors={colors} />

			{/* Conditionally render components or loading message */}
			{/* These below line that commanded is Optional */}

				<div>
					<Hero />
					<Looking />
					<About />
					<Career />
					<Technical />
					{/*<TimeLine/> -> Coming soon */}
			<FeaturedProjects />
				</div>

		</div>
	);
}
