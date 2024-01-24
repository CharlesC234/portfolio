
// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../src/components/structure/section';
import Container from '../../src/components/structure/container';

// Section general blocks
import SectionTitle from '../../src/components/blocks/section.title'

// Section specific blocks
import BadgesBlock from '../../src/components/blocks/about.badges'
import CopyBlock from '../../src/components/blocks/about.copy'

// Section scss
import technical from '../../assets/styles/scss/sections/index/about.module.scss'
import css from '../../assets/styles/scss/sections/projects/featured.module.scss'
import content from '../../src/content/projects/featured.json'
import about from '../../assets/styles/scss/sections/index/about.module.scss';
import button from '../../assets/styles/scss/blocks/button.module.scss';
import Icon from '../../src/components/utils/icon';

export default function resume() {
	return (
<Section classProp={about.section}>
<Container spacing={['verticalXXXLrg']}>
<SectionTitle
					title="Charles Cahill"
					preTitle="Resume"
					subTitle="ccahill0901@floridpoly.edu"
				/>
	<button className={`button ${button.secondary}`} style={{marginRight: 0, alignSelf: 'center', borderWidth: 2}}>
		<a href="/img/Charles_Cahill_Resume.pdf" download="charles_cahill_resume.pdf">View Formal Resume</a></button>
	<section className={about.content}>
	<div className={about.copy}>
		<div className={about.container}>
      		<span className={about.icon}>
        	<Icon icon={['fas', 'building-columns']} />
     		</span>
			 <h3>{"Education"}</h3>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"Florida Polytechnic University, Lakeland, FL — Bachelors in Computer Science"}</h4>
			<p style={{fontSize: 13, marginBottom: 5}}>August 2021 - May 2025</p><p style={{lineHeight: 1.5,}}>Studying Computer Science with a concentration in Software Engineering Anticipated graduation May 2025.</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"Marjory Stoneman Douglas High School, Parkland, FL — High School Diploma"}</h4>
			<p style={{fontSize: 13, marginBottom: 5}}>August 2017 - May 2021</p>
			</span>
		</div>
		<div className={about.container}>
      		<span className={about.icon}>
        	<Icon icon={['fas', 'user']} />
     		</span>
			 <h3>{"Experience"}</h3>
			 <span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"Florida Polytechnic University, Lakeland, Fl — Software Development Research Under Professor Denis Ulybyshev"}</h4>
			<p style={{fontSize: 13, marginBottom: 5}}>January 2024 - Present</p><p style={{lineHeight: 1.5,}}>Helping a professor create a full stack web application called FIXIS (NFC based information system for smart cities and campuses) using .NET, C#, PostgreSQL, and Docker.</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"SOFWERX Computer Science Internship, Tampa, Fl"}</h4>
			<p style={{fontSize: 13, marginBottom: 5}}>May 2023 - December 2023</p><p style={{lineHeight: 1.5,}}>Full stack development with Next.js and Bootstrap, AWS deployment, headless CMS integration, UI/UX design in Figma, version control using GIT.  Fast development and prototyping using open-source repositories.</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"Florida Polytechnic University, Lakeland, Fl — University Registrar Student Worker"}</h4>
			<p style={{fontSize: 13, marginBottom: 5}}>August 2022 - August 2023</p><p style={{lineHeight: 1.5,}}>Experience with data entry and data analysis. Worked in an office setting, primarily providing service to students and entering student data. Experience in Excel organizing and sorting data.</p>
			</span>
		</div>
		<div className={about.container}>
      		<span className={about.icon}>
        	<Icon icon={['fas', 'code']} />
     		</span>
			 <h3>{"Personal Projects"}</h3>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"Full-Stack Mobile Development"}</h4>
			<p>Experience in React Native JavaScript development for Mobile applications. Additional experience with backend development using javascript frameworks such as NodeJS and ExpressJS combined with no-SQL databases.</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"Various Static Webpage Design Projects"}</h4>
			<p>Experience in HTML and CSS, designed multiple website front-ends. Some experience with backend, such as REST API projects using NodeJS and Express.</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"BasedGPT.chat"}</h4>
			<p>An uncensored version of chat gpt built on the llama model utilizing the PygmalionAI. The backend may be offline due to high server fees and low user interactions </p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"XPixels.io"}</h4>
			<p>An AI driven content site built on Next.js and React. The site displays AI generated models and will eventually allow users to generate their own lora models usign stable diffusion (18+)</p>
			</span>
		</div>
		</div>
		<div className={about.copy}>
		<div className={about.container}>
      		<span className={about.icon}>
        	<Icon icon={['fas', 'book']} />
     		</span>
			 <h3>{"Relevant Coursework"}</h3>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 2.5, textTransform: 'initial'}}>{"COP3809"}</h4>
			<p>Object Oriented Programming in Java and JavaFX GUI development</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 2.5, textTransform: 'initial'}}>{"COP3337"}</h4>
			<p>Object Oriented Programming in C++</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 2.5, textTransform: 'initial'}}>{"COP2271"}</h4>
			<p>Computational Programming in C</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 2.5, textTransform: 'initial'}}>{"COP3353"}</h4>
			<p>Unix and Networking</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 2.5, textTransform: 'initial'}}>{"COP3710"}</h4>
			<p>Data Structures in C++</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 2.5, textTransform: 'initial'}}>{"COP3710"}</h4>
			<p>Mobile Device Applications in Java (Android)</p>
			</span>
		</div>
		<div className={about.container}>
      		<span className={about.icon}>
        	<Icon icon={['fas', 'screwdriver-wrench']} />
     		</span>
			 <h3>{"Skills"}</h3>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"Programming languages and frameworks"}</h4>
			<p style={{lineHeight: 1.5,}}> JavaScript, React.js, React Native, Next.js, Express.js, Python, C, C++, Java, Tailwind, Bootstrap, HTML, CSS, GIT</p>
			</span>
			<span>
			<h4 style={{fontSize: 16, fontWeight: '800', marginTop: 5, marginBottom: 5, textTransform: 'initial'}}>{"Tools"}</h4>
			<p style={{lineHeight: 1.5,}}>Visual Studio, Open AI, Open-Source Software,</p>
			<p style={{lineHeight: 1.5,}}>Experience in AWS services including Amplify, CloudFront, S3, EC2 </p>
			</span>
		</div>
		<div className={about.container}>
      		<span className={about.icon}>
        	<Icon icon={['fas', 'person']} />
     		</span>
			 <h3>{"Extracurriculars"}</h3>
			<span>
			<p style={{lineHeight: 1.5,}}>Eagle Scout</p>
			</span>
			<span>
			<p style={{lineHeight: 1.5,}}>Member of web design startup Viben Technologies (www.viben.tech) focused on web development solutions.</p>
			</span>
			<span>
			<p style={{lineHeight: 1.5,}}>Founder, creator, and developer of www.xpixels.io (adult content site)</p>
			</span>
			<span>
			<p style={{lineHeight: 1.5,}}>One of the creators, and developers of www.basedgpt.chat (uncensored version of chatgpt)</p>
			</span>
			<span>
			<p style={{lineHeight: 1.5,}}>Volunteer occasionaly with University Events such as PolyCon </p>
			</span>
		</div>
		</div>
	</section>
	
