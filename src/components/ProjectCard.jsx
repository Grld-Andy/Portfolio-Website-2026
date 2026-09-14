import { useScrollAnimation } from '../hooks/useScrollAnimation.js';
import SocialIcon from './SocialIcon.jsx';

export default function ProjectCard({ project }) {
  const ref = useScrollAnimation();
  const { number, image, imageAlt, label, title, dateRange, description, links } = project;

  return (
    <article ref={ref} className={`project project-${number} project-animate`}>
      <div className="project-image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="project-content">
        <span className="project-label">{label}</span>
        <h2>{title}</h2>
        <span className="project-date">{dateRange}</span>
        <div className="project-description">
          <p>{description}</p>
        </div>
        <div className="project-socials">
          {links.map(({ url, label: linkLabel }) => (
            <SocialIcon key={linkLabel} url={url} label={linkLabel} />
          ))}
        </div>
      </div>
    </article>
  );
}
