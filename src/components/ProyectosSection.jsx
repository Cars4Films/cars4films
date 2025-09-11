import { useTranslation } from "react-i18next";

const ProyectosSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="proyectos" className="py-20 bg-black">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center mb-4">
          {t('proyectos.title')}
        </h2>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          {t('proyectos.description')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="/src/assets/img/carprosolutions.jpg"
            alt={t('proyectos.image1Alt', 'Car in an advertising scene')}
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Película+X"
            alt={t('proyectos.image2Alt', 'Sports car on the street')}
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Comercial+Y"
            alt={t('proyectos.image3Alt', 'Detail of a classic car interior')}
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Serie+Z"
            alt={t('proyectos.image4Alt', 'Technical vehicle during filming')}
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Vídeo+Musical"
            alt={t('proyectos.image5Alt', 'Classic car with neon lights')}
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Cortometraje"
            alt={t('proyectos.image6Alt', 'Car in a chase scene')}
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Fotografía"
            alt={t('proyectos.image7Alt', 'Artistic photo of a luxury car')}
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Evento"
            alt={t('proyectos.image8Alt', 'Car used for a corporate event')}
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ProyectosSection;