</Container>
<div className={css.bgContainer} style={{top: 0, zIndex: -1, opacity: 1, left: 0}}>
	<span className={css.orbitalBg}>
		<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
		<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
		<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
	</span>
	<span className={css.afterGlowBg}></span>
</div>
<div className={css.bgContainer} style={{top: 1250, zIndex: -1, opacity: 1}}>
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
	{ key: 'jetbrains', name: 'Jetbrains', type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{key:'blender',name:'blender',type:'devicon'},
	{key:'unity',name:'unity',type:'devicon'},
	{key:'androidstudio',name:'AndroidStudio',type:'devicon'},
	{key:'unrealengine',name:'UnrealEngine',type:'devicon'}



]


const tech = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'php', name: 'PHP', type: 'devicon' },
	{ key: 'wordpress', name: 'WordPress', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'java', name: 'Java', type: 'devicon' },
	{ key: 'csharp', name: 'C#', type: 'devicon' },
	{ key: 'django', name: 'Django', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'c', name: 'C', type: 'devicon' },
	{ key: 'cplusplus', name: 'C++', type: 'devicon' },
	{ key: 'jquery', name: 'jQuery', type: 'devicon' },
	{ key: 'kotlin', name: 'Kotlin', type: 'devicon' },
	{ key: 'vuejs', name: 'Vuejs', type: 'devicon' },
	{ key: 'tailwind', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'npm', name: 'npm', type: 'devicon' },
	{ key: 'yarn', name: 'Yarn', type: 'devicon' },
	{key:"angularjs",name:"AngularJS",type:"devicon"},
	{key:"android",name:"Android",type:"devicon"},
	{key:"firebase",name:"Firebase",type:"devicon"},
	{key:"flask",name:"Flask",type:"devicon"}



];