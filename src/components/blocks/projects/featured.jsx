
import Image from 'next/image'

import {useEffect} from 'react'
import {m, useAnimation} from "framer-motion"
import {useInView} from 'react-intersection-observer'

import Badges from '../../utils/badge.list'
import Icon from '../../utils/icon'

import css from '../../../../assets/styles/scss/sections/projects/featured.module.scss'

export default function FeaturedProject({ content }, index) {

	const { project, url, repo, descriptionTitle,description, stack, imageOptions, images } = content

	const controls = useAnimation();
	const { ref, inView  } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect( () => {
		if ( inView ) {	controls.start("visible") }
		if ( !inView ) { controls.start("hidden") }
	}, [ controls, inView ] )

	return (
		<m.section 	
			key={index}
			className={css.project} 
			//framer-motion
			ref={ref}
			variants={container}
			initial={[ "rest", "hidden" ]}
			whileHover="hover"
			animate={controls} >
			
			<div className={`sm:w-50 ${css.details}`}>
				<div className={css.projectHeader}>
					<div className={css.header}>
						<h3 className="highlight">{project}</h3><span className={css.privateOr}><i className="devicon-github-plain"></i>{repo}</span>	
					</div>
					<div className={css.description}>
						<p><strong>{descriptionTitle}</strong> {description} <a style={{textDecorationLine: 'underline', fontWeight: 'normal'}} href={url}>{url}</a></p>
					</div>
					<div className={css.stackContainer}>
						<Badges list={stack} block="stack" fullContainer={false} color={false} />
					</div>

				</div>
			</div>

			<div className={`${css.imageContainer}`} style={{right: 0, top: 4, display: 'flex'}}>
				<span style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', overflow: 'visible', alignSelf: 'center'}} className={`${css.imageAnimationContainer}`}>
					{ images.map( ({key, url, hover, h, w, l}, index) => {
						hover = ( hover === 'left' ) ? hoverLeft : hoverRight
						return (
							<m.div key={`${index}-${key}`} variants={item} style={images.length > 1 ? {marginRight: 10} : {marginRight: 0}}>
								<m.div variants={hover}>
									<div className={`relative`} width={w+"px"} height={h+"px"}>
									<img style={{position: 'relative', width: '100%', height: '100%'}} src={url} alt="x" objectFit={'contain'} loading="eager"
									/>
									</div>
								</m.div>
							</m.div>
						)}
					) }
				</span>
			</div>
			
		</m.section>
	)
}

const container = {
	hidden: { 
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.0625
		}
	},
	visible: {
		transition: {
			delayChildren: 0.125,
			staggerChildren: 0.25,
		}
	},
	rest: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	},
	hover: {
		transition: {
			delayChildren: 0,
			staggerChildren: 0,
		}
	}
}

const item = {
	hidden: { 
		y: 75, 
		opacity: 0,
		transition: {
			type: "tween",
			ease: "easeIn",
			duration: .35, 
		}
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			type: "tween",
			ease: "easeOut",
			duration: .5, 
		}
	},
}

const hoverLeft = {
	rest: {
		x: 0
	},
	hover: {
		x: -20
	}
}

const hoverRight = {
	rest: {
		x: 0
	},
	hover: {
		x: 20
	}
}

