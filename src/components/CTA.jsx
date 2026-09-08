import { site } from '../data/site'

function CTA() {
    const handleSubmit = (event) => {
      event.preventDefault()
    }

    return (
      <section className="cta" id="contact">
        <div className="cta-container">
          <div className="cta-intro">
            <p className="section-eyebrow">{site.cta.eyebrow}</p>
  
            <div>
              <h2>{site.cta.title}</h2>
  
              <p className="cta-description">
                {site.cta.description}
              </p>
  
              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                <button type="submit" className="cta-button">
                  {site.cta.buttonLabel}
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>
  
          <div className="cta-bottom">
            <span>{site.cta.metaLeft}</span>
            <span>{site.cta.metaRight}</span>
          </div>
        </div>
      </section>
    )
  }
  
  export default CTA
