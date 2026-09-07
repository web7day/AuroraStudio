function About() {
    return (
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-image">
            <img
              src="/images/about.jpg"
              alt="NordBuild būvniecības projekts"
              loading="lazy"
              decoding="async"
            />
          </div>
  
          <div className="about-content">
            <p className="section-eyebrow">Par NordBuild</p>
  
            <h2>Būvējam ar atbildību.</h2>
  
            <p className="about-description">
              NordBuild apvieno pieredzi, kvalitatīvus materiālus un pārdomātu
              darba procesu, lai katrs projekts tiktu realizēts atbilstoši iecerei.
            </p>
  
            <div className="about-principles">
              <div className="about-principle">
                <h3>Kvalitāte</h3>
                <p>
                  Pārbaudīti materiāli un risinājumi, kas paredzēti ilgtermiņam.
                </p>
              </div>
  
              <div className="about-principle">
                <h3>Precizitāte</h3>
                <p>
                  Pārdomāta plānošana un skaidri definēti darba posmi.
                </p>
              </div>
  
              <div className="about-principle">
                <h3>Atbildība</h3>
                <p>
                  Viens partneris, skaidra komunikācija un pārskatāms process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About