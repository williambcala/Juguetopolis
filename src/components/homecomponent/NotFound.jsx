import React, { useState } from 'react';
import { Modal, Button } from 'flowbite-react'; // O cualquier librería de modal que prefieras

const NotFound = () => {
    const fundaciones = [
        {
            nombre: 'Fundación Jera',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSbrzhH5p7hxMDG_dNfRcaI9gvjMD3gvUlg&s',
            descripcion: 'Tu donación nos ayuda a seguir llevando atención integral a los niños-as entre 0 a 5 años, a los escolares y adolescentes.',
            contacto: {
                direccion: 'Calle 45 #10-20, Bogotá, Colombia',
                telefono: '+57 310 123 4567',
                correo: 'contacto@fundacionjera.org'
            }
        },
        {
            nombre: 'Fundación Chiquitines',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUK9Wgp8ryabBEx2sfcwvRIesTikFmYPguA&s',
            descripcion: 'Sabemos que al fortalecer a las familias como primera red, estamos protegiendo a las niñas y los niños. Por ello, apoyamos a más de 90 familias en las comunidades de El Chontaduro y Las Palmas en Cali, Colombia.',
            contacto: {
                direccion: 'Carrera 25 #30-50, Cali, Colombia',
                telefono: '+57 315 654 7890',
                correo: 'info@fundacionchiquitines.com'
            }
        },
        {
            nombre: 'Casita de Belén',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwAwAq1djKSq8SGBVhcJURp5nVLzkDDfaZQ&s',
            descripcion: 'Fortalecemos proyectos de vida de niños, niñas y familias en situación de riesgo, para que logren desarrollar sus potencialidades y se conviertan en agentes multiplicadores del cambio en sus comunidades.',
            contacto: {
                direccion: 'Calle 15 #5-60, Medellín, Colombia',
                telefono: '+57 301 789 4561',
                correo: 'info@casitadebelen.org'
            }
        }
    ];

    const [selectedFundacion, setSelectedFundacion] = useState(null);

    const handleModalOpen = (fundacion) => {
        setSelectedFundacion(fundacion);
    };

    const handleModalClose = () => {
        setSelectedFundacion(null);
    };

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-4">Fundaciones Aliadas</h1>
            <p className="text-center text-gray-600 mb-8">Haz clic en una fundación para ver más información de contacto.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {fundaciones.map((fundacion, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-4 cursor-pointer"
                        onClick={() => handleModalOpen(fundacion)}
                    >
                        <img
                            src={fundacion.imagen}
                            alt={fundacion.nombre}
                            className="w-full h-40 object-cover rounded-t-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold">{fundacion.nombre}</h2>
                        <p className="text-gray-700">{fundacion.descripcion}</p>
                        <p className="text-blue-500 mt-2">Haz clic para ver más información</p> {/* Indicador */}
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedFundacion && (
                <Modal show={!!selectedFundacion} onClose={handleModalClose}>
                    <Modal.Header>{selectedFundacion.nombre}</Modal.Header>
                    <Modal.Body>
                        <p><strong>Dirección:</strong> {selectedFundacion.contacto.direccion}</p>
                        <p><strong>Teléfono:</strong> {selectedFundacion.contacto.telefono}</p>
                        <p><strong>Correo electrónico:</strong> {selectedFundacion.contacto.correo}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleModalClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default NotFound;
