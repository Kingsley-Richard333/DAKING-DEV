import React, { useEffect } from 'react';

const caseStudySections = [
  ['Challenge', 'challenge'],
  ['Approach', 'approach'],
  ['Results', 'results'],
];

export default function ProjectDetails({ project }) {
  useEffect(() => {
    document.title = project
      ? `${project.title} | DAKING-DEV`
      : 'Project Not Found | DAKING-DEV';
  }, [project]);

  if (!project) {
    return (
      <main className="project-not-found">
        <p className="case-study-eyebrow">PROJECT NOT FOUND</p>
        <h1>This project could not be found.</h1>
        <a href="/#projects" className="case-study-cta">
          Back to projects
        </a>
      </main>
    );
  }

  return (
    <main className="case-study">
      <section className="case-study-hero">
        <div className="case-study-intro">
          <a className="case-study-back" href="/#projects">
            <span aria-hidden="true">&larr;</span> All projects
          </a>
          <p className="case-study-eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-study-summary">{project.summary}</p>
          <div className="case-study-actions">
            <a className="case-study-cta" href="mailto:daking.dev3@gmail.com">
              Contact me <span aria-hidden="true">&rarr;</span>
            </a>
            <span className="case-study-industry">
              <span>Industry</span>
              {project.industry}
            </span>
          </div>
        </div>
        <div className="case-study-hero-image">
          <img src={project.image} alt={project.alt} />
        </div>
      </section>

      <section className="case-study-content" aria-label="Project case study">
        <div className="case-study-overview">
          <p className="case-study-eyebrow">THE PROJECT</p>
          <h2>Thoughtful solutions, built for real people.</h2>
          <p>{project.summary}</p>
        </div>

        <div className="case-study-points">
          {caseStudySections.map(([title, key], index) => (
            <article className="case-study-point" key={key}>
              <span className="case-study-point-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{title}</h3>
                <p>{project[key]}</p>
              </div>
            </article>
          ))}
        </div>

        <section className="case-study-tech">
          <p className="case-study-eyebrow">TOOLS & TECHNOLOGY</p>
          <h2>Tech Stack</h2>
          <ul>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-gallery">
          <div className="case-study-gallery-heading">
            <div>
              <p className="case-study-eyebrow">A CLOSER LOOK</p>
              <h2>Project Gallery</h2>
            </div>
            <span>{project.gallery.length} project image{project.gallery.length === 1 ? '' : 's'}</span>
          </div>
          <div
            className={`case-study-gallery-grid ${project.gallery.length === 1 ? 'is-single' : ''}`}
          >
            {project.gallery.map((image) => (
              <figure className="case-study-gallery-image" key={image.image}>
                <img src={image.image} alt={image.alt} loading="lazy" />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="case-study-bottom-cta">
          <p>Have a project in mind?</p>
          <a className="case-study-cta" href="mailto:daking.dev3@gmail.com">
            Let’s talk <span aria-hidden="true">&rarr;</span>
          </a>
          <a className="case-study-back" href="/#projects">
            Explore more projects
          </a>
        </div>
      </section>
    </main>
  );
}
