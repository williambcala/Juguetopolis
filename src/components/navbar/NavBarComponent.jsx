import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Modal } from "flowbite-react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import LogIn from "../../pages/login/LogIn";
import { signOutThunk } from "../../redux/slices/auth/Thunks";

// Definir un tema personalizado para los botones
let customButtonTheme = {
  color: {
    primary: "bg-black-600 text-white hover:bg-black hover:text-black-600",
  },
};

const NavbarComponent = () => {
  const [openModal, setOpenModal] = useState(false); // Controlar el modal
  const { email } = useSelector(state => state.auth); // Obtener el estado de autenticación desde Redux
  const dispatch = useDispatch();

  const closeModal = () => {
    setOpenModal(false); // Cerrar el modal
  }

  return (
    <>
      <Navbar className="bg-yellow-300 font-serif" fluid={true}>
        <NavbarBrand>
          <img src="/logo3.png" className="mr-3 h-12 sm:h-24" alt="Juguetopolis Logo" />
          <span className="self-center text-white text-3xl font-semibold">Juguetopolis</span>
        </NavbarBrand>

        <div className="flex md:order-2">
          {/* Mostrar el botón de inicio de sesión o cierre de sesión dependiendo del estado de autenticación */}
          {!email ? (
            <Button 
              theme={customButtonTheme} 
              onClick={() => setOpenModal(true)} 
              color="primary"
              aria-label="Iniciar Sesión"
            >
              Iniciar Sesión
            </Button>
          ) : (
            <Button 
              onClick={() => dispatch(signOutThunk())} 
              theme={customButtonTheme} 
              color="primary"
              aria-label="Cerrar Sesión"
            >
              Logout
            </Button>
          )}
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          {/* Agregar enlaces a las diferentes secciones de la página */}
          <Link to="/home" className="text-black text-xl">Juguetes</Link>
          <Link to="/cart" className="text-black text-xl">Carrito</Link> {/* Enlace al carrito */}
          <Link to="/cartelera" className="text-black text-xl">Marcas</Link>
          <Link to="/categoria" className="text-black text-xl">Ofertas</Link>
          <Link to="/aboutus" className="text-black text-xl">Nuevo</Link>
        </NavbarCollapse>
      </Navbar>

      {/* Modal para iniciar sesión */}
      <Modal show={openModal} size="md" popup={true} onClose={closeModal}>
        <Modal.Header />
        <Modal.Body>
          <LogIn closeModal={closeModal} /> {/* Componente de inicio de sesión */}
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

export default NavbarComponent;
