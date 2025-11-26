// Core packages
import Badges from "../../../utils/badge.list";

// Section structure
import Section from "../../../structure/section";
import Container from "../../../structure/container";

// Section general blocks
import SectionTitle from "../../../blocks/section.title";

// Career scss
import career from "../../../../../assets/styles/scss/sections/index/career.module.scss";
import Education from "./education";
import css from "../../../../../assets/styles/scss/sections/projects/featured.module.scss";
import RecBlock from "../../../blocks/about.rec";
import about from "../../../../../assets/styles/scss/sections/index/about.module.scss";

export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Education />
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Industry"
          subTitle="I hold a strong belief that formal experience and personal projects serve as unparalleled learning opportunities in the field of software development."
        />
        <span>
          <section className={career.area}>
            <div className={career.position}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Software Developer at Iron EagleX</h3>
                  <h4>Full Time · June 2025 - Present</h4>
                </span>
                <p style={{ fontSize: 15 }}>
                  Full-stack development utilizing React, Flask, SQL and MUI to
                  build and maintain applications for U.S. Special Operations
                  Command Worked in an agile setting using Jira. Experience
                  creating web applications, unit tested using JEST, CI/CD using
                  SonarQube and Gitlab.
                </p>
              </div>
              <div className={career.companyAlt}></div>

              <Badges
                list={IEX2}
                block="stack"
                fullContainer="fullContainer"
                color={undefined}
              />
            </div>
          </section>
          <div style={{ height: 40 }}></div>
          <section className={career.area}>
            <div className={career.position}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>
                    Junior Full-Stack Developer At Everglades Financial, LLC
                  </h3>
                  <h4>Part Time · January 2025 - June 2025</h4>
                </span>
                <p style={{ fontSize: 15 }}>
                  Full-stack development internship utilizing HTML, CSS, PHP,
                  Python, and SQL to build applications for the company’s
                  financial clients. Working on a tram of 5-10 developers in an
                  agile setting.
                </p>
              </div>
              <div className={career.companyAlt}></div>

              <Badges
                list={EFLLC}
                block="stack"
                fullContainer="fullContainer"
                color={undefined}
              />
            </div>
          </section>
          <div style={{ height: 40 }}></div>
          <section className={career.area}>
            <div className={career.position}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>
                    Software Development Research Assistant At Florida
                    Polytechnic University
                  </h3>
                  <h4>Part Time · January 2024 - Present</h4>
                </span>
                <p style={{ fontSize: 15 }}>
                  Helping a professor (Denis Ulybysehv) create a full-stack web
                  application called VLICS+ (NFC based information system for
                  smart cities and campuses) using .NET, C#, PostgreSQL, and
                  Docker to better assist visually impared individuals navigate
                  campus
                </p>
              </div>
              <div className={career.companyAlt}></div>

              <Badges
                list={FloridaPoly}
                block="stack"
                fullContainer="fullContainer"
                color={undefined}
              />
            </div>
          </section>
          <div style={{ height: 40 }}></div>
          <section className={career.area}>
            <div className={career.position}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Software Engineering Intern at Iron EagleX</h3>
                  <h4>Part Time Internship · May 2024 - December 2024</h4>
                </span>
                <p style={{ fontSize: 15 }}>
                  Experience creating full-stack web applications in an agile
                  development setting, working in a software developer team of
                  5-10 developers. I learned how to make APIs in .net, as well
                  as SQL database integration, and building front-ends with
                  React.js. I am also currently in the process of getting my Top
                  Secret Clearance (TS/SCI) as of September 2024.
                </p>
              </div>
              <div className={career.companyAlt}></div>

              <Badges
                list={IEX}
                block="stack"
                fullContainer="fullContainer"
                color={undefined}
              />
            </div>
          </section>
          <div style={{ height: 40 }}></div>
          <section className={career.area}>
            <div className={career.position}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Software Engineering Intern at SOFWERX</h3>
                  <h4>Part Time · May 2023 - December 2023</h4>
                </span>
                <p style={{ fontSize: 15 }}>
                  During my time at SOFWERX, I learned a lot about building
                  software and websites. I mainly used JavaScript, along with
                  tools like React and Next.js, plus helpful libraries like
                  Bootstrap and Tailwind. I got hands-on experience with the
                  whole process - from coming up with an idea to making it work
                  perfectly. I also got to be part of a team of programmers all
                  working towards a common goal. This taught me a ton about how
                  real-world projects come together. I improved skills I already
                  had, like coding in JavaScript, designing in Figma, and using
                  services like AWS. Plus, I picked up new skills like Python,
                  Next.js, and working with a headless CMS called Strapi. This
                  internship boosted my technical know-how and showed me how
                  important teamwork is in software development. It was an
                  amazing learning experience that prepared me for all kinds of
                  challenges in web development.
                </p>
              </div>
              <div className={career.companyAlt}></div>

              <Badges
                list={Sofwerx}
                block="stack"
                fullContainer="fullContainer"
                color={undefined}
              />
            </div>
          </section>
          <h3
            style={{
              fontSize: 25,
              textAlign: "center",
              marginTop: 50,
              marginBottom: 50,
            }}
          >
            Recommendations
          </h3>
          <section
            className={`w-50 max-sm:w-100${about.content}`}
            style={{ marginTop: 15 }}
          >
            <div className={career.position}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Terry Hunt</h3>
                  <h4
                    style={{
                      marginTop: 5,
                      textTransform: "initial",
                      fontSize: 14,
                      fontWeight: "800",
                    }}
                  >
                    Full Stack Developer at SOFWERX
                  </h4>
                </span>
                <p>
                  "From the moment Charles joined SOFWERX as an intern, he
                  immediately impressed me with his proficiency in JavaScript,
                  particularly at a time when he was facing challenges in that
                  area. After providing him with guidance on how to use
                  React/Next.js 13 and Strapi, Charles quickly excelled,
                  designing several websites and applications. He possesses an
                  insatiable desire to learn new things. Though Charles is quiet
                  and reserved, his mind is always active, constantly thinking
                  of ways to improve and optimize code."
                </p>
              </div>

              <div className={career.companyAlt}></div>
            </div>

            <div className={career.position} style={{ marginTop: 50 }}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Denis Ulybyshev</h3>
                  <h4
                    style={{
                      marginTop: 5,
                      textTransform: "initial",
                      fontSize: 14,
                      fontWeight: "800",
                    }}
                  >
                    Assistant Professor in the Department of Computer Science at
                    Florida Polytechnic University
                  </h4>
                </span>
                <p>
                  "Charles demonstrated solid programming skills in developing
                  front-end and back-end, including communication with
                  PostgreSQL relational database management system. He
                  contributed to the academic research project "Visually
                  Impaired Friendly Information System for Smart Cities"
                </p>
              </div>

              <div className={career.companyAlt}></div>
            </div>
          </section>
        </span>
      </Container>
      <div
        className={css.bgContainer}
        style={{ top: 1250, zIndex: -1, opacity: 0.9 }}
      >
        <span className={css.orbitalBg}>
          <span className={`${css.bgSection}`}>
            <span
              className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}
            ></span>
          </span>
          <span className={`${css.bgSection}`}>
            <span className={`${css.bgInner} ${css.heroCenter}`}></span>
          </span>
          <span className={`${css.bgSection}`}>
            <span
              className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}
            ></span>
          </span>
        </span>
        <span className={css.afterGlowBg}></span>
      </div>

      <div
        className={css.bgContainer}
        style={{ top: 2500, zIndex: -1, opacity: 0.9 }}
      >
        <span className={css.orbitalBg}>
          <span className={`${css.bgSection}`}>
            <span
              className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}
            ></span>
          </span>
          <span className={`${css.bgSection}`}>
            <span className={`${css.bgInner} ${css.heroCenter}`}></span>
          </span>
          <span className={`${css.bgSection}`}>
            <span
              className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}
            ></span>
          </span>
        </span>
        <span className={css.afterGlowBg}></span>
      </div>
    </Section>
  );
}

