import { site } from '../data/site'

function Testimonials() {
    return (
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-intro">
            <h2 className="section-eyebrow">{site.testimonial.eyebrow}</h2>
          </div>
  
          <div className="testimonial">
            <blockquote>
              {site.testimonial.quote}
            </blockquote>
  
            <div className="testimonial-author">
              <strong>{site.testimonial.author}</strong>
              <span>{site.testimonial.role}</span>
            </div>
  
            <div className="testimonial-project">
              <span>{site.testimonial.category}</span>
              <span>{site.testimonial.year}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials
