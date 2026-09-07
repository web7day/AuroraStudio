import { site } from '../data/site'

function Services() {
    return (
      <section className="services" id="services">
        <div className="services-container">
          <div className="services-intro">
            <p className="section-eyebrow">{site.services.eyebrow}</p>
  
            <div>
              <h2>{site.services.title}</h2>
  
              <p className="section-description">
                {site.services.description}
              </p>
            </div>
          </div>
  
          <div className="services-grid">
            {site.services.items.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
  
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
  
                <span className="service-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Services
