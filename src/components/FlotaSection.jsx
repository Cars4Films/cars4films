import { useTranslation } from "react-i18next";
import VehicleCard from "./VehicleCard";

const FlotaSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="flota" className="py-20 bg-black">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center mb-4">{t('flota.title')}</h2>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          {t('flota.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Classic Cars Card */}
          <VehicleCard
            image="/src/assets/img/clasico.jpg"
            titleKey="flota.clasicos.title"
            descriptionKey="flota.clasicos.description"
          />

          {/* Sports Cars Card */}
          <VehicleCard
            image="/src/assets/img/deportivo.jpeg"
            titleKey="flota.deportivos.title"
            descriptionKey="flota.deportivos.description"
          />

          {/* Special Vehicles Card */}
          <VehicleCard
            image="/src/assets/img/policia.jpg"
            titleKey="flota.especiales.title"
            descriptionKey="flota.especiales.description"
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-full hover:opacity-90 transition duration-300"
          >
            {t('flota.requestCta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlotaSection;
