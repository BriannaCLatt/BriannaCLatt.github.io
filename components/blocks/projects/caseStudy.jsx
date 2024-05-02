import Image from "next/image";
import Link from "next/link";
import Icon from "../../utils/icon.util";
import css from "../../../styles/sections/projects/casestudy.module.scss";
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

  const imageStyle = {
    borderRadius: '2rem', // Rounded corners for the image
    objectFit: 'cover',   // Cover the area without distorting aspect ratio
    width: '100%',        // Image takes the full width of its container
    height: 'auto'        // Height is automatic to maintain aspect ratio
  };


  return (
    <section key={project} className={css.caseStudy}>
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
        <div key={`${index}-${key}`} style={{ width: '100%', height: 'auto' }}>
        <Image 
          src={url} 
          alt={project} 
          layout="responsive" 
          width={w} 
          height={h} 
          style={imageStyle}
        />
          </div>
        ))}
      </div>
    </section>
  );
}