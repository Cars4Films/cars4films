import { useTranslation } from "react-i18next";
import { carcare } from "@/assets";

const CarcareSection = () => {
  const { t } = useTranslation();

  return (
    <section id="carcare" className="py-20 bg-theme-main">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={carcare}
              alt={t("carcare.imageAlt", "Detail of a clean car")}
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">
              {t("carcare.title")}
            </h2>
            <p className="text-lg text-theme-muted mb-6">
              {t("carcare.description")}
            </p>
            <ul className="list-disc list-inside text-theme-muted space-y-2">
              <li>{t("carcare.services.cleaning")}</li>
              <li>{t("carcare.services.preparation")}</li>
              <li>{t("carcare.services.maintenance")}</li>
              <li>{t("carcare.services.repairs")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarcareSection;
