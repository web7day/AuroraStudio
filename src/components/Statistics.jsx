import { site } from '../data/site'

function Statistics() {
    return (
      <section className="statistics">
        <div className="statistics-container">
          <div className="statistics-intro">
            <h2 className="section-eyebrow">{site.statistics.eyebrow}</h2>
          </div>
  
          <div className="statistics-list">
            {site.statistics.items.map((stat) => (
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
