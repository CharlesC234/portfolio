
import FeaturedProject from '../../blocks/projects/featured'


// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title'

import css from '../../../../assets/styles/scss/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

{/* Featured Projects */}
export default function FeaturedProjects() {

	return (
		<div id="projects">
		<Section classProp={css.hasBg}>	
			<Container spacing={'verticalXXXXLrg'}>
				<SectionTitle
					title="Projects"
					preTitle="UI Design and Full Stack"
					subTitle="Focused on learning, driven by engineering."
				/> 
				<div>

					<div style={{display: 'inline-flex', flexDirection: 'row', borderRadius: 10, height: 20, width: '100%', overflow: 'hidden'}}>
						<div style={{backgroundColor: '#05BFDB', width: '34.8%', height: 20,marginRight: 2.5}}></div>
						<div style={{backgroundColor: '#6F38C5', width: '16.5%', height: 20, marginRight: 2.5}}></div>
						<div style={{backgroundColor: '#D800A6', width: '15.8%', height: 20, marginRight: 2.5}}></div>
						<div style={{backgroundColor: '#38c58d', width: '14.3%', height: 20,marginRight: 2.5}}></div>
						<div style={{backgroundColor: '#3846c5', width: '8.2%', height: 20,marginRight: 2.5}}></div>
						<div style={{backgroundColor: '#FF7777', width: '7.3%', height: 20, marginRight: 2.5}}></div>
						<div style={{backgroundColor: '#FFC23C', width: '4.2%', height: 20, marginRight: 2.5}}></div>
						<div style={{backgroundColor: '#9AE66E', width: '2.5%', height: 20,}}></div>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', width: '100%', overflow: 'visible', marginTop: 20}}>
					<span style={{display: 'flex', flexDirection: 'row'}}>
					<div style={{width: 20, height: 20, borderRadius: 5, marginBottom: 10, backgroundColor: '#05bfdb'}}/>
					<h3 style={{fontSize: 18, marginLeft: 10, marginRight: 10, marginBottom: 10,}}>53.7% JavaScript</h3>
					</span>
					<span style={{display: 'flex', flexDirection: 'row'}}>
					<div style={{width: 20, height: 20, borderRadius: 5, backgroundColor: '#6F38C5', marginLeft: 12.5, marginBottom: 10,}}/>
					<h3 style={{fontSize: 18, marginLeft: 10, marginRight: 10, marginBottom: 10,}}>16.5% C++</h3>
					</span>
					<span style={{display: 'flex', flexDirection: 'row'}}>
					<div style={{width: 20, height: 20, borderRadius: 5, backgroundColor: '#D800A6', marginLeft: 12.5, marginBottom: 10,}}/>
					<h3 style={{fontSize: 18, marginLeft: 10, marginRight: 10, marginBottom: 10,}}>15.8% Java</h3>
					</span>
					<span style={{display: 'flex', flexDirection: 'row'}}>
					<div style={{width: 20, height: 20, borderRadius: 5, backgroundColor: '#38c58d', marginLeft: 12.5, marginBottom: 10,}}/>
					<h3 style={{fontSize: 18, marginLeft: 10, marginRight: 10, marginBottom: 10,}}>14.3% TypeScript</h3>
					</span>
					<span style={{display: 'flex', flexDirection: 'row'}}>
					<div style={{width: 20, height: 20, borderRadius: 5, backgroundColor: '#3846c5', marginLeft: 12.5, marginBottom: 10,}}/>
					<h3 style={{fontSize: 18, marginLeft: 10, marginRight: 10, marginBottom: 10,}}>8.2% CSS</h3>
					</span>
					<span style={{display: 'flex', flexDirection: 'row'}}>
					<div style={{width: 20, height: 20, borderRadius: 5, backgroundColor: '#FF7777', marginLeft: 12.5, marginBottom: 10,}}/>
					<h3 style={{fontSize: 18, marginLeft: 10, marginRight: 10, marginBottom: 10,}}>7.3% Python</h3>
					</span>
					<span style={{display: 'flex', flexDirection: 'row'}}>
					<div style={{width: 20, height: 20, borderRadius: 5, backgroundColor: '#FFC23C', marginLeft: 12.5, marginBottom: 10,}}/>
					<h3 style={{fontSize: 18, marginLeft: 10, marginRight: 10, marginBottom: 10,}}>4.2% EJS</h3>
					</span>
					<span style={{display: 'flex', flexDirection: 'row'}}>
					<div style={{width: 20, height: 20, borderRadius: 5, backgroundColor: '#9AE66E', marginLeft: 12.5, marginBottom: 10,}}/>
					<h3 style={{fontSize: 18, marginLeft: 10, marginRight: 10, marginBottom: 10,}}>2.5% C</h3>
					</span>
					</div>
					</div>				{
				content.map( (data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})
				}
			</Container>
			<div className={css.bgContainer} style={{top: 1250}}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
			<div className={css.bgContainer} style={{top: 3500}}>
				<span className={css.orbitalBg}>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
		</div>
	)
}