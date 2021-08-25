import React from "react";

import fantasyBaseball from "../images/projectImages/fantasyBaseball.png";
import fscDetailImage from "../images/projectImages/fscDetailImages.png";
import learnTogetherDetailImage from "../images/projectImages/learnTogetherDetailImages.png";
import onitamaDetailImage from "../images/projectImages/onitamaDetailImages.png";
import upside from "../images/projectImages/upsideDetailImages.png";
import weRHereDetailImage from "../images/projectImages/weRHereDetailImages.png";

const detailImage = (title) => {
  switch (title) {
    case "Upside Buisness Travel":
      return (
        <img
          src={upside}
          className="p-image-detail"
          alt="Upside Buisness Travel website sample"
        />
      );
    case "Flatiron Students Connect":
      return (
        <img
          src={fscDetailImage}
          className="p-image-detail"
          alt="Flatiron Students connect website sample"
        />
      );
    case "Onitama":
      return (
        <img
          src={onitamaDetailImage}
          className="p-image-detail"
          alt="Onitama website sample"
        />
      );
    case "WeRHere":
      return (
        <img
          src={weRHereDetailImage}
          className="p-image-detail"
          alt="We r here website sample"
        />
      );
    case "LearnTogether":
      return (
        <img
          src={learnTogetherDetailImage}
          className="p-image-detail"
          alt="Learn Together website sample"
        />
      );
    case "Fantasy Baseball App":
      return (
        <img
          src={fantasyBaseball}
          className="p-image-detail"
          alt="Fantasy Baseball website login page and owner landing page"
        />
      );
    default:
      return <span></span>;
  }
};

const ProjectDetail = ({
  title,
  description,
  githubLink,
  techUsed,
  deployedURI,
}) => {
  debugger;
  return (
    <div
      className={`project-detail-div ${title === "Onitama" ? "last" : null}`}
    >
      <span className="project-info-wrapper">
        <span className="project-detail-text">
          <div className="project-header">
            {githubLink ? (
              <a
                href={githubLink}
                alt="git hub project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="project-detail-title">{title}</p>
              </a>
            ) : (
              <p className="project-detail-title">{title}</p>
            )}
          </div>
          <p className="project-detail-desc">{description}</p>
          <p className="project-detail-tech">
            <strong>Tech used: </strong> {techUsed}
          </p>
        </span>
        <span className="project-screen-shot">
          {deployedURI ? (
            <a
              href={deployedURI}
              alt={`deployed version of ${title} `}
              target="_blank"
              rel="noopener noreferrer"
            >
              {detailImage(title)}
            </a>
          ) : (
            detailImage(title)
          )}
        </span>
      </span>
    </div>
  );
};

export default ProjectDetail;
