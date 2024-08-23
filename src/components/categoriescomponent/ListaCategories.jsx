import React from 'react';
import CardCategories from './CardCategories';
import { TbSwords } from 'react-icons/tb';
import { PiCampfireDuotone } from "react-icons/pi";
import { GiBlood } from "react-icons/gi";
import { SlMagicWand } from "react-icons/sl";




const categorias = [
    {
        id: 1,
        title: 'Acción',
        imgSrc: 'https://www.shutterstock.com/image-photo/motril-spain-09242022-collectible-figurines-600nw-2248181147.jpg',
        icon: TbSwords
    },
    {
        id: 2,
        title: 'Aventura',
        imgSrc: 'https://ae01.alicdn.com/kf/Sa10459046e9d42ffbd01a61ede253fa7R/Juego-de-gemas-de-acr-lico-para-caza-de-tesoros-en-la-playa-Mini-patos-aventura.jpg',
        icon: PiCampfireDuotone
    },

    {
        id: 3,
        title: 'Fantasía',
        imgSrc: 'https://www.shutterstock.com/image-photo/handicraft-toys-we-play-fairy-260nw-2118390932.jpg',
        icon: SlMagicWand

    },

    {
        id: 4,
        title: 'Familia',
        imgSrc: 'https://www.shutterstock.com/image-photo/happy-caring-parents-two-sibling-260nw-2418256745.jpg',
        icon: GiBlood

    }
];

const ListaCategories = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorias.map(categoria => (
                <CardCategories
                    key={categoria.id}
                    title={categoria.title}
                    description={categoria.description}
                    imgSrc={categoria.imgSrc}
                    icon={categoria.icon} // Pasa el icono correspondiente como prop
                />
            ))}
        </div>
    );
}

export { categorias };
export default ListaCategories;
