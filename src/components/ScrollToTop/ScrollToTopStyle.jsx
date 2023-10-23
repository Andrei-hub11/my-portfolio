import { motion } from "framer-motion";
import styled from "styled-components";

export const ScrollToTopButton = styled(motion.a)`
  z-index: 100;
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  height: 4rem;
  width: 4rem;
  bottom: ${({ $isVisible }) => ($isVisible ? "10rem" : "-100%")};
  right: 1.5rem;
  border-radius: 50%;
  background: #000;
  transition: 0.7s;
  cursor: pointer;
`;
