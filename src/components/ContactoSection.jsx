import { useState } from "react";

const ContactoSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Hide the success message after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Contacta con Nosotros
          </h2>
          <p className="text-center text-lg text-gray-400 mb-12">
            Cuéntanos qué necesitas para tu producción y te ayudaremos a
            encontrar los vehículos perfectos.
          </p>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            {formSubmitted ? (
              <div className="bg-green-800 text-white p-4 rounded-lg mb-6 animate-fade-in transition-all">
                ¡Gracias por contactarnos! Responderemos a tu mensaje lo antes
                posible.
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg p-3 focus:outline-none focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary px-8 py-3 text-lg font-semibold rounded-full hover:opacity-90 transition duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
