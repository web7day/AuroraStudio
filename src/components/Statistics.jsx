const statistics = [
    {
      value: '10+',
      label: 'GADI PIEREDZES',
    },
    {
      value: '100+',
      label: 'PABEIGTI PROJEKTI',
    },
    {
      value: '5★',
      label: 'KLIENTU VĒRTĒJUMS',
    },
    {
      value: '24/7',
      label: 'KOMUNIKĀCIJA',
    },
  ]
  
  function Statistics() {
    return (
      <section className="statistics">
        <div className="statistics-container">
          <div className="statistics-intro">
            <p className="section-eyebrow">Mūsu pieredze</p>
          </div>
  
          <div className="statistics-list">
            {statistics.map((stat) => (
              <div className="statistic" key={stat.label}>
                <span className="statistic-value">{stat.value}</span>
                <span className="statistic-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Statistics