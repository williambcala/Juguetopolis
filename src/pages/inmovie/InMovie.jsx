import React, { useEffect, useState } from 'react';
import { Puntuation } from '../../components/moviescomponent/Puntuation';
import { Schedule } from '../../components/moviescomponent/Schedule';
import { useLocation, useParams } from 'react-router-dom';
import { SolicitudHorario } from '../../components/moviescomponent/SolicitudHorario';
import { useSelector } from 'react-redux';
import sugerencias from "../../../src/pages/sugerencias.json";
import { SuggestionsCards } from '../../components/homecomponent/SuggestionsCards';
import infosalas from "../../../src/pages/infosalas.json";

export const InMovie = () => {
    const { id } = useParams();
    const location = useLocation();
    const { title, description, imgSrc, schedule, puntuation, reviews, categoria } = location.state;
    const { email } = useSelector(state => state.auth);

    // Filtra las primeras tres imágenes del json basadas en el id de la ruta
    const filteredSuggestions = infosalas.filter(movie => movie.categoria == categoria && title !== movie.nombre) ;

    return (
        <section className="bg-white md:py-8 dark:bg-gray-900 antialiased font-serif">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-5 lg:gap-8 xl:gap-16">
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto col-span-2">
                        <img className="w-auto h-5/6 dark:hidden" src={imgSrc} alt="" />
                        <img className="w-auto hidden dark:block" src={imgSrc} alt="" />
                    </div>
                    <div className="mt-4 sm:mt-8 lg:mt-0 col-span-2">
                        <div className="mt-4 font-serif sm:mt-8 lg:mt-0">
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <h1 className="text-xl font-black text-gray-900 sm:text-5xl dark:text-white">
                                    {title}
                                </h1>
                            </div>
                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                    Sinopsis
                                </p>
                                <Puntuation puntuation={puntuation} reviews={reviews} />
                            </div>
                        </div>
                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                        <p className="mb-6 text-gray-500 dark:text-gray-400">
                            {description}
                        </p>
                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            {email ? <SolicitudHorario horario={schedule} state={schedule} /> : <p>Por favor, inicie sesión para comprar.</p>}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <Schedule schedule={schedule} />
                    </div>
                </div>
                <SuggestionsCards suggestions={filteredSuggestions} />
            </div>
        </section>
    );
};