const Sofwerx = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "tailwindcss", name: "TailwindCSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "npm", name: "NPM", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "ubuntu", name: "Ubuntu", type: "devicon" },
  { key: "aws", name: "AWS", type: "devicon" },
  { key: "strapi", name: "Strapi", type: "devicon" },
];

const FloridaPoly = [
  { key: "dotnet", name: ".NET", type: "devicon" },
  { key: "c#", name: "C#", type: "devicon" },
  { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "npm", name: "NPM", type: "devicon" },
  { key: "linode", name: "Linode", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "Next.JS", name: "Next.js", type: "devicon" },
];

const IEX = [
  { key: "dotnet", name: ".NET", type: "devicon" },
  { key: "c#", name: "C#", type: "devicon" },
  { key: "postgresql", name: "PostgreSQL", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "agile", name: "Agile", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "npm", name: "NPM", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "SQL", name: "SQL", type: "devicon" },
  { key: "Swagger", name: "Swagger", type: "devicon" },
];

const EFLLC = [
  { key: "JQuery", name: "JQuery", type: "devicon" },
  { key: "Javascript", name: "Javascript", type: "devicon" },
  { key: "Bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "CSS", name: "CSS", type: "devicon" },
  { key: "HTML", name: "HTML", type: "devicon" },
  { key: "Python", name: "Python", type: "devicon" },
  { key: "PHP", name: "PHP", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "SQL", name: "SQL", type: "devicon" },
  { key: "agile", name: "Agile", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "auth0", name: "Auth0", type: "devicon" },
];

const IEX2 = [
  { key: "Javascript", name: "Javascript", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "MUI", name: "MUI", type: "devicon" },
  { key: "CSS", name: "CSS", type: "devicon" },
  { key: "Python", name: "Python", type: "devicon" },
  { key: "Flask", name: "Flask", type: "devicon" },
  { key: "Sonarqube", name: "Sonarqube", type: "devicon" },
  { key: "SQL", name: "SQL", type: "devicon" },
  { key: "Docker", name: "Docker", type: "devicon" },
  { key: "agile", name: "Agile", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];
