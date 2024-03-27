import Image from "next/image";
import Link from "next/link";
import Badges from "../../utils/badge.list.util";
import Icon from "../../utils/icon.util";
import css from "../../../styles/sections/projects/featured.module.scss";
import content from "../../../content/projects/featured.json";

export default function FeaturedProject({ content }) {
  const {
    project,
    url,
    repo,
    descriptionTitle,
    description,
    stack,
    images,
  } = content;

  return (
    <section key={project} className={css.project}>
      <div className={css.details}>
        <div className={css.projectHeader}>
          <div className={css.header}>
            <h3 className="highlight">{project}</h3>
            <span className={css.privateOr}>{repo}</span>
          </div>
          <div className={css.description}>
            <p>
              <strong>{descriptionTitle}</strong>
              <br />
              <br />
              {description}
            </p>
          </div>
          <div className={css.stackContainer}>
            <Badges
              list={stack}
              block="stack"
              fullContainer={false}
              color={false}
            />
          </div>
          <div className={css.viewProject}>
            <Link href={url} aria-label={`View project ${project}`}>
              <Icon icon={["fad", "arrow-right-to-bracket"]} />
            </Link>
          </div>
        </div>
      </div>

      <div className={css.imageContainer}>
        {images.map(({ key, url, h, w }, index) => (
          <div key={`${index}-${key}`}>
            <Image src={url} alt="x" height={h} width={w} />
          </div>
        ))}
      </div>
    </section>
  );
}
