
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
                    subTitle="I'm a Senior studying Computer Science with a focus in Software Engineering at Florida Polytechnic University in Lakeland, Florida."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
        <span className={career.companyHeader}>
            <h3>Florida Polytechnic University</h3>
            <h5>Lakeland, Florida · August 2021 - May 2025</h5>
        </span>
                            <p style={{fontSize: '15px'}}>During my time at Florida Polytechnic I have learned a tremendous amount. Initially I studied Electrical Engineering, but eventually switched my major, as I found that Computer Science aligned more with what I really wanted to do as well as my dreams of entrepreneurship. I would highly recommend the Computer Science program at Florida Polytechnic, I have had great hands on experience in the field, and amazing professors. Overall I feel it has adequately preppared me for the industry.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

