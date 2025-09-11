const VehicleCard = ({
  image,
  title,
  description,
  type = "normal",
  className = "",
}) => {
  return (
    <div
      className={`bg-gray-900 rounded-2xl overflow-hidden shadow-xl p-6 text-center transform transition duration-300 hover:scale-105 hover:bg-gray-800 ${className}`}
    >
      <img
        className="rotating-image w-full h-32 object-cover rounded-lg mb-4"
        src={image}
        alt={title}
      />
      <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default VehicleCard;
