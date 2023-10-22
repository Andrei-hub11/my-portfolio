import { useCallback } from "react";

const SOCIAL_MEDIA_URLS = {
  facebook: "https://www.facebook.com",
  twitter: "https://www.twitter.com",
  // Adicione outras redes sociais e URLs aqui
};

function useSocialRedirect() {
  const onRedirect = useCallback((socialMedia) => {
    const url = SOCIAL_MEDIA_URLS[socialMedia];
    if (url) {
      /*  window.location.href = url; */
      window.open(url, "_blank");
    }
  }, []);

  return {
    onRedirect,
  };
}

export default useSocialRedirect;
