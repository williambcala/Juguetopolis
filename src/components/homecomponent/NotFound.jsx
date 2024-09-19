import React from 'react';

const NotFound = () => {
    const fundaciones = [
        {
            nombre: 'Fundación Jera',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSbrzhH5p7hxMDG_dNfRcaI9gvjMD3gvUlg&s',
            descripcion: 'Tu donación nos ayuda a seguir llevando atención integral a los niños-as entre 0 a 5 años, a los escolares y adolescentes.'
        },
        {
            nombre: 'Fundación Chiquitines',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUK9Wgp8ryabBEx2sfcwvRIesTikFmYPguA&s',
            descripcion: 'Sabemos que al fortalecer a las familias como primera red, estamos protegiendo a las niñas y los niños. Por ello, apoyamos a más de 90 familias en las comunidades de El Chontaduro y Las Palmas en Cali, Colombia.'
        },
        {
            nombre: 'Casita de Belén',
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwAwAq1djKSq8SGBVhcJURp5nVLzkDDfaZQ&s',
            descripcion: 'Fortalecemos proyectos de vida de niños, niñas y familias en situación de riesgo, para que logren desarrollar sus potencialidades y se conviertan en agentes multiplicadores del cambio en sus comunidades.'
        }
        // Puedes añadir más fundaciones aquí.
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Fundaciones Aliadas</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {fundaciones.map((fundacion, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                        <img src={fundacion.imagen} alt={fundacion.nombre} className="w-full h-40 object-cover rounded-t-lg mb-4" />
                        <h2 className="text-xl font-semibold">{fundacion.nombre}</h2>
                        <p className="text-gray-700">{fundacion.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotFound;
