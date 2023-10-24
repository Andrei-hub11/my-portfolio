import { lazy } from "react";
/* import Project from "../Project/Project"; */
import {
  ProjectsContainer,
  ProjectsSection,
  ProjectsTitle,
} from "./ProjectsListStyles";

const Project = lazy(() => import("../Project/Project"));

import Project1 from "../../images/project-image-1.jpg";
import Project2 from "../../images/project-image-2.png";
import Project3 from "../../images/project-image-3.jpg";
import useRedirect from "../../utils/customHooks/useRedirect";

const projectsData = [
  {
    title: "Um app de troca de mensagens",
    imageUrl: Project1,
    githubLink: "https://github.com/Andrei-hub11/chat-project",
  },
  {
    title: "ui de um pagina de registro e login",
    imageUrl: Project2,
    githubLink: "https://github.com/Andrei-hub11/login-page",
  },
  {
    title: "app de lista de contatos",
    imageUrl: Project3,
    githubLink: "https://github.com/Andrei-hub11/project-react",
  },
];

const ProjectsList = () => {
  const { onRedirect } = useRedirect();

  const handleRedirect = (url) => {
    onRedirect(url);
  };

  const titleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      transition: { duration: 1, delay: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  return (
    <ProjectsSection id="Projetos">
      <ProjectsTitle
        whileInView="animate"
        initial="initial"
        variants={titleVariants}
      >
        Projetos
      </ProjectsTitle>
      <ProjectsContainer>
        {projectsData.map((project, index) => (
          <Project key={index} project={project} onClick={handleRedirect} />
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default ProjectsList;
