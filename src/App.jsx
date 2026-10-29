import React from 'react';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import AboutBento from './components/AboutBento';
import CoreValues from './components/CoreValues';
import FeaturedProjects from './components/FeaturedProjects';
import TechMarquee from './components/TechMarquee';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import { useScrollEffects } from './hooks/useScrollEffects';
import projects from './data/projects';

export default function App() {
  const { blackholeOpacity, headerBrightness } = useScrollEffects();
  const projectMatch = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/);
  const currentProject = projectMatch
    ? projects.find((project) => project.slug === projectMatch[1])
    : null;

  return (
    <div className="container1">
      {/* Background Videos & Ambient Glow Layers */}
      <BackgroundEffects blackholeOpacity={blackholeOpacity} />

      {/* Navigation Header */}
      <Navbar headerBrightness={headerBrightness} />

      {projectMatch ? (
        <ProjectDetails project={currentProject} />
      ) : (
        <>
          {/* Hero Section */}
          <Hero />

          {/* About & Core Stack Bento Grid */}
          <AboutBento />

          {/* Core Values & Pillars */}
          <CoreValues />

          {/* Featured Projects Showcase */}
          <FeaturedProjects />

          {/* Tech Stack Infinite Marquee */}
          <TechMarquee />

          {/* Contact Section */}
          <Contact />
        </>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
