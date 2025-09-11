import { useTranslation } from "react-i18next";

const VehicleCard = ({
  image,
  title,
  description,
  titleKey,
  descriptionKey,
  className = "",
}) => {
  const { t } = useTranslation();
  
  // Use translation keys if provided, otherwise use direct text
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayDescription = descriptionKey ? t(descriptionKey) : description;
  
  return (
    <div
      className={`bg-gray-900 rounded-2xl overflow-hidden shadow-xl p-6 text-center transform transition duration-300 hover:scale-105 hover:bg-gray-800 ${className}`}
    >
      <img
        className="rotating-image w-full h-32 object-cover rounded-lg mb-4"
        src={image}
        alt={displayTitle}
      />
      <h3 className="text-2xl font-semibold mb-2 text-white">{displayTitle}</h3>
      <p className="text-gray-400">{displayDescription}</p>
    </div>
  );
};

export default VehicleCard;
