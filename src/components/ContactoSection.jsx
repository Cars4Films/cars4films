import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactoSection = () => {
  const { t } = useTranslation();
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
    <section id="contacto" className="py-20 bg-theme-secondary">
      <div className="container mx-auto px-4 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-theme-primary">
            {t('contacto.title')}
          </h2>
          <p className="text-center text-lg text-theme-muted mb-12">
            {t('contacto.description')}
          </p>

          <div className="bg-theme-tertiary rounded-2xl p-8 shadow-xl">
            {formSubmitted ? (
              <div className="bg-green-800 text-theme-primary p-4 rounded-lg mb-6 animate-fade-in transition-all">
                {t('contacto.successMessage')}
              </div>
            ) : null}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-theme-muted mb-2">
                    {t('contacto.nameLabel')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-theme-secondary border border-gray-600 text-theme-primary rounded-lg p-3 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-theme-muted mb-2">
                    {t('contacto.emailLabel')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-theme-secondary border border-gray-600 text-theme-primary rounded-lg p-3 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-theme-muted mb-2">
                  {t('contacto.messageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-theme-secondary border border-gray-600 text-theme-primary rounded-lg p-3 focus:outline-none focus:border-blue-500"
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
                  {isSubmitting ? t('contacto.sending') : t('contacto.submit')}
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
