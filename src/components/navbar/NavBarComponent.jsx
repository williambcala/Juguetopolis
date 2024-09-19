import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Modal } from "flowbite-react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import LogIn from "../../pages/login/LogIn";
import { signOutThunk } from "../../redux/slices/auth/Thunks";

const NavbarComponent = () => {
  // Estados y hooks
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email); // Asegúrate de que el selector esté correcto según tu estado global

  // Manejo del modal
  const closeModal = () => {
    setOpenModal(false);
  };

  // Definición del tema para los botones
  const customButtonTheme = {
    color: {
      primary: "bg-blue-300 text-white hover:bg-blue-800 transition duration-300",
    },
  };

  return (
    <>
      <Navbar className="bg-gradient-to-r from-blue-300 via-blue-700 to-blue-600 font-serif shadow-md" fluid={true}>
        <NavbarBrand>
          <img src="/logo3.png" className="mr-3 h-12 sm:h-16" alt="Juguetopolis Logo" />
          <span className="self-center text-gray-800 text-3xl font-bold tracking-wide">Juguetopolis</span>
        </NavbarBrand>

        <div className="flex md:order-2">
          {!email ? (
            <Button 
              theme={customButtonTheme} 
              onClick={() => setOpenModal(true)} 
              color="red"
              className="rounded-full px-4 py-2"
              aria-label="Iniciar Sesión"
            >
              Iniciar Sesión
            </Button>
          ) : (
            <Button 
              onClick={() => dispatch(signOutThunk())} 
              theme={customButtonTheme} 
              color="red"
              className="rounded-full px-4 py-2"
              aria-label="Cerrar Sesión"
            >
              Logout
            </Button>
          )}
          <NavbarToggle />
        </div>

        <NavbarCollapse>
          <Link to="/home" className="text-gray-200 text-xl hover:text-blue-700 transition duration-200">Juguetes</Link>
          <Link to="/cart" className="text-gray-200 text-xl hover:text-blue-700 transition duration-200">Carrito</Link>
          <Link to="/cartelera" className="text-gray-200 text-xl hover:text-blue-700 transition duration-200">Fundaciones</Link>
          <Link to="/categoria" className="text-gray-200 text-xl hover:text-blue-700 transition duration-200">Ofertas</Link>
          <Link to="/aboutus" className="text-gray-200 text-xl hover:text-blue-700 transition duration-200">Nuevo</Link>
        </NavbarCollapse>
      </Navbar>

      {/* Modal para inicio de sesión */}
      <Modal show={openModal} size="md" popup={true} onClose={closeModal}>
        <Modal.Header />
        <Modal.Body>
          <LogIn closeModal={closeModal} />
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
};

export default NavbarComponent;
