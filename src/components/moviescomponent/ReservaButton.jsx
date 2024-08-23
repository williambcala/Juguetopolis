import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ReservaButton = ({ movieId, isScheduleSelected, selectedSchedule }) => {
  const [alertMessage, setAlertMessage] = useState('');
  const navigate = useNavigate();

  const handleReservarClick = () => {
    if (!isScheduleSelected) {
      // Mostrar mensaje de error si no se ha seleccionado un horario
      setAlertMessage('Error: No ha seleccionado ningún horario');
      setTimeout(() => {
        setAlertMessage('');
      }, 2000);
    } else {
      // Navegar a la página de reserva si se ha seleccionado un horario
      navigate(`/movie/${movieId}/reserva/${selectedSchedule}`);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleReservarClick}
        className={`font-serif text-white bg-gradient-to-r from-red-500 via-red-700 to-red-600 hover:bg-gradient-to-br focus:outline-none dark:focus:ring-red-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2 
        ${!isScheduleSelected && 'cursor-not-allowed opacity-50'}`}>
        Reservar
      </button>
      {alertMessage && (
        <div className="fixed bottom-10 right-10 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
          {alertMessage}
        </div>
      )}
    </div>
  );
};


