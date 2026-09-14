import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { PROJECTS_PER_PAGE, projectData } from '../data/projects.js';

export default function ProjectTabs() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(projectData.length / PROJECTS_PER_PAGE);

  const pageProjects = useMemo(() => {
    const firstProject = (currentPage - 1) * PROJECTS_PER_PAGE;
    return projectData.slice(firstProject, firstProject + PROJECTS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="projects">
      <div className="project-list">
        {pageProjects.map((project, index) => (
          <ProjectCard key={`${currentPage}-${index}`} project={project} />
        ))}
      </div>
      <div className="project-tabs" role="tablist" aria-label="Project pages">
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            type="button"
            role="tab"
            aria-selected={page === currentPage}
            aria-label={`Show project page ${page}`}
            tabIndex={page === currentPage ? 0 : -1}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
