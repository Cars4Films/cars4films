import VehicleCard from "./VehicleCard";

const TecnicosSection = () => {
  return (
    <section id="tecnicos" className="py-20 bg-black">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center mb-4">
          Vehículos Técnicos
        </h2>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Vehículos de producción especializados para capturar la toma perfecta.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Tarjeta de Camaracar */}
          <VehicleCard
            image="/src/assets/img/camaracar.jpg"
            title="Camaracar"
            description="Vehículos de alta potencia y estabilidad para tomas de persecución y seguimiento."
          />

          {/* Tarjeta de Low Loader */}
          <VehicleCard
            image="/src/assets/img/lowloader.jpg"
            title="Low Loader"
            description="Plataformas de transporte de perfil bajo para mover coches de forma segura en el set."
          />

          {/* Tarjeta de Vehículos de Asistencia */}
          <VehicleCard
            image="/src/assets/img/furgo.jpg"
            title="Vehículos de Asistencia"
            description="Furgonetas y camiones equipados para cubrir cualquier necesidad técnica en el set."
          />

          {/* Tarjeta de Motos */}
          <VehicleCard
            image="/src/assets/img/motocam.jpg"
            title="Motos"
            description="Moto electrica para escenas de acción ágiles o tomas urbanas que exigen velocidad y maniobrabilidad."
          />
        </div>
      </div>
    </section>
  );
};

export default TecnicosSection;
