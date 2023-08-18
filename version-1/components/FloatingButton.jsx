"use client"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp as fabWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FloatingButton = () => {
  const [showContactInfo, setShowContactInfo] = useState(false);

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo);
  };

  return (
    <div className="fixed bottom-10 right-10 sm:right-5 md:right-10 lg:right-20">
      <button
        className="bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-md flex items-center justify-center text-white transition duration-300 transform hover:scale-110"
        style={{ width: '50px', height: '50px' }}
        onClick={toggleContactInfo}
      >
        <FontAwesomeIcon icon={fabWhatsapp} className="h-8" />
      </button>
      {showContactInfo && (
        <div className="bg-white p-6 rounded-lg shadow-lg absolute bottom-20 right-2 sm:right-5 md:right-10 lg:right-20 transform translate-x-8">
          <div className="flex items-center mb-6">
            <FontAwesomeIcon icon={faUserTie} className="text-gray-600 text-2xl mr-3" />
            <div>
              <p className="text-gray-800 text-lg font-semibold">
                ¡Contáctanos para una atención personalizada!
              </p>
              <p className="text-gray-600">
                Nuestro equipo de ejecutivos de ventas está listo para ayudarte con cualquier consulta o cotización que necesites. ¡Estamos comprometidos a brindarte la mejor calidad y servicio!
              </p>
            </div>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=56991063170&text=Hola,%20estoy%20interesado%20en%20una%20cotización"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 rounded-md py-2 px-5 md:px-10 lg:px-20 flex items-center justify-center text-white text-center transition duration-300 font-semibold"
          >
            <span>¡Contáctanos!</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
