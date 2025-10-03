import { useTranslation } from "react-i18next";
import VehicleCard from "@/components/VehicleCard";
import { camaracar, lowloader, furgo, motocam } from "@/assets";

const TecnicosSection = () => {
  const { t } = useTranslation();

  return (
    <section id="tecnicos" className="py-20 bg-theme-main">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center mb-4 text-theme-primary">
          {t("tecnicos.title")}
        </h2>
        <p className="text-center text-lg text-theme-muted mb-12 max-w-3xl mx-auto">
          {t("tecnicos.description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Camaracar Card */}
          <VehicleCard
            image={camaracar}
            titleKey="tecnicos.camaracar.title"
            descriptionKey="tecnicos.camaracar.description"
          />

          {/* Low Loader Card */}
          <VehicleCard
            image={lowloader}
            titleKey="tecnicos.lowloader.title"
            descriptionKey="tecnicos.lowloader.description"
          />

          {/* Support Vehicles Card */}
          <VehicleCard
            image={furgo}
            titleKey="tecnicos.asistencia.title"
            descriptionKey="tecnicos.asistencia.description"
          />

          {/* Motorcycles Card */}
          <VehicleCard
            image={motocam}
            titleKey="tecnicos.motos.title"
            descriptionKey="tecnicos.motos.description"
          />
        </div>
      </div>
    </section>
  );
};

export default TecnicosSection;
