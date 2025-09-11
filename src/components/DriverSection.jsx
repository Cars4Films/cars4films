import { useTranslation } from "react-i18next";

const DriverSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="driver" className="py-20 bg-black">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="md:flex md:items-center md:space-x-12 flex-row-reverse">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/src/assets/img/precision2.png"
              alt={t('driver.imageAlt', 'Specialized driver in an action scene')}
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {t('driver.title')}
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              {t('driver.description')}
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>{t('driver.services.professional')}</li>
              <li>{t('driver.services.specialists')}</li>
              <li>{t('driver.services.coordination')}</li>
              <li>{t('driver.services.safety')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSection;
