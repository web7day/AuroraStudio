function CTA() {
    const handleSubmit = (event) => {
      event.preventDefault()
    }

    return (
      <section className="cta" id="contact">
        <div className="cta-container">
          <div className="cta-intro">
            <p className="section-eyebrow">Sāksim projektu</p>
  
            <div>
              <h2>Ir projekts? Parunāsim.</h2>
  
              <p className="cta-description">
                Pastāstiet mums par savu ieceri. Izrunāsim vajadzības,
                iespējas un nākamos soļus.
              </p>
  
              <form id="contact-form" onSubmit={handleSubmit} noValidate>
                <button type="submit" className="cta-button">
                  Pieprasīt tāmi
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>
  
          <div className="cta-bottom">
            <span>Rīga · Latvija</span>
            <span>NordBuild</span>
          </div>
        </div>
      </section>
    )
  }
  
  export default CTA