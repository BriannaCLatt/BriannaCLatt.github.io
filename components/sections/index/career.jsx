// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career"
          subTitle="I have honed a comprehensive skill set including UI/UX Design, front-end, and backend development over the last four years. This period has been marked by a steadfast commitment to excellence and continuous improvement in these areas."
        />
        <section className={career.area}>
          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Client Side Scripting</h3>
                <h4>Spring 2022</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>
                Completing this course equipped me with essential web
                development skills for professional websites, including
                data-driven content and interactive design. I learned to apply
                user experience principles and create sophisticated web
                applications, enhancing engagement across devices.
              </p>
              <p>
                The expertise I developed through the course equipped me with
                the ability to:
              </p>
              <ul className={career.list}>
                <li>
                  Master core scripting principles by utilizing contemporary
                  client-side scripting languages.
                </li>
                <li>
                  Address common web design challenges with a strategic,
                  programming-oriented mindset.
                </li>
                <li>
                  Utilize industry-standard tools to design web page layouts,
                  and effectively bring these designs to life on web servers.
                </li>
                <li>
                  Integrate JavaScript into web layouts to craft dynamic and
                  interactive user experiences.
                </li>
                <li>Extract and process user data with Regular Expressions.</li>
                <li>
                  Read, manipulate, and store information efficiently, adhering
                  to the latest best practices in web development.
                </li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.companyPositions}>
            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Front End Web Design</h3>
                  <h4>Spring 2022</h4>
                  <h5>University of Central Florida</h5>
                </span>
                <p>
                  I learned the importance of responsiveness, ensuring websites
                  adapt seamlessly across devices like mobile phones, tablets,
                  and computers, up to high-definition displays and projectors.
                  Through this course, I engaged with modern programming
                  languages to master responsive design principles and adapt to
                  changing user needs.
                </p>
                <p>
                  Through the course, I refined my abilities, enabling me to:
                </p>
                <ul className={career.list}>
                  <li>
                    Acquire a foundational understanding of HTML/CSS syntax and
                    prototyping methods.
                  </li>
                  <li>
                    Apply media queries and responsive design principles to
                    ensure optimal viewing across various devices.
                  </li>
                  <li>
                    Streamline my development process by incorporating SASS,
                    enhancing efficiency and workflow.
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Design for Access and Accessibility</h3>
                  <h4>Fall 2022</h4>
                  <h5>University of Central Florida</h5>
                </span>
                <p>
                  In this course, I gained invaluable insights into designing
                  accessible and engaging digital solutions, emphasizing
                  inclusivity for a broad audience. My work involved hands-on
                  development of website prototypes that met diverse user needs
                  effectively.
                </p>
                <p>The skills that I acquired are:</p>
                <ul className={career.list}>
                  <li>Master accessibility design principles.</li>
                  <li>Identify and mitigate design biases.</li>
                  <li>
                    Evaluate unsuccessful design strategies for specific
                    populations.
                  </li>
                  <li>
                    Learn techniques for crafting compelling digital
                    experiences.
                  </li>
                  <li>Develop inclusive design competencies.</li>
                  <li>
                    Create targeted accessible solutions for varied user
                    requirements.
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>

            <div className={career.position}>
              <div className={career.positionContent}>
                <span class={career.positionHeader}>
                  <h3>Server Side Scripting</h3>
                  <h4>Spring 2023</h4>
                  <h5>University of Central Florida</h5>
                </span>
                <p>
                  Delving into back-end web development, I focused on PHP and
                  MySQL, gaining a solid understanding of server-side
                  scripting's crucial role in web applications. This experience
                  enhanced my practical skills in managing and manipulating data
                  across diverse web development architectures, equipping me
                  with the knowledge to tackle various digital projects
                  effectively.
                </p>
                <p>My skills now entail:</p>
                <ul className={career.list}>
                  <li>
                    Understanding NodeJS, SQL, and NoSQL's roles in web
                    development and their integration with HTML and CSS.
                  </li>
                  <li>
                    Developing various modules using JavaScript and Express.
                  </li>
                  <li>Managing MySQL and MongoDB databases.</li>
                  <li>
                    Using NodeJS to perform operations like creating, accessing,
                    updating, and deleting data on databases, whether they're
                    hosted locally or remotely.
                  </li>
                </ul>
              </div>
              <div className={career.positionAlt}></div>
            </div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>User Centered Design</h3>
                <h4>Spring 2023</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>
                My understanding of how cognition and behavior influence
                user-friendly interface and system creation significantly grew.
                Through practical experience, I fully embraced User-Centered
                Design (UCD) principles, aiming to elevate user experience (UX)
                in software development. This journey involved prioritizing
                usability in design, integrating UCD and participatory design
                into digital media product development, and focusing on
                improving the accuracy, efficiency, robustness, and emotional
                engagement of systems.
              </p>

              <p>I have improved on:</p>

              <ul>
                <li>
                  Developing a mindset oriented towards User-Centered Design to
                  discover requirements of users, stakeholders, and technology
                  iteratively.
                </li>
                <li>
                  Co-designing with team members and end users to create digital
                  products that are both innovative and user-friendly.
                </li>
                <li>
                  Producing a unique design solution through an emergent,
                  iterative improvement process based on UCD principles.
                </li>
                <li>
                  Gaining proficiency in each component of the UCD process in a
                  team project, including ideation, market analysis, user
                  profiling, technology selection, information architecture, and
                  prototyping.
                </li>
                <li>
                  Developing a high-fidelity digital prototype in partnership
                  with end users, culminating in a comprehensive design
                  solution.
                </li>
                <li>
                  Mastering the identification and correction of common
                  usability issues to deliver superior User Experiences (UX).
                </li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Web Design Workshop I & II</h3>
                <h4>Fall 2023 & Spring 2024</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>
                Completing this course equipped me with essential web
                development skills for professional websites, including
                data-driven content and interactive design. I learned to apply
                user experience principles and create sophisticated web
                applications, enhancing engagement across devices. <br /> The
                skills I honed during the course enabled me to:
              </p>
              <ul>
                <li>
                  Master core scripting principles by utilizing contemporary
                  client-side scripting languages.
                </li>
                <li>
                  Address common web design challenges with a strategic,
                  programming-oriented mindset.
                </li>
                <li>
                  Utilize industry-standard tools to design web page layouts,
                  and effectively bring these designs to life on web servers.
                </li>
                <li>
                  Integrate JavaScript into web layouts to craft dynamic and
                  interactive user experiences.
                </li>
                <li>Extract and process user data with Regular Expressions.</li>
                <li>
                  Read, manipulate, and store information efficiently, adhering
                  to the latest best practices in web development.
                </li>
              </ul>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Mobile Development</h3>
                <h4>Spring 2024</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>I was the Electronics Wizard 🧙‍♂️</p>
              <p>
                West Coast Electronics was a repair shop that fixed computers,
                consoles, and cell phones.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>

          <article className={career.company}>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Rapid App Web Development</h3>
                <h4>Spring 2024</h4>
                <h5>University of Central Florida</h5>
              </span>
              <p>I was the Electronics Wizard 🧙‍♂️</p>
              <p>
                West Coast Electronics was a repair shop that fixed computers,
                consoles, and cell phones.
              </p>
            </div>
            <div className={career.companyAlt}></div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
