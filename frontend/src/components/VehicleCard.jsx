import { useTranslation } from "react-i18next";

const VehicleCard = ({
  image,
  title,
  description,
  titleKey,
  descriptionKey,
  type = "normal",
  className = "",
}) => {
  const { t } = useTranslation();

  // Use translation keys if provided, otherwise use direct text
  const displayTitle = titleKey ? t(titleKey) : title;
  const displayDescription = descriptionKey ? t(descriptionKey) : description;

  // Determine image height based on type
  const imageHeight = type === "big" ? "h-48" : "h-32";

  return (
    <div
      className={`bg-theme-component rounded-2xl overflow-hidden shadow-xl p-6 text-center transform transition duration-300 hover:scale-105 hover:bg-theme-tertiary ${className}`}
    >
      <img
        className={`rotating-image w-full ${imageHeight} object-cover rounded-lg mb-4`}
        src={image}
        alt={displayTitle}
      />
      <h3 className="text-2xl font-semibold mb-2 text-theme-primary">
        {displayTitle}
      </h3>
      <p className="text-theme-muted">{displayDescription}</p>
    </div>
  );
};

export default VehicleCard;
