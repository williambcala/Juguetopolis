import React, { useState } from 'react';
import { signInThunk } from '../../redux/slices/auth/Thunks';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'flowbite-react';
import { startGoogleSignIn } from '../../redux/actions/authActions';

const LogIn = ({ closeModal }) => {
  const { error, email } = useSelector(state => state.auth);
  const [emailInput, setEmailInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSetEmail = (event) => {
    setEmailInput(event.target.value);
  }

  const onSetPassword = (event) => {
    setPassword(event.target.value);
  }

  const onClickLogin = (e) => {
    e.preventDefault();
    dispatch(signInThunk(emailInput, password));
  }

  const onClickRegister = () => {
    closeModal();
    navigate('/home/signup');
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <form className='flex justify-center p-8'>
      <div className="max-w-md w-full">
        <label htmlFor="inicio_sesion" className="block mb-4 text-4xl font-black text-gray-900 text-center dark:text-white">Iniciar Sesión</label>
        <label className='block mb-4 text-center text-red-900 dark:text-white'>{error}</label>
        {!email ? (
          <>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Correo Electrónico</label>
              <input type="email" value={emailInput} onChange={onSetEmail} id="email" className="bg-red-50 border border-red-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="juan.rodriguez@company.com" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input type="password" value={password} onChange={onSetPassword} id="password" className="bg-red-50 border border-red-300 text-gray-900 text-base rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="•••••••••" required />
            </div>
            <button type="submit" onClick={onClickLogin} className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full">Ingresar</button>
            <br />
            <br />
            <button type="button" onClick={onGoogleSignIn} className="text-white bg-red-700 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 w-full">Ingresar con Google</button>
            <Link to="/home/signup" onClick={(event) => onClickRegister(event)}  style={{ margin: "40px", display: "block", textAlign: "center", textDecoration: "none", color: "#000" }}>¿No tienes cuenta? Regístrate</Link>
          </>
        ) : (
          <Alert color="success" onDismiss={closeModal}>
            <span className="font-medium">¡Has iniciado sesión correctamente!</span>
          </Alert>
        )}
      </div>
    </form>
  );
}

export default LogIn;
