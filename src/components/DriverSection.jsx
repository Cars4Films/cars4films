const DriverSection = () => {
  return (
    <section id="driver" className="py-20 bg-black">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="md:flex md:items-center md:space-x-12 flex-row-reverse">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/src/assets/img/precision2.png"
              alt="Conductor especializado en una escena de acción"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Precision Drivers
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Nuestro equipo de conductores especializados cuenta con amplia
              experiencia en escenas de acción y maniobras de precisión.
              Coordinamos secuencias completas de conducción para que cada toma
              sea perfecta y segura.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>
                Conductores profesionales con experiencia en producciones
                internacionales.
              </li>
              <li>Especialistas en derrapes, persecuciones y maniobras</li>
              <li>Coordinación de secuencias complejas de conducción.</li>
              <li>Máxima seguridad en todas las maniobras.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSection;
