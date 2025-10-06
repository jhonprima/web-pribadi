import { FaReact, FaNodeJs, FaPhp, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiMysql, SiPostgresql, SiTypescript, SiNextdotjs, SiTailwindcss, SiDocker } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'PHP', icon: FaPhp, color: '#777BB4' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  ];

  return (
    <section className="mb-5">
      <h2 className="section-title">Skills</h2>
      
      <div className="row g-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <div className="skill-card text-center p-4">
                <Icon size={64} style={{ color: skill.color }} className="mb-3" />
                <h5 className="mb-0">{skill.name}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;