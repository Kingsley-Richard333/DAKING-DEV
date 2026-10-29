import React from 'react';
import { useInView } from '../hooks/useInView';
import projects from '../data/projects';

export default function FeaturedProjects() {
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [gridRef, isGridInView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className="projects-section" id="projects">
      <div id="project" className="projects-anchor" />
      <div id="tech1" className="projects-anchor" />

      <div
        ref={headerRef}
        className={`showcase-header scroll-reveal ${isHeaderInView ? 'revealed' : ''}`}
      >
        <h2>Featured Projects</h2>
        <p>
          A selection of digital products and experiences built with care.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`projects-grid scroll-reveal ${isGridInView ? 'revealed' : ''}`}
      >
        {projects.map((project) => (
          <a
            key={project.slug}
            className="project-tile"
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.title} case study`}
          >
            <span className="project-tile-image">
              <img
                loading="lazy"
                decoding="async"
                src={project.image}
                alt={project.alt}
              />
              <span className="project-tile-overlay" aria-hidden="true">
                <span className="project-tile-plus">+</span>
              </span>
            </span>
            <span className="project-tile-title">{project.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
