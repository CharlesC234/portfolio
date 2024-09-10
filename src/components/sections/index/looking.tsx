
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';


// Section general blocks
// Spacing util
// Section scss
import looking from '../../../../assets/styles/scss/sections/index/looking.module.scss';
import section from '../../../../assets/styles/scss/blocks/section.title.module.scss'
import css from '../../../../assets/styles/scss/sections/projects/featured.module.scss'

export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>	
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>I&apos;m currently looking for Internships.</h4>
				<h2 className={looking.json}>Internships : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Full Stack</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Software Dev</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight3}>Computer Science</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>I am looking for positions that would allow me to expand my knowledge in Software Engineering and Computer Science.</h4>
				{/* <h2>Fresher <span className={looking.highlight}>User Experience</span> Designer</h2> */}
				{/* <p className="subtitle">with a focus on Product Design.</p> */}
			</Container>
		</Section>
	)
}