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
        setSelectedTag(""); //para setear el estado del filtro 
    }, [location]);

    const filteredMovies = selectedTag
        ? infosalas.filter((movie) => movie.tags.includes(selectedTag))
        : infosalas;

    return (
        <div>
            <div className="w-full mx-auto mt-4 px-4 py-4px">

                <FilterComponent handleTagSelect={handleTagSelect} />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
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
                            categoria ={movie.categoria}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
