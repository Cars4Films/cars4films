import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <header className="relative flex items-center justify-center w-full h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/src/assets/videos/porsche.mp4" type="video/mp4" />
          {t('hero.videoFallback', 'Your browser does not support the video element.')}
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Cars4Films</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="#flota"
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-full hover:opacity-90 transition duration-300"
          >
            {t('hero.cta')}
          </a>
          <a
            href="#contacto"
            className="btn-secondary px-8 py-3 text-lg font-semibold rounded-full hover:bg-white hover:text-gray-900 transition duration-300"
          >
            {t('hero.contact')}
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#flota" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
