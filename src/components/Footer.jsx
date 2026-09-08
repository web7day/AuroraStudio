import { site } from '../data/site'

function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href={site.footer.href} className="footer-logo">
                {site.brand.logo}
              </a>
  
              <p>
                {site.footer.tagline}
                <br />
                {site.footer.location}
              </p>
            </div>
  
            <div className="footer-contact">
              <p className="footer-label">{site.footer.contactLabel}</p>
  
              <a href={site.footer.phoneHref}>{site.footer.phone}</a>
              <a href={site.footer.emailHref}>{site.footer.email}</a>
            </div>
  
            <div className="footer-navigation">
              <p className="footer-label">{site.footer.navLabel}</p>
  
              {site.footerNav.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
  
          <div className="footer-bottom">
            <span>{site.footer.copyright}</span>
  
            <span>{site.footer.locationShort}</span>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
