import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <section className="projects">
        <h1 className="heading">PROJECTS</h1>
        <div className="cards-container">
         <ProjectCard/>
         <ProjectCard/>
         <ProjectCard/>
        </div>
      </section>
  )
}

export default Project