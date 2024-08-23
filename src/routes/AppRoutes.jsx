import React from 'react';
import Home from "../components/homecomponent/Home";
import { InMovie } from '../pages/inmovie/InMovie';
import NotFound from '../components/homecomponent/NotFound';
import { useRoutes } from "react-router-dom";
import ListaCategories from '../components/categoriescomponent/ListaCategories';
import CardCategories from '../components/categoriescomponent/CardCategories';
import ActionCategory from '../components/categoriescomponent/InEachCategory/ActionCategory';
import AdventureCategory from '../components/categoriescomponent/InEachCategory/AdventureCategory';
import FantasyCategory from '../components/categoriescomponent/InEachCategory/FantasyCategory';
import TerrorCategory from '../components/categoriescomponent/InEachCategory/TerrorCategory';
import ReservaPage from "../pages/reserva/ReservaPage";
import SignUp from '../pages/login/SignUp';
import AboutUs from '../pages/aboutus/AboutUs';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/aboutus', element: <AboutUs /> },
        { path: '/home/signup', element: <SignUp /> },
        { path: '/movie/:id', element: <InMovie /> },
        { path: '/movie/:id/reserva/:selectedSchedule', element: <ReservaPage /> },
        { path: '/categoria', element: <ListaCategories /> },
        { path: '/categoria/:title', element: <CardCategories /> },
        { path: '/categoria/Acción', element: <ActionCategory /> },
        { path: '/categoria/Aventura', element: <AdventureCategory /> },
        { path: '/categoria/Fantasía', element: <FantasyCategory /> },
        { path: '/categoria/Terror', element: <TerrorCategory /> },
        { path: '/*', element: <NotFound /> }
    ]);

    return routes;
};

export default AppRoutes;
