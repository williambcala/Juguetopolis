import React from 'react'
import { ReservaButton } from './ReservaButton'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export const SolicitudHorario = () => {
    const location = useLocation()
    const { schedule, movieId } = location.state

    console.log('disponibilidad', schedule)
    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const handleScheduleSelection = (horarioSeleccionado) => {
        setSelectedSchedule(horarioSeleccionado.horarioNum);
        };

        
  return (
    <>   
        <button data-modal-target="static-modal" data-modal-toggle="static-modal" className="font-serif text-black bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-500 hover:bg-gradient-to-br  focus:outline-none  dark:focus:ring-red-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2" 
        type="button"onClick={openModal}>
         Reservar
      </button>

      {isModalOpen && (
        <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Juguetes Disponibles
              </h3>

              <button type="button" className="text-gray-400 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                onClick={closeModal}>
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <ul className="space-y-4 text-sm">
                {schedule.map((horario, index) => (
                  <li key={index}>
                    <label className="flex items-center">
                      <input type="radio" className="form-radio text-red-500 mr-2"
                        checked={selectedSchedule === horario.horarioNum}
                        onChange={() => handleScheduleSelection(horario)}
                      />
                      <span className="text-gray-700"> {horario.horarioNum}</span>
                    </label>
                    <hr className="my-2 border-gray-200" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end mt-4">
              
            <ReservaButton movieId={movieId} selectedSchedule={selectedSchedule} isScheduleSelected={!!selectedSchedule} />
              <button type="button" className="font-serif text-white bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg font-medium text-base px-5 py-2.5 text-center me-2 mb-2"
                onClick={closeModal}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      
      </>
  )
}

