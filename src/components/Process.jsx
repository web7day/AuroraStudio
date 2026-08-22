const processSteps = [
    {
      number: '01',
      title: 'Konsultācija',
      description:
        'Uzklausām ieceri, izrunājam vajadzības un vienojamies par projekta mērķiem.',
    },
    {
      number: '02',
      title: 'Plānošana',
      description:
        'Izstrādājam darbu plānu, sagatavojam tāmi un saskaņojam projekta norisi.',
    },
    {
      number: '03',
      title: 'Realizācija',
      description:
        'Veicam būvniecības un renovācijas darbus, rūpējoties par kvalitāti katrā posmā.',
    },
    {
      number: '04',
      title: 'Nodošana',
      description:
        'Pabeidzam darbus, pārbaudām rezultātu un nododam projektu gatavu lietošanai.',
    },
  ]
  
  function Process() {
    return (
      <section className="process" id="process">
        <div className="process-container">
          <div className="process-intro">
            <p className="section-eyebrow">Mūsu process</p>
  
            <div>
              <h2>No pirmās sarunas līdz gatavam rezultātam.</h2>
  
              <p className="section-description">
                Skaidrs process palīdz izvairīties no pārsteigumiem un nodrošina,
                ka katrs projekta posms virzās uz kopīgu rezultātu.
              </p>
            </div>
          </div>
  
          <div className="process-steps">
            {processSteps.map((step) => (
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