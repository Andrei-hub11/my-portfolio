import Project from "../Project/Project";
import {
  ProjectsContainer,
  ProjectsSection,
  ProjectsTitle,
} from "./ProjectsListStyles";

import Project2 from "../../images/project-image-2.jpg";
import Project3 from "../../images/project-image-3.jpg";
import Project4 from "../../images/project-image-4.jpg";

const projectsData = [
  {
    title: "Um quiz, jogo de perguntas",
    imageUrl: Project2,
    githubLink: "link-para-o-github-do-segundo-projeto",
  },
  {
    title: "aplicativo de contatos",
    imageUrl: Project3,
    githubLink: "link-para-o-github-do-terceiro-projeto",
  },
  {
    title: "Site responsivo de uma pizzaria",
    imageUrl: Project4,
    githubLink: "link-para-o-github-do-quarto-projeto",
  },
];

const ProjectsList = () => {
  const titleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      transition: { duration: 1, delay: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  return (
    <ProjectsSection>
      <ProjectsTitle
        whileInView="animate"
        initial="initial"
        variants={titleVariants}
      >
        Projetos
      </ProjectsTitle>
      <ProjectsContainer>
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectsList;
