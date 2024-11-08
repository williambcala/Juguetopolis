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
    const [selectedFoundation, setSelectedFoundation] = useState('');
    const [donationAmount, setDonationAmount] = useState('');
    const [showSummary, setShowSummary] = useState(false);
    const [purchaseData, setPurchaseData] = useState({});

    const handleQuantityChange = (movieId, newQuantity, stock) => {
        if (newQuantity < 1 || newQuantity > stock) return;
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [movieId]: newQuantity,
        }));
        updateItemQuantity(movieId, newQuantity);
    };

    const incrementQuantity = (movieId, stock) => {
        setQuantities((prevQuantities) => {
            const newQuantity = (prevQuantities[movieId] || 1) + 1;
            if (newQuantity > stock) {
                message.warning(`Solo hay ${stock} unidades disponibles.`);
                return prevQuantities;
            }
            handleQuantityChange(movieId, newQuantity, stock);
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
        // Validación de los campos obligatorios
        if (!address || !paymentMethod) {
            message.error('Por favor completa todos los campos obligatorios antes de proceder.');
            return;
        }

        // Validación del monto de la donación
        const donation = parseFloat(donationAmount);

        // Verifica si el monto de la donación es un número y es mayor o igual a 0
        if (donationAmount && (isNaN(donation) || donation < 0)) {
            message.error('Por favor ingresa un monto válido para la donación (solo números y mayor o igual a 0).');
            return;
        }

        const totalWithDonation = getTotalPrice() + (isNaN(donation) ? 0 : donation);

        setPurchaseData({
            address,
            paymentMethod,
            selectedFoundation: donation > 0 ? selectedFoundation : 'N/A', // Fundación solo si hay donación
            donationAmount: donation,
            total: totalWithDonation,
        });

        // Simula el éxito de la compra
        message.success('Compra exitosa');

        // Solo muestra el mensaje de agradecimiento por la donación si se ha donado
        if (donation > 0) {
            message.success(`Donación enviada, la fundación ${selectedFoundation} se lo agradece.`);
        }

        // Cierra el modal y muestra el resumen
        setIsModalVisible(false);
        setShowSummary(true);

        // Resetea el formulario
        setAddress('');
        setPaymentMethod('');
        setSelectedFoundation('');
        setDonationAmount('');
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
                                    placeholder='1'
                                    readOnly
                                    className="w-16 p-1 border rounded-lg text-center mx-2"
                                />
                                <button
                                    onClick={() => incrementQuantity(item.movieId, item.cantidad)} // Paso el stock disponible (item.cantidad)
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
                        title="Resumen de pedido"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="Proceder con la compra"
                        okButtonProps={{ style: { backgroundColor: '#ff5733', borderColor: '#ff5733', color: 'white' } }}
                        cancelText="Cancelar"
                    >
                        <div>
                            <h3>Resumen de los juguetes:</h3>
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.movieId}>
                                        {item.title} - {quantities[item.movieId] || item.quantity} x ${item.price}
                                    </li>
                                ))}
                            </ul>

                            <h3 className="mt-4">Total con donación: ${(getTotalPrice() + parseFloat(donationAmount || 0)).toFixed(2)}</h3>

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

                                {/* Campo de donación opcional */}
                                <Form.Item label="Monto de la donación (opcional)">
                                    <Input
                                        type="text" // Usar tipo "text" para validar mejor la entrada
                                        placeholder="Ingresa el monto a donar (opcional)"
                                        value={donationAmount}
                                        onChange={(e) => {
                                            const value = e.target.value;

                                            // Filtrar solo caracteres numéricos
                                            const filteredValue = value.replace(/[^0-9]/g, '');
                                            setDonationAmount(filteredValue);
                                        }}
                                    />
                                </Form.Item>

                                {/* Mostrar la selección de fundación solo si hay donación */}
                                {parseFloat(donationAmount) > 0 && (
                                    <Form.Item label="Seleccionar fundación">
                                        <Select
                                            placeholder="Selecciona una fundación"
                                            value={selectedFoundation}
                                            onChange={(value) => setSelectedFoundation(value)}
                                        >
                                            <Option value="Fundación Jera">Fundación Jera</Option>
                                            <Option value="Fundación Chiquitines">Fundación Chiquitines</Option>
                                            <Option value="Casita de Belén">Casita de Belén</Option>
                                        </Select>
                                    </Form.Item>
                                )}
                            </Form>
                        </div>
                    </Modal>

                    {/* Resumen de la compra */}
                    {showSummary && (
                        <div className="mt-8 p-4 border rounded-lg shadow-md bg-gray-100">
                        <h3 className="text-xl font-bold">Resumen de tu compra:</h3>
                        <p><strong>Dirección de envío:</strong> {purchaseData.address || 'No disponible'}</p>
                        <p><strong>Método de pago:</strong> {purchaseData.paymentMethod || 'No disponible'}</p>
                
                        {/* Solo muestra la fundación y monto de donación si hay una donación */}
                        {parseFloat(purchaseData.donationAmount) > 0 && (
                            <>
                                <p><strong>Fundación seleccionada:</strong> {purchaseData.selectedFoundation || 'No disponible'}</p>
                                <p><strong>Monto de la donación:</strong> ${parseFloat(purchaseData.donationAmount).toFixed(2)}</p>
                            </>
                        )}
                
                        <p><strong>Total con donación:</strong> ${parseFloat(purchaseData.total).toFixed(2)}</p>
                    </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Cart;
