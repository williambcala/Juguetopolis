import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";

export function MovieCard({ movieId, title, description, imgSrc, imgAlt, schedule, puntuation, reviews, categoria, price }) {
    const [showDescription, setShowDescription] = useState(false);
    const { addToCart } = useShoppingCart(); // Usar el contexto del carrito
    
    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevenir la navegación al hacer clic en el botón
        const movie = { movieId, title, description, imgSrc, schedule, puntuation, reviews, categoria, price };
        addToCart(movie);
    };

    return (
        <div>
            <Link to={`/movie/${movieId}`} style={{ textDecoration: "none" }} state={{ movieId, title, description, imgSrc, schedule, puntuation, reviews, categoria }}>
                <div
                    className="max-w-sm relative"
                    onMouseEnter={() => setShowDescription(true)}
                    onMouseLeave={() => setShowDescription(false)}
                    style={{ margin: "40px", cursor: "pointer" }}
                >
                    <img src={imgSrc} alt={imgAlt} className="w-full rounded-2xl shadow-lg " />
                    <div className=" absolute bottom-0 left-0 right-0 p-4 rounded-2xl bg-gray-900 bg-opacity-75 transition-opacity duration-300 opacity-0 hover:opacity-100" 
                    style={{ opacity: showDescription ? 1 : 0, overflow: 'hidden', width: '100%', height: '100%' }}>
                        <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
                        <p className="font-normal text-gray-200">{description}</p>                    
                    </div>
                </div>
            </Link>
            {/* Botón para agregar al carrito */}
            <button onClick={handleAddToCart} className="mt-2 p-2 bg-blue-500 text-white rounded-lg">
                Agregar al carrito - ${price}
            </button>
        </div>
    );
}
