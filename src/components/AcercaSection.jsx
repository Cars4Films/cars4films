const AcercaSection = () => {
  return (
    <section id="acerca" className="py-20 bg-black">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/src/assets/img/marcos.png"
              alt="Imagen de un coche clásico"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Cars4Films nació de la pasión por los coches y el cine. Entendimos
              que un vehículo puede ser mucho más que un medio de transporte;
              puede ser un personaje, una pieza clave en la narrativa de una
              película. Por eso, nos dedicamos a gestionar una colección de
              vehículos que tienen la personalidad y el carisma para destacar en
              la gran pantalla.
            </p>
            <p className="text-lg text-gray-400">
              Nuestro equipo de expertos te ayudará a encontrar el vehículo
              perfecto para tu visión artística, asegurando que cada detalle sea
              impecable, desde la estética hasta la logística.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaSection;
