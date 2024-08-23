import React from 'react'
import { useState } from 'react';
import { Badge, Button, Modal } from 'flowbite-react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ReservaPage = () => {
  const {email} = useSelector(state => state.auth);
  const { id, selectedSchedule } = useParams();
 
  const sillasSala = Array.from({ length: 30 }, (_, index) => ({
    id: index + 1,
    reservada: false,
  }));

  const loadSillasFromLocalStorage = (id) => {
    const savedSillas = localStorage.getItem(`sillasSala_${id}_${selectedSchedule}`);
    return savedSillas ? JSON.parse(savedSillas) : sillasSala;};


  const [sillasSalaList, setSillasSalaList] = useState(() => loadSillasFromLocalStorage(id));
  const [openModal, setOpenModal] = useState({
    open: false,
    id: null
  });

  const [showModalSillaReservada, setShowModalSillaReservada] = useState(false)

  const reservarSilla = () => {
    
    setOpenModal(false);
    
    const sillaSeleccionada = sillasSalaList.map((silla) => silla.id == openModal.id? { ...silla, reservada: true } : silla);

    sillaSeleccionada.reservada = true;
    setSillasSalaList(sillaSeleccionada);
    setShowModalSillaReservada(true);

    localStorage.setItem(`sillasSala_${id}_${selectedSchedule}`, JSON.stringify(sillaSeleccionada));
  };
  useEffect(() => {
    setSillasSalaList(loadSillasFromLocalStorage(id));}, [id]);
  

    return (
      
      <>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <Badge color="dark" className='text-2xl justify-center'>
                Pantalla
            </Badge>
            <br></br>
          </div>
          {email ? 
          <div className="grid grid-cols-5 md:grid-cols-5 gap-4">
          {
            sillasSalaList.map(
            (silla, key) => {
              return ( 
              <Badge key={key} color={!silla.reservada ? "success" : "failure"} className="justify-center" onClick={!silla.reservada ? () => setOpenModal({
                open: true,
                id:silla.id
              }) : () => {}}>
                
                <svg className="w-6 h-6 text-gray-800 text-center dark:text-white" aria-hidden="true" width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                <path className="text-center" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM7.99 9a1 1 0 0 1 1-1H9a1 1 0 0 1 0 2h-.01a1 1 0 0 1-1-1ZM14 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm-5.506 7.216A5.5 5.5 0 0 1 6.6 13h10.81a5.5 5.5 0 0 1-8.916 3.216Z" clip-rule="evenodd"/>
                </svg>
                
              </Badge>
              )}
              )      
            }
          </div>
          : 
            <div>Por favor inicie sesión para comprar...</div>
          }
        </div>
      </section>
      
    <Modal show={openModal.open} size="md" popup onClose={() => setOpenModal({open: false,id: null })}>
      <Modal.Header>
        Reservación
      </Modal.Header>
      <Modal.Body className='justify-center'>
      ¿Está seguro que desea comprar este producto?
      </Modal.Body>
      <Modal.Footer className='justify-center'>
      <Button color="gray" onClick={() => setOpenModal({open: false,id: null })}>
            Cancelar
      </Button>
      <Button onClick={() => reservarSilla()}>Aceptar</Button>
          
      </Modal.Footer>
    </Modal>

    <Modal show={showModalSillaReservada} size="md" popup onClose={() => setShowModalSillaReservada(false)}>
      <Modal.Header>
        Reserva exitosa
      </Modal.Header>
      <Modal.Body>
            El ticket se ha enviado al correo registrado
      </Modal.Body>
      <Modal.Footer>
          
      </Modal.Footer>
    </Modal>

        </>
    );
}


export default ReservaPage;
