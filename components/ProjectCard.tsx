"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { SquareArrowOutUpRight, FolderGit } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    image: StaticImageData;
    title: string;
    description: string;
    link?: string;
    github?: string;
    comingSoon?: boolean;
    labels: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const CardContent = (
    <div className={`project-card`} key={project.id}>
      <div className="space-y-5">
        <div className="project-header">
          <Image
            src={project.image}
            alt="logo"
            className={`project-logo ${
              project.image.src.endsWith(".svg") ? "h-[30px]" : "h-[40px]"
            }`}
            sizes="(max-width: 640px) 120px, 150px"
          />
          <div className="project-links">
            {project.comingSoon ? (
              <div className="coming-soon-label">
                <p className="coming-soon-text">Coming Soon</p>
              </div>
            ) : (
              <>
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    aria-label="GitHub"
                  >
                    <FolderGit className="icon github-icon" />
                  </Link>
                )}
                {project.link && (
                  <SquareArrowOutUpRight className="icon arrow-icon" />
                )}
              </>
            )}
          </div>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
      <div className="project-labels">
        {project.labels.map((label, index) => (
          <div className="project-label" key={index}>
            <p className="label-text">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return project.comingSoon ? (
    <div>{CardContent}</div>
  ) : (
    <Link href={project.link ?? "#"} target="_black">
      {CardContent}
    </Link>
  );
};

export default ProjectCard;
