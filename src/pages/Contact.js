import React, { useState } from 'react';
import Plasma from '../components/Plasma';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Print data to console
    console.log('Form submitted with data:');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Message:', formData.message);
    
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Check if all fields are filled
  const isFormValid = formData.name.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.message.trim() !== '';

  return (
    <div className="relative min-h-screen bg-syntax-darker py-16">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-syntax-darker via-syntax-darkBlue/60 to-syntax-darker opacity-90" />
        <Plasma 
          color="#9370DB"
          speed={0.4}
          direction="forward"
          scale={1.4}
          opacity={0.6}
          mouseInteractive={false}
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
            Kontakt
          </h1>
          <div className="w-24 h-1 bg-syntax-mediumPurple mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto uppercase tracking-wider px-4">
            Get in Touch
          </p>
        </div>

        <div className="bg-syntax-darkBlue/40 backdrop-blur-sm border border-syntax-mediumPurple/30 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-syntax-darker/60 border border-syntax-mediumPurple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-syntax-mediumPurple focus:border-transparent transition-all"
                placeholder="Ihr Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Email Adresse
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-syntax-darker/60 border border-syntax-mediumPurple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-syntax-mediumPurple focus:border-transparent transition-all"
                placeholder="ihre.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-syntax-darker/60 border border-syntax-mediumPurple/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-syntax-mediumPurple focus:border-transparent transition-all resize-none"
                placeholder="Ihre Nachricht..."
              />
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 sm:py-4 px-6 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wider transition-all ${
                  isFormValid
                    ? 'bg-syntax-mediumPurple text-white hover:bg-syntax-lightPurple hover:shadow-lg hover:shadow-syntax-mediumPurple/50 cursor-pointer active:scale-95'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Absenden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

