import React, { useState, useEffect } from 'react';
import { Badge, Button, Modal } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaChair } from 'react-icons/fa'; // Importar el ícono de silla

const ReservaPage = () => {
  const { email } = useSelector(state => state.auth);
  const { id, selectedSchedule } = useParams();

  const sillasSala = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    reservada: false,
  }));

  const loadSillasFromLocalStorage = (id) => {
    const savedSillas = localStorage.getItem(`sillasSala_${id}_${selectedSchedule}`);
    return savedSillas ? JSON.parse(savedSillas) : sillasSala;
  };

  const [sillasSalaList, setSillasSalaList] = useState(() => loadSillasFromLocalStorage(id));
  const [openModal, setOpenModal] = useState({ open: false, id: null });
  const [showModalSillaReservada, setShowModalSillaReservada] = useState(false);

  const reservarSilla = () => {
    setOpenModal(false);
    const sillaSeleccionada = sillasSalaList.map((silla) =>
      silla.id === openModal.id ? { ...silla, reservada: true } : silla
    );
    setSillasSalaList(sillaSeleccionada);
    setShowModalSillaReservada(true);
    localStorage.setItem(`sillasSala_${id}_${selectedSchedule}`, JSON.stringify(sillaSeleccionada));
  };

  useEffect(() => {
    setSillasSalaList(loadSillasFromLocalStorage(id));
  }, [id]);

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <Badge color="dark" className="text-3xl justify-center">
              Aula de Juegos
            </Badge>
            <br />
          </div>
          {email ? (
            <div className="grid grid-cols-4 gap-4"> {/* Cambiar a 4x4 */}
              {sillasSalaList.map((silla, key) => {
                return (
                  <Badge
                    key={key}
                    color={!silla.reservada ? "success" : "failure"}
                    className="flex items-center justify-center h-24 w-24" // Hacer más grandes los recuadros
                    onClick={!silla.reservada ? () => setOpenModal({ open: true, id: silla.id }) : () => {}}
                  >
                    <FaChair size={40} className="text-gray-800 dark:text-white" /> {/* Agregar icono de silla */}
                  </Badge>
                );
              })}
            </div>
          ) : (
            <div>Por favor inicie sesión para reservar...</div>
          )}
        </div>
      </section>

      <Modal show={openModal.open} size="md" popup onClose={() => setOpenModal({ open: false, id: null })}>
        <Modal.Header>Reservación</Modal.Header>
        <Modal.Body className="justify-center">
          ¿Está seguro que desea reservar este lugar?
        </Modal.Body>
        <Modal.Footer className="justify-center">
          <Button color="gray" onClick={() => setOpenModal({ open: false, id: null })}>
            Cancelar
          </Button>
          <Button onClick={() => reservarSilla()}>Aceptar</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalSillaReservada} size="md" popup onClose={() => setShowModalSillaReservada(false)}>
        <Modal.Header>Reserva de aula ludica exitosa</Modal.Header>
        <Modal.Body>La reserva se ha enviado al correo registrado</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ReservaPage;
