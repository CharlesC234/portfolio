// Core packages
import Image from "next/image";

// Imports
import Section from "../../structure/section";
import Container from "../../structure/container";

import SectionTitle from "../../blocks/section.title";

import BadgesBlock from "../../blocks/about.badges";
import CopyBlock from "../../blocks/about.copy";
import RecBlock from "../../blocks/about.rec";

import about from "../../../../assets/styles/scss/sections/index/about.module.scss";
import React from "react";
import HeroBg from "../../blocks/hero.bg/section-bg-color";
import css from "../../../../assets/styles/scss/sections/projects/featured.module.scss";
import content from "../../../content/projects/featured.json";

export default function Home() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="About Me"
          preTitle="Synopsis"
          subTitle="I recently graduated Florida Polytechnic University in Lakeland, Florida, in May 2025 with a major in Computer Science an a concentration in Software Engineering. My tech journey began with a love for creating and evolved into a passion for coding in high school. I believe success in Software Engineering is achievable with just an idea, strong passion, and dedicated effort. This belief fuels my studies and personal projects. In this field, imagination is the only limit. I'm excited to contribute to innovative projects and collaborate with like-minded individuals who share a similar vision for pushing the boundaries of what's possible through software."
        />
        <section className={about.content}>
          <div className={about.image} style={{ zIndex: 5 }}>
            <Image
              src="/img/pfp.jpg"
              width={600}
              height={800}
              style={{ zIndex: 5, opacity: 1, backgroundColor: "#000000" }}
              alt="Charles Cahill"
              loading="eager"
            />
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Development and Projects"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "code"]}
              copy="I learn the most from my personal projects and hands on experience in the field. I like to constantly have a project to work on at all times, and I like to choose projects that require me to learn and implement things I haven't before. Most of my projects have been focused on building web applications, as that is what I would like to do in the future. Below you will see some of my featured projects, the majority of my work is in JavaScript, utlizing the React or NextJS frameworks. Make sure to check out the projects page to see all my projects."
            />
            <CopyBlock
              title="What I am Looking For"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fas", "user"]}
              copy="I am currently looking for entry-level full-time opportunities in the field of Software Engineering and Development. I want to innovate and make an impact through the software I build, as well as get additional experience in the industry."
            />
          </div>
        </section>
      </Container>
      <div className={css.bgContainer} style={{ opacity: 1 }}>
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
const methods = [
  {
    key: "machinelearning",
    name: "Machine Learning",
    type: "fad",
    icon: "devicon",
  },
  {
    key: "artificialintelligence",
    name: "Artificial Intelligence",
    type: "fad",
    icon: "devicon",
  },
  { key: "deeplearning", name: "Deep Learning", type: "fad", icon: "devicon" },
  {
    key: "neuralnetworks",
    name: "Neural Networks",
    type: "fad",
    icon: "devicon",
  },
];
