/* import React from "react"; */

import {
  ServiceCard,
  ServiceCardTitle,
  ServicesContainer,
  ServicesSection,
  ServicesTitle,
  ServiceCardText,
  ServiceCardList,
  ServiceCardListContainer,
  ServiceCardIcon,
  ServiceCardDescription,
} from "./ServicesStyles";

import FeatureIcon from "../../images//bx-check.svg";

const serviceData = [
  {
    title: "Ui/Ux",
    features: [
      "Criação de um design visual atraente e responsivo.",
      "Criação de wireframes para planejar a estrutura e a usabilidade do site.",
    ],
  },
  {
    title: "Desenvolvimento Web",
    features: [
      "Design de interface de usuário (UI) em código React.",
      "Integração de APIs para acessar dados ou funcionalidades de outras plataformas.",
      "Autenticação de usuários, gerenciamento de conteúdo e processamento de formulários.",
      "Configuração do ambiente de hospedagem para acomodar seu site.",
    ],
  },
];

function Services() {
  const titleVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.3, 0.5, 0.7, 1],
      transition: { duration: 1, delay: 0.2 },
    },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const variants = [
    {
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
    },
    {
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
    },
  ];
  return (
    <ServicesSection>
      <ServicesTitle
        whileInView="animate"
        initial="initial"
        variants={titleVariants}
      >
        Serviços
      </ServicesTitle>
      <ServicesContainer>
        {serviceData.map((service, serviceIndex) => {
          return (
            <ServiceCard
              key={serviceIndex}
              whileInView="hover"
              initial="initial"
              variants={variants[serviceIndex]}
            >
              <ServiceCardTitle>
                <ServiceCardText>{service.title}</ServiceCardText>
              </ServiceCardTitle>
              <ServiceCardList>
                {service.features.map((feature) => {
                  return (
                    <ServiceCardListContainer key={feature}>
                      <ServiceCardIcon src={FeatureIcon} />

                      <ServiceCardDescription>{feature}</ServiceCardDescription>
                    </ServiceCardListContainer>
                  );
                })}
              </ServiceCardList>
            </ServiceCard>
          );
        })}
      </ServicesContainer>
    </ServicesSection>
  );
}

export default Services;
