const projects = [
    {
      number: '01',
      title: 'Mūsdienīga privātmāja',
      location: 'Mārupe',
      year: '2026',
      category: 'Privātmāju būvniecība',
      image: '/images/project-01.jpg',
    },
    {
      number: '02',
      title: 'Dzīvokļa renovācija',
      location: 'Rīga',
      year: '2026',
      category: 'Renovācija',
      image: '/images/project-02.jpg',
    },
    {
      number: '03',
      title: 'Komerctelpu pārbūve',
      location: 'Rīga',
      year: '2025',
      category: 'Komerctelpas',
      image: '/images/project-03.jpg',
    },
  ]
  
  function Projects() {
    return (
      <section className="projects" id="projects">
        <div className="projects-container">
          <div className="projects-intro">
            <p className="section-eyebrow">Mūsu projekti</p>
  
            <div>
              <h2>Darbi, kuros redzama mūsu pieeja.</h2>
  
              <p className="section-description">
                No privātmāju būvniecības līdz pilnīgām renovācijām —
                katram projektam pieejam ar vienādu precizitāti un atbildību.
              </p>
            </div>
          </div>
  
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={`${project.title}, ${project.location}`}
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