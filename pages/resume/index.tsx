// Core packages
import Image from "next/image";

// Section structure
import Section from "../../src/components/structure/section";
import Container from "../../src/components/structure/container";

// Section general blocks
import SectionTitle from "../../src/components/blocks/section.title";

// Section specific blocks
import BadgesBlock from "../../src/components/blocks/about.badges";
import CopyBlock from "../../src/components/blocks/about.copy";

// Section scss
import technical from "../../assets/styles/scss/sections/index/about.module.scss";
import css from "../../assets/styles/scss/sections/projects/featured.module.scss";
import content from "../../src/content/projects/featured.json";
import about from "../../assets/styles/scss/sections/index/about.module.scss";
import button from "../../assets/styles/scss/blocks/button.module.scss";
import Icon from "../../src/components/utils/icon";

export default function resume() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Charles Cahill"
          preTitle="Resume"
          subTitle="ccahill0901@floridpoly.edu"
        />
        <button
          className={`button ${button.secondary}`}
          style={{ marginRight: 0, alignSelf: "center", borderWidth: 2 }}
        >
          <a
            href="/img/Charles_Cahill_Resume.pdf"
            download="charles_cahill_resume.pdf"
          >
            Download Formal Resume
          </a>
        </button>
        <section className={about.content}>
          <div className={about.copy}>
            <div className={about.container}>
              <span className={about.icon}>
                <Icon icon={["fas", "building-columns"]} />
              </span>
              <h3
                style={{
                  fontSize: 25,
                  color: "rgba(255,255,255,.75)",
                  marginBottom: 15,
                }}
              >
                {"Education"}
              </h3>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {
                    "Florida Polytechnic University, Lakeland, FL — Bachelors in Computer Science"
                  }
                </h4>
                <p style={{ fontSize: 13, marginBottom: 5 }}>
                  August 2021 - May 2025
                </p>
                <p style={{ lineHeight: 1.5 }}>
                  Studying Computer Science with a concentration in Software
                  Engineering Anticipated graduation May 2025.
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {
                    "Marjory Stoneman Douglas High School, Parkland, FL — High School Diploma"
                  }
                </h4>
                <p style={{ fontSize: 13, marginBottom: 5 }}>
                  August 2017 - May 2021
                </p>
              </span>
            </div>
            <div className={about.container}>
              <span className={about.icon}>
                <Icon icon={["fas", "user"]} />
              </span>
              <h3
                style={{
                  fontSize: 25,
                  color: "rgba(255,255,255,.75)",
                  marginBottom: 15,
                }}
              >
                {"Experience"}
              </h3>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"Iron EagleX, MacDill AFB, Tampa, Fl — Software Developer"}
                </h4>
                <p style={{ fontSize: 13, marginBottom: 5 }}>
                  June 2025 - Present
                </p>
                <p style={{ lineHeight: 1.5 }}>
                  Full-stack development utilizing React, Flask, SQL and MUI to
                  build and maintain applications for U.S. Special Operations
                  Command. Worked in an agile setting using Jira. Experience
                  creating web applications, unit tested using JEST, CI/CD using
                  SonarQube and Gitlab.
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {
                    "Everglades Financial, LLC, Lakeland, Fl — Junior Full-Stack Developer"
                  }
                </h4>
                <p style={{ fontSize: 13, marginBottom: 5 }}>
                  January 2025 - June 2025
                </p>
                <p style={{ lineHeight: 1.5 }}>
                  Full-stack development internship utilizing HTML, CSS, PHP,
                  Python, and SQL to build applications for the company’s
                  financial clients. Working on a tram of 5-10 developers in an
                  agile setting.
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {
                    "Florida Polytechnic University, Lakeland, Fl — Software Development Research Assistant"
                  }
                </h4>
                <p style={{ fontSize: 13, marginBottom: 5 }}>
                  January 2024 - Present
                </p>
                <p style={{ lineHeight: 1.5 }}>
                  Helping a professor (Denis Ulybysehv) create a full-stack web
                  application called VLICS+ (NFC based information system for
                  smart cities and campuses) using .NET, C#, PostgreSQL, and
                  Docker to better assist visually impared individuals navigate
                  campus
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"Iron EagleX, Tampa, Fl — Software Engineering Intern"}
                </h4>
                <p style={{ fontSize: 13, marginBottom: 5 }}>
                  May 2024 - December 2024
                </p>
                <p style={{ lineHeight: 1.5 }}>
                  Gained Experience creating full-stack web applications in an
                  agile development setting, working in a software developer
                  team of 5-10 developers. Learned how to make APIs in .net, SQL
                  database integration, and front-end development with React.js
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"SOFWERX, Tampa, Fl — Software Engineering Intern"}
                </h4>
                <p style={{ fontSize: 13, marginBottom: 5 }}>
                  May 2023 - December 2023
                </p>
                <p style={{ lineHeight: 1.5 }}>
                  Full stack development with Next.js and Bootstrap, AWS
                  deployment, headless CMS integration, UI/UX design in Figma,
                  version control using GIT. Fast development and prototyping
                  using open-source repositories.
                </p>
              </span>
            </div>
            <div className={about.container}>
              <span className={about.icon}>
                <Icon icon={["fas", "book"]} />
              </span>
              <h3
                style={{
                  fontSize: 25,
                  color: "rgba(255,255,255,.75)",
                  marginBottom: 15,
                }}
              >
                {"Relevant Coursework"}
              </h3>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"COP3710"}
                </h4>
                <p>SQL Database Design and Development</p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"CEN4722"}
                </h4>
                <p>UI/UX Design and Development in Figma</p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"CEN4065"}
                </h4>
                <p>Software Design and Architecture</p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"CEN4072"}
                </h4>
                <p>
                  Software Verification and Quality Assurance in Java and JUnit
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"COP3710"}
                </h4>
                <p>Mobile Device Applications in Java (Android)</p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"COP3809"}
                </h4>
                <p>
                  Object Oriented Programming in Java and JavaFX GUI development
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"COP3337"}
                </h4>
                <p>Object Oriented Programming in C++</p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"COP2271"}
                </h4>
                <p>Computational Programming in C</p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    fontWeight: "800",
                    color: "rgba(255,255,255,.75)",
                    marginTop: 5,
                    marginBottom: 2.5,
                    textTransform: "initial",
                  }}
                >
                  {"COP3710"}
                </h4>
                <p>Data Structures in C++</p>
              </span>
            </div>
          </div>
          <div className={about.copy}>
            <div className={about.container}>
              <span className={about.icon}>
                <Icon icon={["fas", "code"]} />
              </span>
              <h3
                style={{
                  fontSize: 25,
                  color: "rgba(255,255,255,.75)",
                  marginBottom: 15,
                }}
              >
                {"Personal Projects"}
              </h3>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"Full-Stack Mobile Development"}
                </h4>
                <p>
                  Experience in React Native JavaScript development for Mobile
                  applications. Additional experience with backend development
                  using javascript frameworks such as NodeJS and ExpressJS
                  combined with no-SQL databases.
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"Full-Stack and Static Web Development"}
                </h4>
                <p>
                  Experience building multiple full stack applications (such as
                  Bookwise, VLICS, OTSCustomDesigns, and SOFWERX.org) primarily
                  with Next.js, React.js, Express.js, C# (.NET), PostgreSQL, and
                  Strapi CMS, as well as Static websites such as TheCosmics.XYZ,
                  and Viben.tech
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"BasedGPT.chat"}
                </h4>
                <p>
                  An uncensored version of chat gpt built on the llama model
                  utilizing the PygmalionAI. The backend may be offline due to
                  high server fees and low user interactions{" "}
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"Bookwise"}
                </h4>
                <p>
                  A full-stack web application built on Next.js, AWS, and JS,
                  allowing users to make accounts and add book PDFs to view
                  later or to share publicly with other users on the site. Check
                  it out for yourself in projects!
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"Cloud Connected PID Training System for TriNova Inc."}
                </h4>
                <p>
                  A senior capstone project, with the goal of designing and
                  building a physical training system to educate a trainee on
                  how to set PID values for a 2-pump input, random output water
                  reservoir system, including a cloud implementation for data
                  viewing built with Next.js and reference to Endress + Hauser
                  Netilion REST API.{" "}
                </p>
              </span>
            </div>
            <div className={about.container}>
              <span className={about.icon}>
                <Icon icon={["fas", "screwdriver-wrench"]} />
              </span>
              <h3
                style={{
                  fontSize: 25,
                  color: "rgba(255,255,255,.75)",
                  marginBottom: 15,
                }}
              >
                {"Skills"}
              </h3>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"Programming languages and frameworks"}
                </h4>
                <p style={{ lineHeight: 1.5 }}>
                  JavaScript, React.js, React Native, Next.js, Express.js,
                  MongoDB, Python, C, C++, Java, Tailwind, Bootstrap, HTML, CSS,
                  PHP, GIT, C#, SQL, PostgreSQL, Docker, .NET, Linux / Unix,
                  Experience in AWS and other services including Amplify,
                  CloudFront, S3, EC2, Open AI, Strapi.io CMS, Vercel, Railway,
                  and Linode.
                </p>
              </span>
              <span>
                <h4
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: "800",
                    marginTop: 5,
                    marginBottom: 5,
                    textTransform: "initial",
                  }}
                >
                  {"Tools"}
                </h4>
                <p style={{ lineHeight: 1.5 }}>
                  Visual Studio, Open AI, Open-Source Software, StrapiCMS, Adobe
                  Illustrator, Ubuntu, Unix, GIT
                </p>
                <p style={{ lineHeight: 1.5 }}>
                  Experience in AWS services including Amplify, CloudFront, S3,
                  EC2{" "}
                </p>
              </span>
            </div>
            <div className={about.container}>
              <span className={about.icon}>
                <Icon icon={["fas", "person"]} />
              </span>
              <h3
                style={{
                  fontSize: 25,
                  color: "rgba(255,255,255,.75)",
                  marginBottom: 15,
                }}
              >
                {"Professional Highlights"}
              </h3>
              <span>
                <p style={{ lineHeight: 1.5 }}>Eagle Scout</p>
              </span>
              <span>
                <p style={{ lineHeight: 1.5 }}>
                  Currently in possession of DOD TS/SCI Clearance
                </p>
              </span>
              <span>
                <p style={{ lineHeight: 1.5 }}>
                  Sole owner of freelance web development business (Launchwards
                  LLC) (see portfolio), ecommerce and small business focused.
                  Currently working on in progress web application for client
                  (as of Nov 2025) with a few completed projects
                </p>
              </span>
              <span>
                <p style={{ lineHeight: 1.5 }}>
                  One of the creators, and developers of www.basedgpt.chat
                  (uncensored version of chatgpt) - offline due to limited use
                  and high deployment costs
                </p>
              </span>
            </div>
          </div>
        </section>
      </Container>
      <div
        className={css.bgContainer}
        style={{ top: 0, zIndex: -1, opacity: 1, left: 0 }}
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
        style={{ top: 1250, zIndex: -1, opacity: 1 }}
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
        style={{ top: 2050, zIndex: -1, opacity: 1 }}
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
{
  /*Badge Block*/
}
const software = [
  { key: "photoshop", name: "Photoshop", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "jetbrains", name: "Jetbrains", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "blender", name: "blender", type: "devicon" },
  { key: "unity", name: "unity", type: "devicon" },
  { key: "androidstudio", name: "AndroidStudio", type: "devicon" },
  { key: "unrealengine", name: "UnrealEngine", type: "devicon" },
];

const tech = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "csharp", name: "C#", type: "devicon" },
  { key: "django", name: "Django", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "c", name: "C", type: "devicon" },
  { key: "cplusplus", name: "C++", type: "devicon" },
  { key: "jquery", name: "jQuery", type: "devicon" },
  { key: "kotlin", name: "Kotlin", type: "devicon" },
  { key: "vuejs", name: "Vuejs", type: "devicon" },
  { key: "tailwind", name: "TailwindCSS", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "npm", name: "npm", type: "devicon" },
  { key: "yarn", name: "Yarn", type: "devicon" },
  { key: "angularjs", name: "AngularJS", type: "devicon" },
  { key: "android", name: "Android", type: "devicon" },
  { key: "firebase", name: "Firebase", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
];
