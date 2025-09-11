import { useEffect } from "react";

const ImageRotator = () => {
  useEffect(() => {
    // Arrays of images for each vehicle type
    const images = {
      "Coches Clásicos": [
        "/src/assets/img/clasico.jpg",
        "/src/assets/img/clasico2.jpg",
        "/src/assets/img/clasico3.jpg",
        "/src/assets/img/clasico4.jpg",
        "/src/assets/img/clasico5.jpg",
      ],
      "Coches Deportivos": [
        "/src/assets/img/deportivo.jpeg",
        "/src/assets/img/deportivo2.jpg",
        "/src/assets/img/deportivo3.webp",
        "/src/assets/img/deportivo4.webp",
        "/src/assets/img/deportivo5.jpg",
      ],
      "Vehículos Especiales": [
        "/src/assets/img/policia.jpg",
        "/src/assets/img/policia2.jpg",
        "/src/assets/img/policia3.jpg",
        "/src/assets/img/policia4.jpg",
        "/src/assets/img/camion-bomberos-preventivos-3.jpg",
      ],
      "Camaracar en acción": ["/src/assets/img/camaracar.jpg"],
      "Plataforma de Low Loader": ["/src/assets/img/lowloader.jpg"],
      "Vehículo de asistencia en el set": ["/src/assets/img/furgo.jpg"],
      "Moto en una escena de acción": ["/src/assets/img/motocam.jpg"],
    };

    // Map alt text to image keys
    const altToKeyMap = {
      "Camaracar en acción": "Camaracar",
      "Plataforma de Low Loader": "Low Loader",
      "Vehículo de asistencia en el set": "Asistencia",
      "Moto en una escena de acción": "Moto",
    };

    const imageElements = document.querySelectorAll(".rotating-image");
    const intervalIds = [];

    imageElements.forEach((img) => {
      // Try to use alt directly as key. If not found, use the key map
      const key = images[img.alt.trim()]
        ? img.alt.trim()
        : altToKeyMap[img.alt.trim()];

      if (key && images[key] && images[key].length > 0) {
        let currentImageIndex = 0;
        const intervalId = setInterval(() => {
          currentImageIndex = (currentImageIndex + 1) % images[key].length;
          img.src = images[key][currentImageIndex];
        }, 3000); // Change image every 3 seconds
        intervalIds.push(intervalId);
      }
    });

    // Cleanup function to clear intervals when component unmounts
    return () => {
      intervalIds.forEach((id) => clearInterval(id));
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ImageRotator;
