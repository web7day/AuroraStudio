import { site } from '../data/site'

function Hero() {
    return (
      <section className="hero">
        <div className="hero-overlay" aria-hidden="true" />
  
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-eyebrow">{site.hero.eyebrow}</p>
  
            <h1>
              {site.hero.title}
            </h1>
  
            <p className="hero-description">
              {site.hero.description}
            </p>
  
            <div className="hero-actions">
              {site.hero.actions.map((action, index) => (
                <a
                  key={action.href}
                  href={action.href}
                  className={`button ${index === 0 ? 'button-primary' : 'button-secondary'}`}
                >
                  {action.label}
                  {index === 0 ? (
                    <>
                      {' '}
                      <span aria-hidden="true">→</span>
                    </>
                  ) : null}
                </a>
              ))}
            </div>
          </div>
  
          <div className="hero-stats">
            {site.hero.stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero
