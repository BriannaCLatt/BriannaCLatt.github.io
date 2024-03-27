import { useRouter } from 'next/router';
import projects from '../../../content/projects/featured.json';

export async function getStaticPaths() {
  const paths = projects.map(project => ({
    params: { project: project.project.toLowerCase().split(' ').join('-') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.project.toLowerCase().split(' ').join('-') === params.project);
  return { props: { project } };
}

export default function ProjectPage({ project }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.project}</h1>
      <p>{project.description}</p>
      {/* Render other project details */}
    </div>
  );
}
