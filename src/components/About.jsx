import { site } from '../data/site'

function About() {
    return (
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image">
            <img
              src={site.about.image}
              alt={site.about.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </div>
  
          <div className="about-content">
            <p className="section-eyebrow">{site.about.eyebrow}</p>
  
            <h2>{site.about.title}</h2>
  
            <p className="about-description">
              {site.about.description}
            </p>
  
            <div className="about-principles">
              {site.about.principles.map((principle) => (
                <div className="about-principle" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About
