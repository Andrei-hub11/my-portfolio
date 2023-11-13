/* import { useState } from "react"; */
import { lazy } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./utils/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/Navbar";
import useColorScheme from "./utils/customHooks/useColorScheme";
import { lightTheme, darkTheme } from "./components/Theme/Theme";

import About from "./components/About/About";
import Services from "./components/Services/Services";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Use a função lazy junto com import dinâmico
const LazyToastContainer = lazy(async () => {
  // Aguarde o carregamento assíncrono do módulo 'react-toastify'
  const { ToastContainer } = await import("react-toastify");
  // Retorne o componente ToastContainer como padrão
  return { default: ToastContainer };
});

function App() {
  const [colorScheme, toggleColorScheme] = useColorScheme();

  const theme = colorScheme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Navbar onClick={toggleColorScheme} />
        <About />
        <Services />
        <ProjectsList />
        <ContactUs />
        {/*  <NewsletterSubscription /> */}
        <Footer />
        <ScrollToTop />
      </>
      <LazyToastContainer />
    </ThemeProvider>
  );
}

export default App;

