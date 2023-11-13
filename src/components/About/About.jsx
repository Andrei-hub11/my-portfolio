import {
  AboutBoxPrimary,
  AboutBoxSecondary,
  AboutIcon,
  AboutImage,
  AboutSection,
  AboutText,
  AboutTextStory,
  MainBox,
} from "./AboutStyle";

import aboutImage from "../../images/cardImage.webp";
import DownloadIcon from "../../images/download.svg";
import Button from "../Button/Button";
import pdf from "../../utils/curriculo.pdf";

function About() {
  const handleDownloadPDF = () => {
    let pdfURL = pdf;

    let link = document.createElement("a");
    link.href = pdfURL;

    // Define o atributo "download" para o nome do arquivo
    link.download = "curriculo-andrei.pdf";

    // Simula um clique no link para iniciar o download
    link.click();
  };

  const variantPrimaryAbout = {
    initial: { opacity: 0, x: -100 },
    hover: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      x: [-70, -50, -20, -10, -5, 0],
      transition: { duration: 1, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      x: [-10, -20, -50, -60, -80, -100],
      transition: { duration: 1 },
    },
  };

  const variantAbout = {
    initial: { opacity: 0, x: 100 },
    hover: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      x: [70, 50, 20, 10, 5, 0],
      transition: { duration: 1, delay: 0.2 },
    },
    exit: {
      opacity: 0,
      x: [10, 20, 50, 60, 80, 100],
      transition: { duration: 1 },
    },
  };

  return (
    <AboutSection id="Sobre">
      <MainBox>
        <AboutBoxPrimary
          whileInView="hover"
          initial="initial"
          variants={variantPrimaryAbout}
        >
          <AboutImage
            src={aboutImage}
            alt="imagem-sobre"
            width="300"
            height="300"
          />
        </AboutBoxPrimary>

        <AboutBoxSecondary
          whileInView="hover"
          initial="initial"
          variants={variantAbout}
        >
          <AboutText>Sobre mim</AboutText>
          <AboutTextStory>
            Um entusiasta do mundo digital apaixonado por transformar ideias em
            realidade digital. Embora eu ainda não tenha experiência
            profissional, minhas habilidades em JavaScript, CSS/SCSS, HTML,
            React, Express e MongoDB me capacitam para criar aplicações web
            cativantes. Também tenho conhecimento básico em Docker e Figma, o
            que amplia minha versatilidade. Estou ansioso para iniciar minha
            jornada profissional e estou comprometido em entregar resultados de
            alta qualidade para cada projeto que assumo. Vamos trabalhar juntos
            para criar algo incrível!
          </AboutTextStory>
          <Button onClick={handleDownloadPDF} $primary={true}>
            Download CV
            <AboutIcon src={DownloadIcon} alt="downloadCv-icon" />
          </Button>
        </AboutBoxSecondary>
      </MainBox>
    </AboutSection>
  );
}

export default About;
