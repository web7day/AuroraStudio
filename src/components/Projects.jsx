import { site } from '../data/site'

function Projects() {
    return (
      <section className="projects" id="projects">
        <div className="projects-container">
          <div className="projects-intro">
            <p className="section-eyebrow">{site.projects.eyebrow}</p>
  
            <div>
              <h2>{site.projects.title}</h2>
  
              <p className="section-description">
                {site.projects.description}
              </p>
            </div>
          </div>
  
          <div className="projects-list">
            {site.projects.items.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title}, ${project.location}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
  
                <div className="project-info">
                  <div>
                    <span className="project-number">{project.number}</span>
                    <h3>{project.title}</h3>
                  </div>
  
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects
