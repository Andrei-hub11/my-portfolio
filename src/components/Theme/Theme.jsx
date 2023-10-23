import contactImage1 from "../../images/imageformContact-corlight.jpg";
import contactImage2 from "../../images/imageformContact-corblack.jpg";

export const lightTheme = {
  colors: {
    principal: "#54c627",
    secundaria: "#86dc57",
    texto: "rgba(0, 0, 0, 1)",
    clara: "#fff",
    textoSecundaria: "#fff",
    fundoScroll: "#fff",
    logo: "rgba(0, 0, 0, 0.4)",
    scroll: "#085f07",
    btn_primario: "#54c627",
    btn_secundario: "#fff",
  },
  fonts: ["Raleway, sans-serif", "Dosis, sans-serif"],
  background: {
    body: "#fff",
  },
  gradients: {
    cor1: "hsl(var(--hue-1), 100%, 95.5%)",
    cor1Gradient: "hsl(159, 68%, 35%, 0.65)",
    cor2Gradient: "hsl(142, 89%, 78%, 0.65)",
    cor1Secundaria: "#56ab2f",
    cor2Secundaria: "#a8e063",
  },
  iconColors: {
    primary:
      "invert(57%) sepia(100%) saturate(336%) hue-rotate(58deg) brightness(91%) contrast(104%)",
    light:
      "invert(57%) sepia(100%) saturate(336%) hue-rotate(58deg) brightness(91%) contrast(104%)",
    lightSecundaria:
      "invert(100%) sepia(0%) saturate(5924%) hue-rotate(108deg) brightness(103%) contrast(103%)",
    lightTerciaria:
      "invert(15%) sepia(74%) saturate(6878%) hue-rotate(358deg) brightness(102%) contrast(114%)",
    success:
      "invert(99%) sepia(0%) saturate(7494%) hue-rotate(211deg) brightness(103%) contrast(100%)",
  },
  headingColor: "hsl(var(--hue-1), 61%, 24%)",
  images: {
    form: contactImage1,
    // svgFooter: "url(/images/wave.svg)",
  },
  breakPoints: {
    smallerPhone: "599px",
    phoneOnly: "600px",
    tabletPortraitUp: "786px",
    tabletLandscapeUp: "900px",
    desktopUp: "1200px",
    bigDesktopUp: "1800px",
  },
  fontSize: {
    sPhone: [1.2, 2, 3],
    tabletPortraitUp: [1.5, 2, 3],
    tabletLandscapeUp: [1.5, 2, 3.5],
    desktopUp: [1.6, 2.3, 3.5],
    bigDesktopUp: [1.7, 3, 4],
  },
};

export const darkTheme = {
  colors: {
    principal: "#091a7a",
    secundaria: "#1939b7",
    texto: "rgba(255, 255, 255, 0.8)",
    clara: "#fff",
    textoSecundaria: "#fff",
    fundoScroll: "#10121e",
    logo: "#fff",
    scroll: "#5a5f7b",
    btn_primario: "#091a7a",
    btn_secundario: "#fff",
  },
  fonts: ["Raleway, sans-serif", "Dosis, sans-serif"],
  background: {
    body: "#171924",
  },
  gradients: {
    cor1: "hsl(var(--hue-1), 21%, 11%)",
    cor1Gradient: "hsl(222, 43%, 51%, 0.65)",
    cor2Gradient: "hsl(220, 50%, 19%, 0.65)",
    cor1Secundaria: "#000428",
    cor2Secundaria: "#004e92",
  },
  iconColors: {
    primary:
      "invert(19%) sepia(91%) saturate(2480%) hue-rotate(224deg) brightness(83%) contrast(104%)",
    light:
      "invert(11%) sepia(31%) saturate(7104%) hue-rotate(224deg) brightness(97%) contrast(104%)",
    lightSecundaria:
      "invert(100%) sepia(0%) saturate(5924%) hue-rotate(108deg) brightness(103%) contrast(103%)",
    lightTerciaria:
      "invert(15%) sepia(74%) saturate(6878%) hue-rotate(358deg) brightness(102%) contrast(114%)",
    success:
      "invert(57%) sepia(100%) saturate(336%) hue-rotate(58deg) brightness(91%) contrast(104%)",
  },
  headingColor: "hsl(var(--hue-1), 61%, 24%)",
  images: {
    form: contactImage2,
    // svgFooter: "url(/images/wave2.svg)",
  },
  breakPoints: {
    smallerPhone: "599px",
    phoneOnly: "600px",
    tabletPortraitUp: "786px",
    tabletLandscapeUp: "900px",
    desktopUp: "1200px",
    bigDesktopUp: "1800px",
  },
  fontSize: {
    sPhone: [1.2, 2, 3],
    tabletPortraitUp: [1.5, 2, 3],
    tabletLandscapeUp: [1.5, 2, 3.5],
    desktopUp: [1.6, 2.3, 3.5],
    bigDesktopUp: [1.7, 3, 4],
  },
};
