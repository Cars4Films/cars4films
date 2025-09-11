import VehicleCard from "./VehicleCard";

const FlotaSection = () => {
  return (
    <section id="flota" className="py-20 bg-black">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center mb-4">Nuestra Flota</h2>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Disponemos de una amplia flota de vehículos para todo tipo de
          producciones audiovisuales. Coches clásicos, deportivos, vehículos
          especiales y más.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta de Coches Clásicos */}
          <VehicleCard
            image="/src/assets/img/clasico.jpg"
            title="Coches Clásicos"
            description="Vehículos icónicos desde los años 50 hasta los 90 restaurados y en perfecto estado de funcionamiento."
          />

          {/* Tarjeta de Coches Deportivos */}
          <VehicleCard
            image="/src/assets/img/deportivo.jpeg"
            title="Coches Deportivos"
            description="Vehículos de altas prestaciones para secuencias de acción y persecución."
          />

          {/* Tarjeta de Vehículos Especiales */}
          <VehicleCard
            image="/src/assets/img/policia.jpg"
            title="Vehículos Especiales"
            description="Policía, bomberos, ambulancias y otros vehículos especiales para tus producciones."
          />
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-full hover:opacity-90 transition duration-300"
          >
            Solicita un vehículo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlotaSection;
