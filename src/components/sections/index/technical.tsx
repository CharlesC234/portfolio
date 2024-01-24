
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges'
import CopyBlock from '../../blocks/about.copy'

// Section scss
import technical from '../../../../assets/styles/scss/sections/index/about.module.scss'
import css from '../../../../assets/styles/scss/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

export default function Technical() {
	return (
		<Section classProp={`${technical.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hard Skills"
					subTitle="As a full stack developer and digital creator, choosing the right tools for the job is essential."
				/>
				<section className={`${technical.content} ${technical.container}`}>
					<div className={technical.copy}>

						<BadgesBlock
							title="Software"
							copy="When picking software for my projects, I keep things simple. I make sure to learn tools that are widely used in the industry. I also focus on choosing what makes the most sense for each project. One tool I really like is the headless CMS Strapi, a kind of behind-the-scenes manager for content on websites and apps. It helps me customize things the way I want, and it also provides a simple and easy way for clients, who may be less technologically inclined, to manage their site."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

						<BadgesBlock
							title="Programming Languages and Frameworks"
							copy="When developing software for clients, using the right programming languages and frameworks is key to building top-notch products. I focus on learning widely used languages or the ones that suit each project best. Over the years, I've become most experienced in JavaScript—an incredibly diverse and widely adopted language supported by various frameworks. I've also delved into C++, Java, C, HTML, and CSS. Recently, I've been exploring Python, aiming to gain expertise in this widely supported language. I'm particularly intrigued by Python's popularity in AI and machine learning."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="laptop-code"
							containerClass={technical.container}
							headerIcon={technical.icon} invertedColor={undefined}						/>

					</div>
					{/* <div className={`${technical.image} ${technical.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="data string background"   loading="eager" />
					</div> */}
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
			<div className={css.bgContainer} style={{opacity: 1}}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}
{/*Badge Block*/}
const software = [
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{key:'unity',name:'unity',type:'devicon'},
	{key:'androidstudio',name:'AndroidStudio',type:'devicon'},
	{key:"excel",name:"Excel",type:"devicon"},
	{key:"illustrator",name:"Illustrator",type:"devicon"},
	{key:"strapi",name:"Strapi",type:"devicon"},
	{key:"docker",name:"Docker",type:"devicon"},



]


const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'java', name: 'Java', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'c', name: 'C', type: 'devicon' },
	{ key: 'cplusplus', name: 'C++', type: 'devicon' },
	{key:"cscript",name:"C#",type:"devicon"},
	{ key: 'tailwind', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'npm', name: 'npm', type: 'devicon' },
	{key:"android",name:"Android",type:"devicon"},
	{key:"react",name:"React Native",type:"devicon"},



];