import React from 'react';
import { useLocation } from 'react-router-dom'
    
export const Schedule = ({ schedule }) => {
  const location = useLocation()
  const { title} = location.state
  return (
    <div className="flex justify-center items-center font-serif">
      <div className="text-center">
        <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl dark:text-white">Precio de {title}</h2>
        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
        <ul className="space-y-4 text-sm">
          {schedule.map((price, index) => (
            <li key={index}>
              <p className="mb-2 text-gray-700 dark:text-gray-400">{}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};



