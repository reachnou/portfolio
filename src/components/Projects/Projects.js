import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151418" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,101.3C672,139,768,213,864,213.3C960,213,1056,139,1152,106.7C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
