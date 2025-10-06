import { testimonials } from '../data/portfolioData';
import Image from 'next/image'; // Impor Image untuk foto author

const TestimonialSection = () => {
  return (
    <section className="mb-5">
      <h2 className="section-title">Client Testimonials</h2>
      
      <div className="row g-4">
        {testimonials.map((testimonial) => (
          // IMPROVEMENT: Menggunakan ID unik dari data sebagai key, lebih baik dari index
          <div key={testimonial.id} className="col-lg-4 col-md-6">
            <div className="testimonial-card">
              <div className="testimonial-header">
                {testimonial.image && (
                  <div className="testimonial-image">
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                  </div>
                )}
                <div className="testimonial-quote-mark">
                  {/* FIX: Mengganti " dengan &quot; untuk mencegah error build */}
                  &quot;
                </div>
              </div>

              <p className="testimonial-text">
                {testimonial.text.split(testimonial.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <strong className="text-white">{testimonial.highlight}</strong>
                    )}
                  </span>
                ))}
              </p>
              
              <div className="testimonial-author">
                <h5 className="author-name">{testimonial.name}</h5>
                <p className="author-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;