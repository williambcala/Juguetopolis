import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Modal } from "flowbite-react";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import LogIn from "../../pages/login/LogIn";
import { signOutThunk } from "../../redux/slices/auth/Thunks";

let customButtonTheme = {
  color: {
    primary: "bg-black-600 text-white hover:bg-black hover:text-black-600",
  },
};

const NavbarComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const { email } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const closeModal = () => {
    setOpenModal(false);
  }

  return (
    <>
      <Navbar className="bg-yellow-300 font-serif" fluid>
        <NavbarBrand>
          <img src="/logo3.png" className="mr-3 h-12 sm:h-24" alt="Juguetopolis Logo" />
          <span className="self-center text-white text-3xl font-semibold">Juguetopolis</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          {!email ? 
            <Button theme={customButtonTheme} onClick={() => setOpenModal(true)} color="primary">Iniciar Sesion</Button> 
            : 
            <Button onClick={() => dispatch(signOutThunk())} theme={customButtonTheme} color="primary">Logout</Button>
          }
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <Link to="/home" className="text-black text-xl">Juguetes</Link>
          <Link to="/cartelera" className="text-black text-xl">Marcas</Link>
          <Link to="/categoria" className="text-black text-xl">Ofertas</Link>
          <Link to="/aboutus" className="text-black text-xl">Nuevo</Link>
        </NavbarCollapse>
      </Navbar>
      <Modal show={openModal} size="md" popup onClose={closeModal}>
        <Modal.Header />
        <Modal.Body>
          <LogIn closeModal={closeModal} />
        </Modal.Body>
        <Modal.Footer />
      </Modal>
    </>
  );
}

export default NavbarComponent;