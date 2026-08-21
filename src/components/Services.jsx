const services = [
    {
      number: '01',
      title: 'Privātmāju būvniecība',
      description:
        'No pirmās ieceres līdz gatavai mājai — pārdomāts process un kvalitatīvs izpildījums.',
    },
    {
      number: '02',
      title: 'Renovācija',
      description:
        'Pilna vai daļēja īpašuma atjaunošana, saglabājot ēkas raksturu un uzlabojot tās funkcionalitāti.',
    },
    {
      number: '03',
      title: 'Dzīvokļu remonts',
      description:
        'Mūsdienīgi risinājumi dzīvokļiem, sākot no kosmētiska remonta līdz pilnai pārbūvei.',
    },
    {
      number: '04',
      title: 'Komerctelpas',
      description:
        'Biroju, veikalu un citu komerctelpu pārbūve atbilstoši uzņēmuma vajadzībām.',
    },
    {
      number: '05',
      title: 'Fasādes un siltināšana',
      description:
        'Ēkas ārējā izskata un energoefektivitātes uzlabošana ar pārbaudītiem risinājumiem.',
    },
    {
      number: '06',
      title: 'Pilna cikla būvniecība',
      description:
        'Viens atbildīgs partneris visam projektam — no plānošanas līdz projekta nodošanai.',
    },
  ]
  
  function Services() {
    return (
      <section className="services" id="services">
        <div className="services-container">
          <div className="services-intro">
            <p className="section-eyebrow">Mūsu pakalpojumi</p>
  
            <div>
              <h2>Būvējam. Atjaunojam. Pārveidojam.</h2>
  
              <p className="section-description">
                Piedāvājam pilna cikla celtniecības un renovācijas pakalpojumus
                privātpersonām un uzņēmumiem Rīgā un tās apkārtnē.
              </p>
            </div>
          </div>
  
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
  
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
  
                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Services