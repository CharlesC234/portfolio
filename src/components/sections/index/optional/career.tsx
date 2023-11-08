
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
					subTitle="I am currently interning as a web developer at SOFWERX. I hold a strong belief that internships and personal projects serve as unparalleled learning opportunities in the field of software development. I look forward to gaining further hands-on experience through future internships.."
				/>
				<span>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>Web Development Intern at SOFWERX</h3>
									<h4>Part Time · May 2023 - Present</h4>
							</span>
							<p>
							During my time at SOFWERX, I learned a lot about building software and websites. I mainly used JavaScript, along with tools like React and Next.js, plus helpful libraries like Bootstrap and Tailwind. I got hands-on experience with the whole process - from coming up with an idea to making it work perfectly. I also got to be part of a team of programmers all working towards a common goal. This taught me a ton about how real-world projects come together. I improved skills I already had, like coding in JavaScript, designing in Figma, and using services like AWS. Plus, I picked up new skills like Python, Next.js, and working with a headless CMS called Strapi. This internship boosted my technical know-how and showed me how important teamwork is in software development. It was an amazing learning experience that prepared me for all kinds of challenges in web development.
							</p>
						</div>
						<div className={career.companyAlt}></div>

						<Badges list={fullStack} block="stack" fullContainer="fullContainer" color={undefined}/>
						</div>

					{/*	<article className={career.companyPositions}>


						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Designer</h3>
								</span>
								<p>
As a  Full Stack Developer, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain. By actively staying updated with the latest advancements and trends in the industry, I ensure that I am equipped with the necessary tools and techniques to tackle challenging projects. My primary goal is to contribute effectively to the development of sophisticated applications, leveraging my expertise in both front-end and back-end technologies. Through my dedication to continuous improvement, I strive to deliver high-quality solutions that meet the evolving needs of the industry.								</p>
								<p>
								Liber consectetur graece nostra commune. Eam dolores ancillae lobortis noster. Vim posse elit dui theophrastus. Reque atqui corrumpit quam minim quisque. Taciti moderatius graece usu aenean. Agam orci commodo mea sit quam. Mus mazim morbi conclusionemque causae constituto congue sed indoctum. Efficiantur non movet saepe meliore evertitur posidonium vocibus efficitur. Veniam ius epicurei has vitae discere quisque dictumst. Viris pri vituperatoribus inimicus neque petentium erat tibique porttitor. Tacimates auctor in omittam utroque saperet eleifend utroque definitiones. Venenatis mediocritatem recteque consequat fusce debet facilisis. Aperiri nobis erat vivendo morbi falli rutrum ancillae dicant persius. Congue habemus nulla fringilla quaerendum augue mucius ei quam quo. Accumsan cetero ex sapien idque quaestio eget natoque eum ponderum. Interdum mauris eripuit volutpat sententiae. Conubia singulis natoque vestibulum morbi affert epicurei. Mentitum solum duis adolescens persecuti propriae neque agam. Habitasse detraxit mi fabellas voluptaria nunc suscipit. Senserit ea feugait indoctum mi. Vero scripserit quaerendum iriure facilisi his iusto quod. Finibus vulputate eirmod adipisci nullam usu ante quaestio maiorum doctus. Nunc simul suspendisse nisi salutatus error sanctus curabitur invidunt. Falli dolor consul dissentiunt dictumst reformidans delectus qui. Mauris veniam mauris constituto volutpat quidam. Aliquip eruditi senserit atomorum augue moderatius. His reque porttitor senectus etiam sem quam dissentiunt fringilla conclusionemque. Nihil parturient constituto decore voluptatum atqui quod alienum at. Nulla nostrum ad platea scripserit. Commune ubique tractatos sollicitudin doming. Ignota hac persequeris litora accommodare. Conclusionemque augue ignota elitr auctor orci. Sapien lobortis finibus partiendo arcu referrentur. Nostra aenean numquam dolores class aenean viderer. Errem praesent ubique habitasse comprehensam elaboraret. Delectus sapien elementum nec reque. Melius error novum adhuc referrentur dictum. Percipit elit principes placerat repudiandae auctor mollis. Mei reque sollicitudin ferri accommodare civibus quas. Moderatius interdum massa risus graece vero conclusionemque adhuc. Ne cubilia dicit maecenas mollis. Iudicabit numquam definiebas necessitatibus habitant dolorem iisque. Varius corrumpit curae dicat cursus. Scripserit nostra molestiae periculis audire propriae viderer. Etiam expetendis vidisse evertitur signiferumque dicant natum. Causae lectus reformidans tortor amet. Tempor doctus falli vivendo aenean liber magnis mus. Neque delenit quo nisl altera sagittis. Tale consectetuer metus ante elit. Errem vitae mazim mandamus impetus ridiculus aliquam indoctum dicant inimicus.
								</p>
								<ul className={career.list}>
									<li>
										Lorem
										<span className={career.subList}><span className={career.bullet}></span>Lorem</span>
									</li>


								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

					</article>
*/}
				</section>
				<h3 style={{fontSize: 25, textAlign: 'center', marginTop: 50, marginBottom: 50}}>Recommendations</h3>
				<section className={about.content} style={{width: '50%', marginTop: 15}}>
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

const fullStack = [
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