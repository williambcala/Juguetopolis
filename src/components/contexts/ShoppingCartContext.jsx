import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const ShoppingCartContext = createContext();

// Hook para usar el contexto
export function useShoppingCart() {
    return useContext(ShoppingCartContext);
}

// Proveedor del contexto
export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    // Función para agregar un artículo al carrito
    const addToCart = (movie) => {
        setCartItems((prevItems) => {
            // Verificar si el artículo ya existe en el carrito
            const existingItem = prevItems.find(item => item.movieId === movie.movieId);

            if (existingItem) {
                // Si ya existe, incrementar la cantidad
                return prevItems.map(item =>
                    item.movieId === movie.movieId
                        ? { ...item, quantity: (item.quantity || 1) + 1 } // Aumentar la cantidad
                        : item
                );
            }

            // Si no existe, agregar el nuevo artículo
            return [...prevItems, { ...movie, quantity: 1 }]; // Inicializar cantidad en 1
        });
    };

    // Función para remover un artículo del carrito
    const removeFromCart = (movieId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.movieId !== movieId));
    };

    // Función para actualizar la cantidad de un artículo
    const updateItemQuantity = (movieId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.movieId === movieId ? { ...item, quantity } : item
            )
        );
    };

    // Calcular el precio total
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    };

    return (
        <ShoppingCartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateItemQuantity, getTotalPrice }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}
