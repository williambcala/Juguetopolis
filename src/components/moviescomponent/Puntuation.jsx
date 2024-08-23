import React from 'react'
import StarsRating from './StarsRating'
import { useLocation } from 'react-router-dom'

export const Puntuation = ({puntuation}) => {
    const location = useLocation()
    const { reviews } = location.state
  return (
    <>
                <StarsRating puntuation={puntuation}/>
        <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
            ({puntuation})
        </p>
        
        <a
            href="#"
            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
        >
            {reviews} Reseñas
        </a>
    </>
    
  )
}

