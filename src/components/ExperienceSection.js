import { experience } from '../data/portfolioData';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection = () => {
  return (
    <section className="mb-5">
      <h2 className="section-title">Experience</h2>
      
      <div className="row g-4">
        {experience.map((exp, index) => (
          <div key={index} className="col-12">
            <div className="testimonial-card">
              <div className="d-flex align-items-start gap-3">
                <div className="text-green mt-1">
                  <FaBriefcase size={28} />
                </div>
                <div className="flex-grow-1">
                  <h4 className="mb-1">{exp.position}</h4>
                  <h5 className="text-muted mb-2">{exp.company}</h5>
                  <p className="text-green mb-3 fw-semibold">{exp.period}</p>
                  <p className="text-muted mb-0">{exp.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;