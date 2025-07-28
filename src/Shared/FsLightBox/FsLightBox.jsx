/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const FsLightboxPortal = ({ children }) => {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const lightboxRoot = document.getElementById("lightbox-root");
    if (lightboxRoot) {
      setContainer(lightboxRoot);
    }
  }, []);

  if (!container) return null;

  return createPortal(children, container);
};

export default FsLightboxPortal;
