import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterComponent from "./FilterComponent";
import { MovieCard } from "./MovieCard";
import infosalas from "../../../src/pages/infosalas.json";

function Home() {
    const [selectedTag, setSelectedTag] = useState("");
    const location = useLocation();

    const handleTagSelect = (tag) => {
        setSelectedTag(tag);
    };

    useEffect(() => {
        setSelectedTag(""); // Para resetear el estado del filtro al cambiar de ubicación
    }, [location]);

    const filteredMovies = selectedTag
        ? infosalas.filter((movie) => movie.tags.includes(selectedTag))
        : infosalas;

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8 tracking-wide leading-tight">
                🎉 ¡Descubre Nuestros Productos! 🧸</h1>

            <FilterComponent handleTagSelect={handleTagSelect} />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {filteredMovies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        title={movie.nombre}
                        description={movie.sinopsis}
                        imgSrc={movie.img}
                        imgAlt={movie.nombre}
                        schedule={movie.horario}
                        puntuation={movie.calificacion}
                        reviews={movie.reviews}
                        categoria={movie.categoria}
                        price={movie.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
