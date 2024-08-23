import React from 'react';
import { Link } from 'react-router-dom';


export const SuggestionsCards = ({ suggestions }) => {
    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Juguetes Sugeridos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {suggestions.map((suggestion) => (
                    <div key={suggestion.id} className="card bg-white rounded-lg shadow-md dark:bg-gray-800 overflow-hidden">
                        < Link onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} to={`/movie/${suggestion.id}`} state={{ suggestion: suggestion.id, title: suggestion.nombre, description: suggestion.sinopsis, imgSrc: suggestion.img, schedule: suggestion.horario, puntuation: suggestion.calificacion, reviews: suggestion.reviews, categoria:suggestion.categoria }}>
                            <img src={suggestion.img} alt={suggestion.nombre} className="w-full h-100 object-cover" />
                        </Link>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{suggestion.nombre}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
