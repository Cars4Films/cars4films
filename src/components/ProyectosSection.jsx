const ProyectosSection = () => {
  return (
    <section id="proyectos" className="py-20 bg-black">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-center mb-4">
          Proyectos realizados
        </h2>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
          Una selección de nuestros trabajos más destacados en cine, televisión
          y publicidad.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img
            src="/src/assets/img/carprosolutions.jpg"
            alt="Coche en una escena de publicidad"
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Película+X"
            alt="Coche deportivo en la calle"
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Comercial+Y"
            alt="Detalle del interior de un coche clásico"
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Serie+Z"
            alt="Vehículo técnico en una filmación"
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Vídeo+Musical"
            alt="Coche clásico con luces de neón"
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Cortometraje"
            alt="Coche en una escena de persecución"
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Fotografía"
            alt="Foto artística de un coche de lujo"
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
          <img
            src="https://placehold.co/600x400/374151/d1d5db?text=Evento"
            alt="Coche utilizado para un evento corporativo"
            className="rounded-lg w-full h-auto object-cover transform transition duration-300 hover:scale-105 shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ProyectosSection;
