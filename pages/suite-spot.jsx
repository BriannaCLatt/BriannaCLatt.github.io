import React from "react";
import Color from "../components/utils/page.colors.util";

import settings from "../content/_settings.json";
import Section from "../components/structure/section";
import Container from "../components/structure/container";
import SectionTitle from "../components/blocks/section.title.block";
import colors from "../content/case-studies/_colors.json";
import css from "../styles/sections/projects/featured.module.scss";

export default function SuiteSpotPage() {
  return (
    <>
      <Color colors={colors} />
      <Section classProp={css.hasBg}>
        <Container spacing={"verticalXXXXLrg"}>
          <SectionTitle
            title="The Suite Spot Case Study"
            preTitle="Where Beauty Finds its Home"
            subTitle="This be the blurb"
          />
        </Container>

        {/* Documentation Section */}
        <section className="documentation-section">
          <h2>Project Documentation</h2>
          <div className="screenshot-container">
            <a href="path_to_documentation_screenshot">
              <img src="path_to_documentation_screenshot" alt="Documentation" />
            </a>
          </div>
          {/* Add more screenshots with links here */}
          <p>Links to view the documentation...</p>
        </section>

         {/* Low-Fi Prototypes Section */}
         <section className="prototypes-section">
          <h2>Low-Fidelity Prototypes</h2>
          <div className="screenshot-container">
            <a href="path_to_prototypes_screenshot">
              <img src="path_to_prototypes_screenshot" alt="Prototypes" />
            </a>
          </div>
          {/* Add more screenshots with links here */}
          <p>Links to view the prototypes...</p>
        </section>

        {/* Project Overview */}
        <section className="overview-section">
          <h2>Project Overview</h2>
          <p>Description of the Suite Spot project...</p>
        </section>

        {/* Challenges and Solutions */}
        <section className="challenges-section">
          <h2>Challenges and Solutions</h2>
          <ul>
            <li>Challenge 1: Description of the challenge and solution</li>
            <li>Challenge 2: Description of the challenge and solution</li>
            {/* Add more challenges and solutions */}
          </ul>
        </section>

        {/* Results and Impact */}
        <section className="results-section">
          <h2>Results and Impact</h2>
          <p>Metrics, statistics, and user feedback...</p>
        </section>

        {/* Conclusion */}
        <section className="conclusion-section">
          <h2>Conclusion</h2>
          <p>Summary of key points and closing thoughts...</p>
        </section>
        <div className={css.bgContainer}>
          <span className={css.orbitalBg}>
            <span class={`${css.bgSection}`}>
              <span
                className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}
              ></span>
            </span>
            <span class={`${css.bgSection}`}>
              <span className={`${css.bgInner} ${css.heroCenter}`}></span>
            </span>
            <span class={`${css.bgSection}`}>
              <span
                className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}
              ></span>
            </span>
          </span>
          <span className={css.afterGlowBg}></span>
        </div>
      </Section>
    </>
  );
}
