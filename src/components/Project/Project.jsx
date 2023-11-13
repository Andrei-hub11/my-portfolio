import PropTypes from "prop-types";

import { ProjectBox, ProjectImage, ProjectText } from "./ProjectStyle";
import Button from "../Button/Button";
import GithubIcon from "../../images/bxl-github.svg";
import SocialIcon from "../SocialIcon/SocialIcon";

function Project({ project, onClick }) {
  const variants = {
    initial: { opacity: 0, y: -100 },
    hover: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      y: [-70, -50, -20, -10, -5, 0],
      transition: { duration: 1.5, delay: 0.5 },
    },
    exit: {
      opacity: 0,
      y: [-10, -20, -50, -60, -80, -100],
      transition: { duration: 1 },
    },
  };
  return (
    <ProjectBox whileInView="hover" initial="initial" variants={variants}>
      <ProjectImage
        srcSet={project.srcSet}
        src={project.imageUrl}
        alt={project.title}
      />
      <ProjectText>{project.title}</ProjectText>

      <Button
        onClick={() => {
          onClick(project.githubLink);
        }}
      >
        GitHub
        <SocialIcon
          src={GithubIcon}
          alt={`icon-link ${project.githubLink}`}
          width="15"
          height="15"
        />
      </Button>
    </ProjectBox>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    srcSet: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Project;
