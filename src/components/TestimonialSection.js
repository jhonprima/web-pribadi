import { testimonials } from '../data/portfolioData';

const TestimonialSection = () => {
  return (
    <section className="mb-5">
      <h2 className="section-title">Client testimonials</h2>
      
      <div className="row g-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="col-md-4">
            <div className="testimonial-card">
              <div className="text-green mb-3" style={{ fontSize: '3rem', lineHeight: 1 }}>"</div>
              <p className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                {testimonial.text.split(testimonial.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <strong className="text-white">{testimonial.highlight}</strong>
                    )}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;