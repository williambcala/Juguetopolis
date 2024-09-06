// Cart.jsx
import React, { useState } from 'react';
import { useShoppingCart } from '../contexts/ShoppingCartContext';

function Cart() {
    const { cartItems, removeFromCart, updateItemQuantity, getTotalPrice } = useShoppingCart();
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (movieId, newQuantity) => {
        if (newQuantity < 1) return; // No permitir cantidades menores a 1
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [movieId]: newQuantity,
        }));
        updateItemQuantity(movieId, newQuantity);
    };

    const incrementQuantity = (movieId) => {
        setQuantities((prevQuantities) => {
            const newQuantity = (prevQuantities[movieId] || 1) + 1;
            handleQuantityChange(movieId, newQuantity);
            return {
                ...prevQuantities,
                [movieId]: newQuantity,
            };
        });
    };

    const decrementQuantity = (movieId) => {
        setQuantities((prevQuantities) => {
            const currentQuantity = prevQuantities[movieId] || 1;
            if (currentQuantity > 1) {
                const newQuantity = currentQuantity - 1;
                handleQuantityChange(movieId, newQuantity);
                return {
                    ...prevQuantities,
                    [movieId]: newQuantity,
                };
            }
            return prevQuantities;
        });
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>No hay artículos en el carrito.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.movieId} className="flex justify-between items-center mb-4">
                            <div>
                                <h3>{item.title}</h3>
                                <p>${item.price}</p>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => decrementQuantity(item.movieId)}
                                    className="bg-gray-500 text-white p-2 rounded-lg mr-2"
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantities[item.movieId] || item.quantity}
                                    readOnly
                                    className="w-16 p-1 border rounded-lg text-center mx-2"
                                />
                                <button
                                    onClick={() => incrementQuantity(item.movieId)}
                                    className="bg-gray-500 text-white p-2 rounded-lg"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => removeFromCart(item.movieId)}
                                    className="bg-red-500 text-white p-2 rounded-lg ml-2"
                                >
                                    Remover
                                </button>
                            </div>
                        </div>
                    ))}
                    <h3 className="text-xl font-bold mt-4">Total: ${getTotalPrice()}</h3>
                </div>
            )}
        </div>
    );
}

export default Cart;
