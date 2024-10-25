import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../contexts/ShoppingCartContext";
import { Modal, Button, Form, Input,  message } from "antd";

export function MovieCard({ movieId, title, description, imgSrc, imgAlt, schedule, puntuation, reviews, categoria, cantidad, price }) {
    const [showDescription, setShowDescription] = useState(false);
    const { addToCart } = useShoppingCart(); // Usar el contexto del carrito
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm(); // Instanciar el formulario

    const handleAddToCart = (e) => {
        e.preventDefault(); // Prevenir la navegación al hacer clic en el botón
        const movie = { movieId, title, description, imgSrc, schedule, puntuation, reviews, categoria, cantidad, price };
        addToCart(movie);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                // Aquí puedes manejar el envío de la información de contacto
                console.log("Información de contacto:", values);
                setIsModalOpen(false);
                message.success('Reserva Exitosa');
                form.resetFields(); // Reiniciar el formulario después de enviarlo
            })
            .catch(info => {
                console.log("Validación fallida:", info);
            });
    };

    const handleCancel = () => {
        setIsModalOpen(false);
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

            {/* Condicional para mostrar el botón según la cantidad */}
            {cantidad > 0 ? (
                <button onClick={handleAddToCart} className="mt-2 p-2 bg-blue-500 text-white rounded-lg">
                    Agregar al carrito - ${price}
                </button>
            ) : (
                <button onClick={showModal} className="mt-2 p-2 bg-red-500 text-white rounded-lg">
                    Reservar
                </button>
            )}

            {/* Modal para la reserva */}
            <Modal
                title="Reserva de juguete"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Reservar"
                okButtonProps={{ style: { backgroundColor: '#ff5733', borderColor: '#ff5733', color: 'white' } }}
                cancelText="Cancelar"
            >
                <p>{title} no está disponible en este momento. Déjanos tu información de contacto y te avisaremos cuando haya disponibilidad.</p>
                
                {/* Formulario dentro del modal */}
                <Form
                    form={form}
                    layout="vertical"
                    name="contact_form"
                    okButtonProps={{ style: { backgroundColor: '#ff5733', borderColor: '#ff5733', color: 'white' } }}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="Nombre"
                        name="name"
                        rules={[{ required: true, message: 'Por favor, ingresa tu nombre' }]}
                    >
                        <Input placeholder="Tu nombre" />
                    </Form.Item>

                    <Form.Item
                        label="Correo Electrónico"
                        name="email"
                        rules={[
                            { required: true, message: 'Por favor, ingresa tu correo electrónico' },
                            { type: 'email', message: 'Por favor, ingresa un correo electrónico válido' }
                        ]}
                    >
                        <Input placeholder="Tu correo electrónico" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
