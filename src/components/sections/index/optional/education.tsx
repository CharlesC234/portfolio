
// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../../assets/styles/scss/sections/index/career.module.scss'


export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="Formal"
                    subTitle="I am currently studying Computer Science with a focus in Software Engineering at Florida Polytechnic University in Lakeland, Florida."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
        <span className={career.companyHeader}>
            <h3>Florida Polytechnic University</h3>
            <h5>Lakeland, Florida</h5>
        </span>
                            <p>I am currently a junior pursuing my Bachelors degree in Computer Science with a focus in Software Engineering at Florida Polytechnic University. This four-year program offers a comprehensive curriculum that covers various aspects of computer science and its applications.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

