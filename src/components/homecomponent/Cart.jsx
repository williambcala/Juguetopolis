import React, { useState } from 'react';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import { Modal, Button, Input, Select, Form, message } from 'antd';

const { Option } = Select;

function Cart() {
    const { cartItems, removeFromCart, updateItemQuantity, getTotalPrice } = useShoppingCart();
    const [quantities, setQuantities] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

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

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        // Verifica si la dirección y el método de pago están llenos
        if (!address || !paymentMethod) {
            message.error('Por favor completa la dirección de envío y el método de pago.');
            return;
        }

        // Lógica para proceder con la compra
        console.log('Dirección:', address);
        console.log('Método de pago:', paymentMethod);

        // Simula el éxito de la compra
        message.success('Compra exitosa');

        // Cierra el modal
        setIsModalVisible(false);

        // Resetea el formulario
        setAddress('');
        setPaymentMethod('');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
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

                    <Button type="primary" onClick={showModal} className="mt-4" style={{ backgroundColor: '#ff5733', borderColor: '#ff5733' }}>
                        Comprar
                    </Button>

                    <Modal
                        title="Resumen de la Compra"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="Proceder con la compra"
                        okButtonProps={{ style: { backgroundColor: '#ff5733', borderColor: '#ff5733', color: 'white' } }}
                        cancelText="Cancelar"
                    >
                        <div>
                            <h3>Resumen de los productos:</h3>
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.movieId}>
                                        {item.title} - {quantities[item.movieId] || item.quantity} x ${item.price}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="mt-4">Total: ${getTotalPrice()}</h3>

                            <Form layout="vertical">
                                <Form.Item label="Dirección de envío" required>
                                    <Input
                                        placeholder="Ingresa tu dirección"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </Form.Item>

                                <Form.Item label="Método de pago" required>
                                    <Select
                                        placeholder="Selecciona un método de pago"
                                        value={paymentMethod}
                                        onChange={(value) => setPaymentMethod(value)}
                                    >
                                        <Option value="credit">Tarjeta de Crédito</Option>
                                        <Option value="paypal">PayPal</Option>
                                        <Option value="cash">Pago en Efectivo</Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>
                </div>
            )}
        </div>
    );
}

export default Cart;
