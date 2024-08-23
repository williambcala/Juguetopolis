import React from 'react';
import { Link } from 'react-router-dom';

const CardCategories = ({ title, description, imgSrc, icon: Icon }) => {
    return (
        <div className="max-w-sm relative">
            <Link to={`/categoria/${title}`} className="block">
                <div className="w-full h-96 relative rounded-2xl shadow-lg overflow-hidden"
                    style={{ margin: "60px" }}>
                    {/* Imagen de fondo */}
                    <div
                        style={{ backgroundImage: `url(${imgSrc})` }}
                        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center filter brightness-50"
                    ></div>
                    {/* Contenido de la card */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-normal text-gray-200">{description}</p>
                    </div>
                    {/* Icono en el centro */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <Icon className="text-white text-6xl mb-2" />
                        <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default CardCategories;
