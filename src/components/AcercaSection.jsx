import { useTranslation } from "react-i18next";
import { marcos } from "@/assets";

const AcercaSection = () => {
  const { t } = useTranslation();

  return (
    <section id="acerca" className="py-20 bg-theme-main">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={marcos}
              alt={t("acerca.imageAlt", "Classic car image")}
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">
              {t("acerca.title")}
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              {t("acerca.paragraph1")}
            </p>
            <p className="text-lg text-gray-400">{t("acerca.paragraph2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaSection;
