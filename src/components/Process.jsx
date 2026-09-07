import { site } from '../data/site'

function Process() {
    return (
      <section className="process" id="process">
        <div className="process-container">
          <div className="process-intro">
            <p className="section-eyebrow">{site.process.eyebrow}</p>
  
            <div>
              <h2>{site.process.title}</h2>
  
              <p className="section-description">
                {site.process.description}
              </p>
            </div>
          </div>
  
          <div className="process-steps">
            {site.process.items.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
  
                <div className="process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Process
