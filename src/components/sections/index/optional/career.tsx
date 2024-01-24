
// Core packages
import Badges from '../../../utils/badge.list'

// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../../assets/styles/scss/sections/index/career.module.scss'
import Education from "./education";
import css from '../../../../../assets/styles/scss/sections/projects/featured.module.scss'
import RecBlock from '../../../blocks/about.rec';
import about from '../../../../../assets/styles/scss/sections/index/about.module.scss';

export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Education/>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Industry"
					subTitle="I hold a strong belief that internships and personal projects serve as unparalleled learning opportunities in the field of software development. I look forward to gaining further hands-on experience through future internships.."
				/>
				<span>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>Software Development Research Project At Florida Polytechnic University</h3>
									<h4>Part Time · January 2024 - Present</h4>
							</span>
							<p style={{fontSize: 15}}>
							Helping a professor create a full stack web app called FIXIS (NFC based information system for smart cities and campuses) using .NET, C#, PostgreSQL, and Docker.
							</p>
						</div>
						<div className={career.companyAlt}></div>

						<Badges list={FloridaPoly} block="stack" fullContainer="fullContainer" color={undefined}/>
						</div>
				</section>
				<div style={{height: 40}}></div>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>Web Development Intern at SOFWERX</h3>
									<h4>Part Time · May 2023 - December 2023</h4>
							</span>
							<p style={{fontSize: 15}}>
							During my time at SOFWERX, I learned a lot about building software and websites. I mainly used JavaScript, along with tools like React and Next.js, plus helpful libraries like Bootstrap and Tailwind. I got hands-on experience with the whole process - from coming up with an idea to making it work perfectly. I also got to be part of a team of programmers all working towards a common goal. This taught me a ton about how real-world projects come together. I improved skills I already had, like coding in JavaScript, designing in Figma, and using services like AWS. Plus, I picked up new skills like Python, Next.js, and working with a headless CMS called Strapi. This internship boosted my technical know-how and showed me how important teamwork is in software development. It was an amazing learning experience that prepared me for all kinds of challenges in web development.
							</p>
						</div>
						<div className={career.companyAlt}></div>

						<Badges list={Sofwerx} block="stack" fullContainer="fullContainer" color={undefined}/>
						</div>
				</section>
				<h3 style={{fontSize: 25, textAlign: 'center', marginTop: 50, marginBottom: 50}}>Recommendations</h3>
				<section className={`w-50 max-sm:w-100${about.content}`} style={{marginTop: 15}}>
				<div className={career.position}>

				<div className={career.companyContent}>
					<span className={career.companyHeader}>
				<h3>Terry Hunt</h3>
							<h4 style={{marginTop: 5, textTransform: 'initial', fontSize: 14, fontWeight: '800'}}>Full Stack Developer at SOFWERX</h4>
					</span>
					<p>
					"From the moment Charles joined SOFWERX as an intern, he immediately impressed me with his proficiency in JavaScript, particularly at a time when he was facing challenges in that area. After providing him with guidance on how to use React/Next.js 13 and Strapi, Charles quickly excelled, designing several websites and applications. He possesses an insatiable desire to learn new things. Though Charles is quiet and reserved, his mind is always active, constantly thinking of ways to improve and optimize code."
					</p>
				</div>
				<div className={career.companyAlt}></div>
				</div>
				</section>
				</span>
			</Container>
			<div className={css.bgContainer} style={{top: 1250, zIndex: -1, opacity: .9}}>
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

const Sofwerx = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'npm', name: 'NPM', type: 'devicon' },
	{ key: 'figma', name: 'Figma', type: 'devicon' },
	{ key: 'ubuntu', name: 'Ubuntu', type: 'devicon' },
	{ key: 'aws', name: 'AWS', type: 'devicon' },
	{ key: 'strapi', name: 'Strapi', type: 'devicon' },
];

const FloridaPoly = [
	{ key: 'dotnet', name: '.NET', type: 'devicon' },
	{ key: 'c#', name: 'C#', type: 'devicon' },
	{ key: 'postgresql', name: 'PostgreSQL', type: 'devicon' },
	{ key: 'docker', name: 'Docker', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'npm', name: 'NPM', type: 'devicon' },
	{ key: 'linode', name: 'Linode', type: 'devicon' },
];